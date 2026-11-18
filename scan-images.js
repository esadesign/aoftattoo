import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const CATEGORIES = [
  'sak-yant',
  'realistic',
  'geometric',
  'polynesian',
  'full-sleeve',
  'half-sleeve',
  'full-back',
  'coverup',
  'minimal',
  'small-jobs',
];

function formatTitle(filename, category) {
  const base = path.basename(filename, path.extname(filename));
  const cleaned = base
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (ch) => ch.toUpperCase())
    .trim();
  if (cleaned) {
    return cleaned;
  }
  return `${category.replace(/-/g, ' ')} Artwork`;
}

function scanPortfolioImages(publicDir, existingTitles) {
  const imagesRoot = path.join(publicDir, 'images');
  const portfolio = [];

  for (const category of CATEGORIES) {
    const categoryDir = path.join(imagesRoot, category);
    if (!fs.existsSync(categoryDir)) {
      continue;
    }

    const files = fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b));

    for (const file of files) {
      const imagePath = `/images/${category}/${file}`;
      portfolio.push({
        image: imagePath,
        category,
        title: existingTitles.get(imagePath) || formatTitle(file, category),
      });
    }
  }

  return portfolio;
}

function run() {
  const rootDir = process.cwd();
  const publicDir = path.join(rootDir, 'public');
  const contentFile = path.join(publicDir, 'data', 'content.json');

  if (!fs.existsSync(contentFile)) {
    console.error(`Error: ${contentFile} not found.`);
    process.exit(1);
  }

  const raw = fs.readFileSync(contentFile, 'utf8');
  const content = JSON.parse(raw);

  const existingTitles = new Map(
    Array.isArray(content.portfolio)
      ? content.portfolio
          .filter((item) => item && typeof item.image === 'string' && typeof item.title === 'string')
          .map((item) => [item.image, item.title])
      : [],
  );

  const scannedPortfolio = scanPortfolioImages(publicDir, existingTitles);
  content.portfolio = scannedPortfolio;

  fs.writeFileSync(contentFile, `${JSON.stringify(content, null, 2)}\n`, 'utf8');
  console.log(`Updated ${contentFile} with ${scannedPortfolio.length} portfolio image(s).`);
}

run();
