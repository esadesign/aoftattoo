import { DEFAULT_CONTENT } from '../data/defaultContent';
import {
  BookingFormErrors,
  BookingFormValues,
  CategoryMeta,
  CategorySlug,
  LocaleContent,
  PortfolioItem,
  StudioContentData,
} from '../types/studio';

export interface GroupedPortfolioSection {
  category: CategoryMeta;
  items: PortfolioItem[];
}

export function groupPortfolioByCategory(
  items: PortfolioItem[],
  categories: CategoryMeta[],
  activeCategory: CategorySlug | 'all',
): GroupedPortfolioSection[] {
  const targetCategories =
    activeCategory === 'all'
      ? categories
      : categories.filter((category) => category.slug === activeCategory);

  return targetCategories.map((category) => ({
    category,
    items: items.filter((item) => item.category === category.slug),
  }));
}

export function filterPortfolioItems(
  items: PortfolioItem[],
  activeCategory: CategorySlug | 'all',
): PortfolioItem[] {
  if (activeCategory === 'all') {
    return items;
  }
  return items.filter((item) => item.category === activeCategory);
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBookingForm(
  values: BookingFormValues,
  validationMessages: LocaleContent['contact']['validation'],
): BookingFormErrors {
  const errors: BookingFormErrors = {};

  if (!values.name.trim()) {
    errors.name = validationMessages.nameRequired;
  }

  if (!values.email.trim() || !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = validationMessages.emailInvalid;
  }

  if (!values.message.trim()) {
    errors.message = validationMessages.messageRequired;
  }

  return errors;
}

export function buildMailtoUrl(
  studioEmail: string,
  values: BookingFormValues,
): string {
  const cleanName = values.name.trim();
  const cleanEmail = values.email.trim();
  const cleanMessage = values.message.trim();

  const subject = encodeURIComponent(
    `Tattoo Session Inquiry from ${cleanName}`,
  );
  const body = encodeURIComponent(
    `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
  );

  return `mailto:${studioEmail}?subject=${subject}&body=${body}`;
}

export function normalizeStudioContent(raw: unknown): StudioContentData {
  if (!raw || typeof raw !== 'object') {
    return DEFAULT_CONTENT;
  }

  const candidate = raw as Partial<StudioContentData>;

  return {
    studio: {
      ...DEFAULT_CONTENT.studio,
      ...(candidate.studio ?? {}),
    },
    portfolio:
      Array.isArray(candidate.portfolio) && candidate.portfolio.length > 0
        ? candidate.portfolio
        : DEFAULT_CONTENT.portfolio,
    en: {
      ...DEFAULT_CONTENT.en,
      ...(candidate.en ?? {}),
      nav: { ...DEFAULT_CONTENT.en.nav, ...(candidate.en?.nav ?? {}) },
      hero: { ...DEFAULT_CONTENT.en.hero, ...(candidate.en?.hero ?? {}) },
      whyChooseUs: {
        ...DEFAULT_CONTENT.en.whyChooseUs,
        ...(candidate.en?.whyChooseUs ?? {}),
      },
      nailSalon: {
        ...DEFAULT_CONTENT.en.nailSalon,
        ...(candidate.en?.nailSalon ?? {}),
      },
      portfolio: {
        ...DEFAULT_CONTENT.en.portfolio,
        ...(candidate.en?.portfolio ?? {}),
      },
      contact: {
        ...DEFAULT_CONTENT.en.contact,
        ...(candidate.en?.contact ?? {}),
        validation: {
          ...DEFAULT_CONTENT.en.contact.validation,
          ...(candidate.en?.contact?.validation ?? {}),
        },
      },
      footer: { ...DEFAULT_CONTENT.en.footer, ...(candidate.en?.footer ?? {}) },
    },
    th: {
      ...DEFAULT_CONTENT.th,
      ...(candidate.th ?? {}),
      nav: { ...DEFAULT_CONTENT.th.nav, ...(candidate.th?.nav ?? {}) },
      hero: { ...DEFAULT_CONTENT.th.hero, ...(candidate.th?.hero ?? {}) },
      whyChooseUs: {
        ...DEFAULT_CONTENT.th.whyChooseUs,
        ...(candidate.th?.whyChooseUs ?? {}),
      },
      nailSalon: {
        ...DEFAULT_CONTENT.th.nailSalon,
        ...(candidate.th?.nailSalon ?? {}),
      },
      portfolio: {
        ...DEFAULT_CONTENT.th.portfolio,
        ...(candidate.th?.portfolio ?? {}),
      },
      contact: {
        ...DEFAULT_CONTENT.th.contact,
        ...(candidate.th?.contact ?? {}),
        validation: {
          ...DEFAULT_CONTENT.th.contact.validation,
          ...(candidate.th?.contact?.validation ?? {}),
        },
      },
      footer: { ...DEFAULT_CONTENT.th.footer, ...(candidate.th?.footer ?? {}) },
    },
  };
}
