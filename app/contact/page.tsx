"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blockers = ["Mindset", "Money", "Masculinity"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", blocker: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      <section className="min-h-screen bg-charcoal flex items-center px-6 pt-16">
        <div className="max-w-2xl mx-auto w-full py-24">
          {/* Header */}
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold font-sans mb-6">
            Contact
          </p>
          <h1 className="font-display font-black text-steel uppercase leading-[0.95] tracking-tight text-[clamp(2.5rem,6vw,4.5rem)] mb-6">
            Ready to Level Up?
          </h1>
          <div className="w-12 h-[2px] bg-gold mb-8" />
          <p className="text-silver/70 text-base leading-relaxed font-sans mb-14">
            We only work with men who are ready to take full responsibility. If
            you&apos;re looking for a shortcut, keep looking. If you&apos;re
            ready for the work, reach out.
          </p>

          {/* Form */}
          {submitted ? (
            <div className="border border-gold/30 bg-white/5 p-12 text-center">
              <div className="w-12 h-[2px] bg-gold mx-auto mb-8" />
              <h2 className="font-display font-black text-steel uppercase tracking-wide text-2xl mb-4">
                Message Received.
              </h2>
              <p className="text-silver/60 font-sans text-sm leading-relaxed">
                We&apos;ll be in touch. In the meantime — stay disciplined.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-silver/60 text-xs uppercase tracking-widest font-sans">
                  Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-[#111112] border border-white/10 text-steel placeholder-slate/40 px-5 py-4 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-silver/60 text-xs uppercase tracking-widest font-sans">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-[#111112] border border-white/10 text-steel placeholder-slate/40 px-5 py-4 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors duration-200"
                />
              </div>

              {/* Biggest Blocker */}
              <div className="flex flex-col gap-2">
                <label className="text-silver/60 text-xs uppercase tracking-widest font-sans">
                  What is your biggest blocker?{" "}
                  <span className="text-gold">*</span>
                </label>
                <select
                  name="blocker"
                  required
                  value={form.blocker}
                  onChange={handleChange}
                  className="bg-[#111112] border border-white/10 text-steel px-5 py-4 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-slate">
                    Select one
                  </option>
                  {blockers.map((b) => (
                    <option
                      key={b}
                      value={b}
                      className="text-steel bg-[#111112]"
                    >
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-gold mt-4 w-full text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Get the Roadmap"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
