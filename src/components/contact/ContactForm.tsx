"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setIsSubmitting(true);
    setResultMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Mesaj gonderilemedi.");
      }

      setIsSuccess(true);
      setResultMessage(data.message ?? "Mesajiniz basariyla gonderildi.");
      form.reset();
    } catch (error) {
      setIsSuccess(false);
      setResultMessage(
        error instanceof Error
          ? error.message
          : "Mesaj gonderilirken beklenmeyen bir hata olustu.",
      );
    } finally {
      setIsSubmitting(false);
    }
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
        <span>{isSubmitting ? "Gonderiliyor..." : "Mesaj Gonder"}</span>
        <i className="icon-arrow-top" aria-hidden />
      </button>
      {resultMessage ? (
        <p
          style={{
            marginTop: 16,
            color: isSuccess ? "#2bb673" : "#ff5c5c",
          }}
        >
          {resultMessage}
        </p>
      ) : null}
    </form>
  );
}
