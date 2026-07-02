"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form handling logic can be added here (e.g. API call, validation)
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <h2>Iletisime Gecin</h2>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Ad soyad"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="E-posta"
        required
      />
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Konu"
        required
      />
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Mesajinizi yazin..."
        required
        defaultValue=""
      />
      <button type="submit" className="ibt-btn ibt-btn-outline">
        <span>Mesaj Gonder</span>
        <i className="icon-arrow-top" aria-hidden />
      </button>
    </form>
  );
}
