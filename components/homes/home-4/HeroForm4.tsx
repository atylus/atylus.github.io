"use client";

export default function HeroForm4() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Sign up logic can be added here (e.g. API call, validation)
  };

  return (
    <form onSubmit={handleSubmit} className="hero-form">
      <div className="input-box">
        <input type="text" placeholder="" required />
        <label>Enter your email</label>
      </div>
      <button type="submit" className="ibt-btn ibt-btn-dark">
        <span>Sign up</span>
        <i className="icon-arrow-top" aria-hidden />
      </button>
    </form>
  );
}
