const services = [
  {
    number: "01",
    title: "The Newsletter",
    subtitle: "Weekly Insights",
    description:
      "Every week, straight from my desk to your inbox. Tactics, mindset shifts, and business frameworks you can implement immediately.",
    cta: "Subscribe Free",
    href: "#newsletter",
  },
  {
    number: "02",
    title: "Empire Coaching",
    subtitle: "1:1 & Group Programs",
    description:
      "Hands-on coaching for serious entrepreneurs ready to compress decades of growth into months. Limited spots available.",
    cta: "Apply Now",
    href: "#newsletter",
  },
  {
    number: "03",
    title: "The Empire Podcast",
    subtitle: "Raw Conversations",
    description:
      "No-filter conversations with the world's top entrepreneurs, athletes, and leaders. New episodes every week.",
    cta: "Listen Now",
    href: "#newsletter",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-[#111112] relative overflow-hidden"
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="section-label mb-4">What I Offer</p>
          <h2 className="display-heading text-4xl sm:text-5xl mb-6 mx-auto">
            Tools For The{" "}
            <span className="text-gradient-gold">Serious Few</span>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.number}
              className="relative bg-charcoal border border-white/5 p-10 group hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Big number watermark */}
              <span className="absolute top-4 right-6 font-display text-7xl font-bold text-white/[0.03] select-none group-hover:text-gold/10 transition-colors duration-300">
                {s.number}
              </span>

              <p className="section-label text-xs mb-2">{s.subtitle}</p>
              <h3 className="display-heading text-2xl sm:text-3xl mb-4">
                {s.title}
              </h3>
              <div className="w-8 h-px bg-gold/50 mb-5" />
              <p className="text-slate text-sm leading-relaxed mb-8">
                {s.description}
              </p>
              <a
                href={s.href}
                className="inline-block border border-gold/50 text-gold text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 hover:bg-gold hover:text-charcoal hover:border-gold"
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
