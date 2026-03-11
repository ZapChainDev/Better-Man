import Link from "next/link";

export default function PodcastBanner() {
  return (
    <section className="bg-[#0f0f10] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Outer container: thin gold lines top & bottom, dark fill */}
        <div
          className="relative flex items-center gap-8 sm:gap-12 px-8 sm:px-14 py-8 sm:py-10"
          style={{
            background: "#1a1712",
            borderTop: "1.5px solid #B89B5E",
            borderBottom: "1.5px solid #B89B5E",
          }}
        >
          {/* ── LEFT: BK monogram ── */}
          <div className="shrink-0 hidden sm:block">
            {/* SVG-drawn BK monogram in gold */}
            <svg
              width="110"
              height="120"
              viewBox="0 0 110 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_16px_rgba(184,155,94,0.25)]"
            >
              {/* Outer circle ring */}
              <circle
                cx="55"
                cy="60"
                r="52"
                stroke="#B89B5E"
                strokeWidth="1.2"
              />
              {/* B stem */}
              <rect x="20" y="28" width="5" height="64" fill="#B89B5E" />
              {/* B top bump */}
              <path
                d="M25 28 Q52 28 52 44.5 Q52 61 25 61"
                stroke="#B89B5E"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* B bottom bump */}
              <path
                d="M25 61 Q56 61 56 77.5 Q56 94 25 94"
                stroke="#B89B5E"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* K stem */}
              <rect x="62" y="28" width="5" height="64" fill="#B89B5E" />
              {/* K upper diagonal */}
              <line
                x1="67"
                y1="61"
                x2="92"
                y2="28"
                stroke="#B89B5E"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              {/* K lower diagonal */}
              <line
                x1="67"
                y1="61"
                x2="92"
                y2="94"
                stroke="#B89B5E"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="flex flex-col gap-2.5">
            {/* Eyebrow */}
            <p className="text-gold tracking-[0.28em] uppercase text-xs sm:text-sm font-semibold">
              Bedros Keuilian
            </p>

            {/* Headline */}
            <h2 className="font-display text-white font-bold uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-wide">
              Immigrant → American{" "}
              <span role="img" aria-label="US Flag">
                🇺🇸
              </span>
            </h2>

            {/* Sub-description */}
            <p className="text-silver/70 text-sm sm:text-base leading-relaxed max-w-xl">
              Brutally Honest Conversations, Rants and Insights With Bedros
            </p>

            {/* CTA */}
            <div className="mt-2">
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-gold/70 bg-gold/10 text-gold text-sm font-semibold px-7 py-3 tracking-wide transition-all duration-200 hover:bg-gold hover:text-charcoal"
              >
                → Listen to BK Podcast
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
