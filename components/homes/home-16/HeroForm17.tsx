"use client";

import Image from "next/image";

export default function HeroForm17() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Generate logic can be added here (e.g. API call, validation)
  };

  return (
    <form onSubmit={handleSubmit} className="hero-form17">
      <div className="input-box">
        <input type="text" placeholder="" required />
        <label>Describe what you want to see</label>
      </div>
      <button type="submit" className="form-btn17">
        <Image
          alt="Generate"
          src="/assets/images/icon/stick.svg"
          width={16}
          height={16}
        />
        <span>Generate</span>
      </button>
    </form>
  );
}
