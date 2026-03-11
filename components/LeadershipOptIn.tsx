"use client";

import { useState } from "react";

export default function LeadershipOptIn() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="tracking-[0.25em] uppercase text-sm font-semibold mb-4">
          <span className="text-gold">Unlock My</span>{" "}
          <span className="text-white font-bold">Free Leadership Course</span>
        </p>

        {/* Headline */}
        <h2 className="font-display text-white font-bold uppercase leading-[1.05] tracking-wide text-4xl sm:text-5xl lg:text-6xl mb-10">
          Discover The 6 Pillars Of
          <br />
          Exceptional Leadership
        </h2>

        {/* Form */}
        {submitted ? (
          <div className="bg-white/5 border border-gold/30 py-12 px-8">
            <svg
              className="w-10 h-10 text-gold mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <h3 className="font-display text-silver text-2xl uppercase tracking-wide mb-2">
              You&apos;re In!
            </h3>
            <p className="text-slate text-sm">
              Check your inbox — your free leadership course is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="bg-white text-[#222] placeholder-[#999] italic px-5 py-4 text-sm w-full outline-none focus:ring-2 focus:ring-gold/50"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="bg-white text-[#222] placeholder-[#999] italic px-5 py-4 text-sm w-full outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-charcoal font-display font-bold tracking-[0.3em] uppercase text-sm py-4 transition-all duration-200 hover:brightness-110 hover:scale-[1.005] active:scale-[0.995] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>

            {/* Disclaimer */}
            <p className="text-gold/60 text-xs italic text-center leading-relaxed pt-1">
              (I Hate Spammers As Much As You Do So Don&apos;t Worry, I
              Won&apos;t Blow Your Inbox Up With Nonsense.)
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
