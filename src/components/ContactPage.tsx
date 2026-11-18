import { FormEvent, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import {
  BookingFormErrors,
  BookingFormValues,
  LocaleContent,
  StudioInfo,
} from '../types/studio';
import { buildMailtoUrl, validateBookingForm } from '../utils/studioLogic';
import { Reveal } from './Reveal';

interface ContactPageProps {
  content: LocaleContent['contact'];
  studio: StudioInfo;
}

export function ContactPage({ content, studio }: ContactPageProps) {
  const [formValues, setFormValues] = useState<BookingFormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [submittedMailtoUrl, setSubmittedMailtoUrl] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateBookingForm(formValues, content.validation);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const mailtoUrl = buildMailtoUrl(studio.email, formValues);
    setSubmittedMailtoUrl(mailtoUrl);

    // Trigger default mail client safely via anchor click without window.open or window.alert
    const mailLink = document.createElement('a');
    mailLink.href = mailtoUrl;
    mailLink.style.display = 'none';
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);
  };

  const handleResetForm = () => {
    setSubmittedMailtoUrl(null);
    setFormValues({ name: '', email: '', message: '' });
    setErrors({});
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const telHref = `tel:${studio.phone.replace(/\s+/g, '')}`;

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-16 space-y-16">
      <header className="space-y-4 border-b border-[#222222] pb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-[2px] text-white">
          {content.heading}
        </h1>
        <p className="text-base sm:text-lg text-[#CCCCCC] max-w-2xl leading-relaxed">
          {content.intro}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <Reveal className="lg:col-span-6">
          <section
            aria-labelledby="booking-form-heading"
            className="rounded-xl bg-[#121212] border border-[#222222] p-6 sm:p-8 space-y-6"
          >
            <h2
              id="booking-form-heading"
              className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[2px] text-white border-b border-[#222222] pb-4"
            >
              {content.formHeading}
            </h2>

            {submittedMailtoUrl ? (
              <div
                role="status"
                data-testid="booking-confirmation"
                className="rounded-xl bg-[#070707] border border-[#222222] p-6 space-y-4"
              >
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <h3 className="font-display text-base font-bold uppercase tracking-[2px]">
                    {content.sentTitle}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                  {content.sentMessage}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={submittedMailtoUrl}
                    className="cta-primary rounded-full inline-block px-6 py-3 text-xs font-semibold uppercase tracking-[1.5px]"
                  >
                    {content.openMailClientLabel}
                  </a>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[1.5px] border border-[#222222] text-white hover:border-white transition-colors cursor-pointer"
                  >
                    {content.resetFormLabel}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="booking-name"
                    className="block text-xs font-semibold uppercase tracking-[1.5px] text-[#A6A9B0]"
                  >
                    {content.nameLabel}
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={(event) => {
                      setFormValues((prev) => ({ ...prev, name: event.target.value }));
                      if (errors.name) {
                        setErrors((prev) => ({ ...prev, name: undefined }));
                      }
                    }}
                    placeholder={content.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'booking-name-error' : undefined}
                    className="w-full rounded-xl bg-[#070707] border border-[#222222] px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors"
                  />
                  {errors.name && (
                    <p
                      id="booking-name-error"
                      className="flex items-center gap-2 text-xs text-[#FF6B4A]"
                    >
                      <AlertCircle size={14} aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="booking-email"
                    className="block text-xs font-semibold uppercase tracking-[1.5px] text-[#A6A9B0]"
                  >
                    {content.emailLabel}
                  </label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={(event) => {
                      setFormValues((prev) => ({ ...prev, email: event.target.value }));
                      if (errors.email) {
                        setErrors((prev) => ({ ...prev, email: undefined }));
                      }
                    }}
                    placeholder={content.emailPlaceholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'booking-email-error' : undefined}
                    className="w-full rounded-xl bg-[#070707] border border-[#222222] px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors"
                  />
                  {errors.email && (
                    <p
                      id="booking-email-error"
                      className="flex items-center gap-2 text-xs text-[#FF6B4A]"
                    >
                      <AlertCircle size={14} aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="booking-message"
                    className="block text-xs font-semibold uppercase tracking-[1.5px] text-[#A6A9B0]"
                  >
                    {content.messageLabel}
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={5}
                    value={formValues.message}
                    onChange={(event) => {
                      setFormValues((prev) => ({ ...prev, message: event.target.value }));
                      if (errors.message) {
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }
                    }}
                    placeholder={content.messagePlaceholder}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'booking-message-error' : undefined}
                    className="w-full rounded-xl bg-[#070707] border border-[#222222] px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors resize-y"
                  />
                  {errors.message && (
                    <p
                      id="booking-message-error"
                      className="flex items-center gap-2 text-xs text-[#FF6B4A]"
                    >
                      <AlertCircle size={14} aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="cta-primary rounded-full w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[2px] cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
                >
                  {content.submitLabel}
                </button>
              </form>
            )}
          </section>
        </Reveal>

        <Reveal delayMs={80} className="lg:col-span-6 space-y-6">
          <section
            aria-labelledby="studio-info-heading"
            className="rounded-xl bg-[#121212] border border-[#222222] p-6 sm:p-8 space-y-6"
          >
            <h2
              id="studio-info-heading"
              className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[2px] text-white border-b border-[#222222] pb-4"
            >
              {content.infoHeading}
            </h2>

            <dl className="space-y-4 text-sm sm:text-base">
              <div className="space-y-1">
                <dt className="text-xs uppercase tracking-[1.5px] text-[#A6A9B0]">
                  {content.emailLabelInfo}
                </dt>
                <dd>
                  <a
                    href={`mailto:${studio.email}`}
                    className="inline-flex items-center text-white hover:text-[#CCCCCC] transition-colors underline-offset-4 hover:underline"
                  >
                    <span>📧 {studio.email}</span>
                  </a>
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs uppercase tracking-[1.5px] text-[#A6A9B0]">
                  {content.phoneLabelInfo}
                </dt>
                <dd>
                  <a
                    href={telHref}
                    className="inline-flex items-center text-white hover:text-[#CCCCCC] transition-colors underline-offset-4 hover:underline tabular-nums"
                  >
                    <span>📞 {studio.phone}</span>
                  </a>
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs uppercase tracking-[1.5px] text-[#A6A9B0]">
                  {content.addressLabelInfo}
                </dt>
                <dd className="text-[#CCCCCC]">
                  <span>📍 {studio.address}</span>
                </dd>
              </div>
            </dl>

            <div className="border-t border-[#222222] pt-6 space-y-2">
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-[2px] text-[#A6A9B0]">
                {content.nailHeading}
              </h3>
              <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                {content.nailBody}
              </p>
            </div>
          </section>

          <section aria-labelledby="where-i-work-heading" className="space-y-4">
            <h2
              id="where-i-work-heading"
              className="font-display text-lg sm:text-xl font-bold uppercase tracking-[2px] text-[#A6A9B0]"
            >
              {content.mapHeading}
            </h2>
            <div className="aspect-video w-full rounded-xl border border-[#222222] bg-[#121212] overflow-hidden">
              <iframe
                title={content.mapTitle}
                src={studio.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </section>
        </Reveal>
      </div>

      <Reveal>
        <section aria-labelledby="faq-heading" className="space-y-6 pt-4">
          <div className="border-b border-[#222222] pb-4">
            <h2
              id="faq-heading"
              className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[2px] text-[#A6A9B0]"
            >
              {content.faqHeading}
            </h2>
          </div>

          <div className="space-y-3">
            {content.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              const panelId = `faq-panel-${index}`;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl overflow-hidden border border-[#222222]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full bg-[#121212] hover:bg-[#161616] px-6 py-5 flex items-center justify-between gap-6 text-left transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px]"
                  >
                    <span className="text-sm sm:text-base font-medium text-white">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      data-testid={`faq-icon-${index}`}
                      className={`text-2xl font-light leading-none shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-45 text-white' : 'rotate-0 text-[#FF4500]'
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={panelId}
                      className="bg-[#0d0d0d] border-t border-[#222222] px-6 py-5 text-sm sm:text-base text-[#CCCCCC] leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
