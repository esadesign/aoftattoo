import test from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_CONTENT } from '../data/defaultContent';
import {
  buildMailtoUrl,
  filterPortfolioItems,
  groupPortfolioByCategory,
  normalizeStudioContent,
  validateBookingForm,
} from './studioLogic';

test('groupPortfolioByCategory returns all 10 categories when filter is all', () => {
  const sections = groupPortfolioByCategory(
    DEFAULT_CONTENT.portfolio,
    DEFAULT_CONTENT.en.portfolio.categories,
    'all',
  );
  assert.equal(sections.length, 10);
  assert.equal(sections[0].category.slug, 'sak-yant');
  assert.equal(sections[0].items.length, 1);
  assert.equal(sections[9].category.slug, 'small-jobs');
});

test('groupPortfolioByCategory filters to a single category cleanly', () => {
  const sections = groupPortfolioByCategory(
    DEFAULT_CONTENT.portfolio,
    DEFAULT_CONTENT.th.portfolio.categories,
    'geometric',
  );
  assert.equal(sections.length, 1);
  assert.equal(sections[0].category.slug, 'geometric');
  assert.equal(sections[0].items.length, 1);
  assert.equal(sections[0].items[0].image, '/images/geometric/geometric-01.jpg');
});

test('filterPortfolioItems returns flat list matching category', () => {
  const allItems = filterPortfolioItems(DEFAULT_CONTENT.portfolio, 'all');
  assert.equal(allItems.length, 10);

  const sakYant = filterPortfolioItems(DEFAULT_CONTENT.portfolio, 'sak-yant');
  assert.equal(sakYant.length, 1);
  assert.equal(sakYant[0].category, 'sak-yant');
});

test('validateBookingForm catches missing fields and invalid email in EN and TH', () => {
  const enErrors = validateBookingForm(
    { name: '   ', email: 'not-an-email', message: '' },
    DEFAULT_CONTENT.en.contact.validation,
  );
  assert.equal(enErrors.name, DEFAULT_CONTENT.en.contact.validation.nameRequired);
  assert.equal(enErrors.email, DEFAULT_CONTENT.en.contact.validation.emailInvalid);
  assert.equal(enErrors.message, DEFAULT_CONTENT.en.contact.validation.messageRequired);

  const thErrors = validateBookingForm(
    { name: 'สมชาย', email: 'somchai@example.com', message: 'อยากสักยันต์' },
    DEFAULT_CONTENT.th.contact.validation,
  );
  assert.deepEqual(thErrors, {});
});

test('buildMailtoUrl encodes recipient, subject, and body properly', () => {
  const url = buildMailtoUrl('aof@aoftattoostudio.com', {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Sak Yant upper back, 20cm',
  });
  assert.ok(url.startsWith('mailto:aof@aoftattoostudio.com?subject='));
  assert.ok(url.includes(encodeURIComponent('John Doe')));
  assert.ok(url.includes(encodeURIComponent('Sak Yant upper back, 20cm')));
});

test('normalizeStudioContent merges partial CMS payload safely with defaults', () => {
  const merged = normalizeStudioContent({
    studio: { phone: '+66 99 000 0000' },
  });
  assert.equal(merged.studio.phone, '+66 99 000 0000');
  assert.equal(merged.studio.email, 'aof@aoftattoostudio.com');
  assert.equal(merged.portfolio.length, 10);
  assert.equal(merged.en.contact.faqs.length, 6);
  assert.equal(merged.th.contact.faqs.length, 6);
});
