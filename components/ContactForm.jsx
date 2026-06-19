"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Contact Form*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <h3 className="text-lg font-bold text-emerald-800">Message Sent!</h3>
        <p className="mt-2 text-sm text-emerald-600">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone *
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-1.5">
          Subject *
        </label>
        <input
          id="contact-subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message *
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-sky-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-sky-dark hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}
