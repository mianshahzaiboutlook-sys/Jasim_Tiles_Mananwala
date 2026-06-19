"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

export default function InquiryForm({ productName = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: productName
      ? `I am interested in ${productName}. Please share pricing and availability.`
      : "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Product Inquiry*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-emerald-800">Inquiry Sent!</h3>
        <p className="mt-2 text-sm text-emerald-600">
          Your inquiry has been forwarded via WhatsApp. We&apos;ll respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="inquiry-name" className="block text-sm font-medium text-slate-700 mb-1.5">
          Full Name *
        </label>
        <input
          id="inquiry-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="inquiry-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
          Phone Number *
        </label>
        <input
          id="inquiry-phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20"
          placeholder="03XX XXXXXXX"
        />
      </div>
      <div>
        <label htmlFor="inquiry-email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email
        </label>
        <input
          id="inquiry-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="inquiry-message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message *
        </label>
        <textarea
          id="inquiry-message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20 resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
      >
        Send Inquiry via WhatsApp
      </button>
    </form>
  );
}
