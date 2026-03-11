import Link from "next/link";

type TitlePart = { text: string; gold?: boolean };

function GoldTitle({ parts }: { parts: TitlePart[] }) {
  return (
    <>
      {parts.map((part, i) =>
        part.gold ? (
          <span key={i} className="text-gold">
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}

function CardThumb({
  bg,
  label,
  sublabel,
  href,
}: {
  bg: string;
  label: string;
  sublabel?: string;
  href: string;
}) {
  return (
    <Link href={href} className="block group">
      <div className="border-2 border-white/90 relative overflow-hidden aspect-[4/3] cursor-pointer">
        <div className={`absolute inset-0 ${bg}`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="font-display text-white font-bold text-3xl sm:text-4xl uppercase leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {label}
          </p>
          {sublabel && (
            <p className="font-display text-gold font-bold text-2xl sm:text-3xl uppercase leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] italic mt-1">
              {sublabel}
            </p>
          )}
        </div>
        {/* Click cursor */}
        <div className="absolute bottom-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
          <svg
            className="w-7 h-7 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.3 3a1 1 0 00-.7 1.7l5 5H4a1 1 0 000 2h6.6l-5 5A1 1 0 007 18.4l6.3-6.3V20a1 1 0 002 0V4a1 1 0 00-1-1H6.3z" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}

const brands = [
  {
    titleParts: [
      { text: "F" },
      { text: "I", gold: true },
      { text: "T BODY BOOTCAMP" },
    ],
    thumbLabel: "FITBODY",
    thumbSublabel: "Bootcamp",
    bg: "bg-gradient-to-br from-[#0d1520] via-[#1a2a3a] to-[#0d1520]",
    description: (
      <>
        America&apos;s Favorite 30 M<span className="text-gold">i</span>nute Fat
        Loss Workout
      </>
    ),
    href: "#",
  },
  {
    titleParts: [{ text: "TRU" }, { text: "L", gold: true }, { text: "EAN" }],
    thumbLabel: "TRULEAN",
    thumbSublabel: "Wellness",
    bg: "bg-gradient-to-br from-[#0e2020] via-[#1a3a2a] to-[#0e2020]",
    description: (
      <>
        Quality Supplements With Zero Compromise on{" "}
        <span className="text-gold">I</span>ngredients
      </>
    ),
    href: "#",
  },
  {
    titleParts: [{ text: "MAN " }, { text: "U", gold: true }, { text: "P" }],
    thumbLabel: "MAN UP",
    bg: "bg-gradient-to-br from-[#1a1a1b] via-[#2a2010] to-[#1a1a1b]",
    description: <>A Book On Leadership and Personal Growth</>,
    href: "#",
  },
  {
    titleParts: [
      { text: "FEW W" },
      { text: "I", gold: true },
      { text: "LL HUNT" },
    ],
    thumbLabel: "AVERAGE IS THE",
    thumbSublabel: "Enemy",
    bg: "bg-gradient-to-br from-[#111] via-[#1e1e1e] to-[#111]",
    description: (
      <>
        H<span className="text-gold">i</span>gh Quality Apparel That&apos;s
        Restoring the D<span className="text-gold">i</span>gn
        <span className="text-gold">i</span>ty{" "}
        <span className="text-gold">I</span>n Hard Work
      </>
    ),
    href: "#",
  },
  {
    titleParts: [{ text: "SPEAK" }, { text: "I", gold: true }, { text: "NG" }],
    thumbLabel: "Live",
    thumbSublabel: "Speaking",
    bg: "bg-gradient-to-br from-[#1a1a1b] via-[#2a1f08] to-[#1a1a1b]",
    description: <>Hire Bedros To Speak At Your Next Event</>,
    href: "#",
  },
  {
    titleParts: [
      { text: "26.2 CHA" },
      { text: "L", gold: true },
      { text: "LENGE" },
    ],
    thumbLabel: "26.2",
    thumbSublabel: "Challenge",
    bg: "bg-gradient-to-br from-[#1a0a0a] via-[#2a1010] to-[#1a0a0a]",
    description: (
      <>
        A Free S<span className="text-gold">i</span>x Week Challenge for Anyone
        Who Wants a Breakthrough!
      </>
    ),
    href: "#",
  },
];

export default function BrandsGrid() {
  return (
    <section className="bg-[#0f0f10] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {brands.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-5"
            >
              {/* Title */}
              <h2 className="font-display text-silver tracking-[0.22em] uppercase text-sm sm:text-base font-normal leading-snug">
                <GoldTitle parts={b.titleParts} />
              </h2>

              {/* Thumbnail */}
              <div className="w-full">
                <CardThumb
                  bg={b.bg}
                  label={b.thumbLabel}
                  sublabel={b.thumbSublabel}
                  href={b.href}
                />
              </div>

              {/* Description */}
              <p className="text-silver/80 text-sm leading-relaxed max-w-[280px]">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
