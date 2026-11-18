export type Language = 'en' | 'th';

export type PageRoute = 'home' | 'portfolio' | 'contact';

export type CategorySlug =
  | 'sak-yant'
  | 'realistic'
  | 'geometric'
  | 'polynesian'
  | 'full-sleeve'
  | 'half-sleeve'
  | 'full-back'
  | 'coverup'
  | 'minimal'
  | 'small-jobs';

export interface PortfolioItem {
  image: string;
  category: CategorySlug;
  title: string;
}

export interface StudioInfo {
  name: string;
  heroImage: string;
  email: string;
  phone: string;
  address: string;
  mapEmbedUrl: string;
  instagram: string;
  facebook: string;
}

export interface WhyChooseUsCard {
  title: string;
  description: string;
}

export interface CategoryMeta {
  slug: CategorySlug;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocaleContent {
  nav: {
    home: string;
    portfolio: string;
    contact: string;
    langSwitchLabel: string;
    langSwitchAria: string;
    menuOpenAria: string;
    menuCloseAria: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    imageAlt: string;
    locationLine: string;
  };
  whyChooseUs: {
    heading: string;
    cards: WhyChooseUsCard[];
  };
  nailSalon: {
    title: string;
    body: string;
  };
  portfolio: {
    heading: string;
    intro: string;
    allFilter: string;
    emptyState: string;
    viewFullLabel: string;
    viewBadgeLabel: string;
    closeLightboxLabel: string;
    prevImageLabel: string;
    nextImageLabel: string;
    categories: CategoryMeta[];
  };
  contact: {
    heading: string;
    intro: string;
    formHeading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    sentTitle: string;
    sentMessage: string;
    openMailClientLabel: string;
    resetFormLabel: string;
    validation: {
      nameRequired: string;
      emailInvalid: string;
      messageRequired: string;
    };
    infoHeading: string;
    emailLabelInfo: string;
    phoneLabelInfo: string;
    addressLabelInfo: string;
    nailHeading: string;
    nailBody: string;
    mapHeading: string;
    mapTitle: string;
    faqHeading: string;
    faqs: FaqItem[];
  };
  footer: {
    copyright: string;
    instagramLabel: string;
    facebookLabel: string;
  };
}

export interface StudioContentData {
  portfolio: PortfolioItem[];
  studio: StudioInfo;
  en: LocaleContent;
  th: LocaleContent;
}

export interface BookingFormValues {
  name: string;
  email: string;
  message: string;
}

export interface BookingFormErrors {
  name?: string;
  email?: string;
  message?: string;
}
