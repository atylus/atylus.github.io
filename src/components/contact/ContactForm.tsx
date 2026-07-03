"use client";
import { useLocale } from "@/compat/next/navigation";
import { getUiCopy } from "@/i18n/content";

export default function ContactForm() {
  const locale = useLocale();
  const ui = getUiCopy(locale);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form handling logic can be added here (e.g. API call, validation)
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <h2>{ui.contact.formTitle}</h2>
      <input
        type="text"
        id="name"
        name="name"
        placeholder={ui.contact.formName}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder={ui.contact.formEmail}
        required
      />
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder={ui.contact.formSubject}
        required
      />
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder={ui.contact.formMessage}
        required
        defaultValue=""
      />
      <button type="submit" className="ibt-btn ibt-btn-outline">
        <span>{ui.contact.formSubmit}</span>
        <i className="icon-arrow-top" aria-hidden />
      </button>
    </form>
  );
}
