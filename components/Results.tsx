const testimonials = [
  {
    quote:
      "Bedros gave me the mindset shift and business blueprint that took my gym from barely surviving to $80k months. He doesn't sugarcoat anything — that's exactly what I needed.",
    name: "Marcus T.",
    title: "Fitness Studio Owner",
    initials: "MT",
  },
  {
    quote:
      "The newsletter alone is worth more than any MBA program I've seen. Real tactics, real stories, zero fluff. I read it every single week without fail.",
    name: "Sarah K.",
    title: "E-commerce Founder",
    initials: "SK",
  },
  {
    quote:
      "When I joined his coaching program, I was stuck at $200k. Within 8 months I broke $1M. The frameworks are that powerful when you actually execute them.",
    name: "Derek R.",
    title: "Agency CEO",
    initials: "DR",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="py-28 bg-charcoal relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label mb-4">Real Results</p>
          <h2 className="display-heading text-4xl sm:text-5xl mb-6 max-w-xl">
            The Proof Is In The{" "}
            <span className="text-gradient-gold">Results</span>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark relative">
              {/* Quote mark */}
              <span className="absolute -top-3 left-8 font-display text-6xl text-gold/30 select-none leading-none">
                &ldquo;
              </span>

              <p className="text-silver/80 text-sm leading-relaxed mb-8 pt-4">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="font-display text-gold text-sm font-bold">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-silver text-sm font-semibold">{t.name}</p>
                  <p className="text-slate text-xs tracking-wide">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
