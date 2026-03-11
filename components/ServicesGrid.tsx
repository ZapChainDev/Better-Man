import Link from "next/link";

// Utility: render a title string with specific letter spans highlighted in gold
// Pass spans as [startIndex, endIndex] pairs (inclusive, 0-based, ignoring spaces)
function GoldTitle({
  parts,
}: {
  parts: Array<{ text: string; gold?: boolean }>;
}) {
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

// ─── CARD THUMBNAIL PLACEHOLDER ───────────────────────────────────────────────
// Replace `bg` and `label` with <Image> tags once you have real assets
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
      {/* White-bordered image/thumbnail */}
      <div className="border-2 border-white/90 relative overflow-hidden aspect-[4/3] cursor-pointer">
        {/* Placeholder gradient background */}
        <div className={`absolute inset-0 ${bg}`} />

        {/* Overlay text branding */}
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

        {/* Bottom-right click cursor icon */}
        <div className="absolute bottom-3 right-3 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
          <svg
            className="w-7 h-7 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.5 3a1.5 1.5 0 00-1.5 1.5V9H8.5A1.5 1.5 0 007 10.5v.914c0 .379.138.745.388 1.027l5.5 6.25c.268.305.656.309.656.309H18a1.5 1.5 0 001.5-1.5V10.5A1.5 1.5 0 0018 9h-3V4.5A1.5 1.5 0 0013.5 3z" />
          </svg>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}

// ─── SERVICE DATA ──────────────────────────────────────────────────────────────
const services = [
  {
    titleParts: [
      { text: "THE BEDROS K" },
      { text: "EU", gold: true },
      { text: "ILIAN SHOW" },
    ],
    thumbLabel: "THE BK",
    thumbSublabel: "Podcast",
    bg: "bg-gradient-to-br from-[#1a1a1b] via-[#2a2008] to-[#1a1a1b]",
    description: (
      <>
        Brutally Honest Conversations, Rants and Insights With{" "}
        <span className="text-gold">Bedros</span>
      </>
    ),
    href: "#",
  },
  {
    titleParts: [
      { text: "DOMIN" },
      { text: "A", gold: true },
      { text: "TION YEAR" },
    ],
    thumbLabel: "DOMINATION",
    thumbSublabel: "Year",
    bg: "bg-gradient-to-br from-[#1a1a1b] via-[#2b1f06] to-[#1a1a1b]",
    description: <>A 12 Month One On One Coaching Program With Bedros</>,
    href: "#",
  },
  {
    titleParts: [
      { text: "SCALE S" },
      { text: "YN", gold: true },
      { text: "DICATE" },
    ],
    thumbLabel: "SCALE SYNDICATE",
    thumbSublabel: "Mastermind",
    bg: "bg-gradient-to-br from-[#1a1a1b] via-[#0d1a0d] to-[#1a1a1b]",
    description: <>Scale a Real Damn Business—Not a Time Sucking Prison</>,
    href: "#",
  },
  {
    titleParts: [
      { text: "\u00BD DAY C" },
      { text: "O", gold: true },
      { text: "ACHING" },
    ],
    thumbLabel: "Half Day",
    thumbSublabel: "Coaching",
    bg: "bg-gradient-to-br from-[#1a1a1b] via-[#231a08] to-[#1a1a1b]",
    description: <>A One On One Half Day Coaching Session With Bedros</>,
    href: "#",
  },
  {
    titleParts: [
      { text: "DOMIN" },
      { text: "A", gold: true },
      { text: "TION YEAR" },
    ],
    thumbLabel: "HEALERS &",
    thumbSublabel: "Health Care Pros",
    bg: "bg-gradient-to-br from-[#1a1a1b] via-[#132030] to-[#1a1a1b]",
    description: <>A 12 Month One On One Coaching Program With Bedros</>,
    href: "#",
  },
  {
    titleParts: [
      { text: "SQU" },
      { text: "I", gold: true },
      { text: "RE PROGRAM" },
    ],
    thumbLabel: "SQUIRE",
    thumbSublabel: "Program",
    bg: "bg-gradient-to-br from-[#1a1a1b] via-[#1a1205] to-[#1a1a1b]",
    description: (
      <>A Rite Of Passage Experience For Teenage Boys And Their Dads</>
    ),
    href: "#",
  },
];

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function ServicesGrid() {
  return (
    <section id="services" className="bg-[#0f0f10] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-5"
            >
              {/* Title */}
              <h2 className="font-display text-silver tracking-[0.22em] uppercase text-sm sm:text-base font-normal leading-snug">
                <GoldTitle parts={s.titleParts} />
              </h2>

              {/* Thumbnail */}
              <div className="w-full">
                <CardThumb
                  bg={s.bg}
                  label={s.thumbLabel}
                  sublabel={s.thumbSublabel}
                  href={s.href}
                />
              </div>

              {/* Description */}
              <p className="text-silver/80 text-sm leading-relaxed max-w-[280px]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
