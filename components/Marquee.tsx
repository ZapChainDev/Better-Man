export default function Marquee() {
  const unit =
    "MINDSET   ·   MONEY   ·   MASCULINITY   ·   DISCIPLINE   ·   BROTHERHOOD   ·   BETTER MAN   ·   ";
  return (
    <div className="overflow-hidden bg-gold py-[0.65rem] select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee-scroll 30s linear infinite" }}
      >
        <span className="font-display font-bold text-charcoal text-[0.65rem] tracking-[0.18em]">
          {unit}
          {unit}
        </span>
      </div>
    </div>
  );
}
