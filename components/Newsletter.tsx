"use client";

import { useState } from "react";

export default function Newsletter() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
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
    <section
      id="newsletter"
      className="bg-[#1a1a18] relative"
      style={{
        borderTop: "1.5px solid #B89B5E",
        borderBottom: "1.5px solid #B89B5E",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-14 py-14 grid md:grid-cols-2 gap-10 items-center">
        {/* ── LEFT: BK Monogram ── */}
        <div className="hidden md:flex items-center justify-center">
          <svg
            width="220"
            height="240"
            viewBox="0 0 220 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_30px_rgba(184,155,94,0.2)]"
          >
            {/* Outer ring */}
            <circle
              cx="110"
              cy="120"
              r="104"
              stroke="#B89B5E"
              strokeWidth="1.5"
            />
            {/* B stem */}
            <rect x="38" y="54" width="10" height="132" fill="#B89B5E" />
            {/* B top bump */}
            <path
              d="M48 54 Q105 54 105 88 Q105 122 48 122"
              stroke="#B89B5E"
              strokeWidth="9"
              fill="none"
              strokeLinecap="round"
            />
            {/* B bottom bump */}
            <path
              d="M48 122 Q114 122 114 156 Q114 190 48 190"
              stroke="#B89B5E"
              strokeWidth="9"
              fill="none"
              strokeLinecap="round"
            />
            {/* K stem */}
            <rect x="124" y="54" width="10" height="132" fill="#B89B5E" />
            {/* K top arm */}
            <line
              x1="134"
              y1="122"
              x2="184"
              y2="54"
              stroke="#B89B5E"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* K bottom arm */}
            <line
              x1="134"
              y1="122"
              x2="184"
              y2="190"
              stroke="#B89B5E"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ── RIGHT: Form ── */}
        <div>
          {/* Headline */}
          <h2 className="font-display text-white font-bold uppercase leading-tight text-3xl sm:text-4xl lg:text-5xl mb-1">
            Domination Download
          </h2>
          {/* Gold sub-heading */}
          <p className="text-gold tracking-[0.18em] uppercase text-xs sm:text-sm font-semibold mb-2">
            Straight From The Desk Of Bedros Keuilian
          </p>
          {/* Description */}
          <p className="text-silver/60 text-sm mb-6">
            Your weekly no B.S. newsletter to help you dominate in business and
            in life
          </p>

          {submitted ? (
            <div className="border border-gold/30 py-8 px-6 text-center">
              <p className="font-display text-silver text-xl uppercase tracking-wide">
                You&apos;re In!
              </p>
              <p className="text-slate text-sm mt-2">
                Check your inbox — the first issue is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  required
                  className="bg-white text-[#222] placeholder-[#999] italic px-4 py-3 text-sm w-full outline-none focus:ring-2 focus:ring-gold/50"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-white text-[#222] placeholder-[#999] px-4 py-3 text-sm w-full outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              {/* Row 2 */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
                className="bg-white text-[#222] placeholder-[#999] italic px-4 py-3 text-sm w-full outline-none focus:ring-2 focus:ring-gold/50"
              />
              {/* Row 3 */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-charcoal font-display font-bold tracking-[0.3em] uppercase text-sm py-4 transition-all duration-200 hover:brightness-110 disabled:opacity-70 flex items-center justify-center gap-3"
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
                  "Send"
                )}
              </button>
              <p className="text-silver/35 text-xs text-center leading-relaxed">
                (I Hate Spammers As Much As You Do So Don&apos;t Worry, I
                Won&apos;t Blow Your Inbox Up With Nonsense.)
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
