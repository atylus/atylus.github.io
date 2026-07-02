"use client";

export default function FooterSubscribeForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Subscribe logic can be added here (e.g. API call, validation)
  };

  return (
    <form onSubmit={handleSubmit} className="footer-form5">
      <input type="text" placeholder="Email" required />
      <button type="submit" className="ibt-btn ibt-btn-outline">
        <span>Subscribe</span>
        <i className="icon-arrow-top" aria-hidden />
      </button>
    </form>
  );
}
