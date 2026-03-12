"use client";

import { useEffect, useState } from "react";

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("welcome_seen");
    if (!seen) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("welcome_seen", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="welcome-headline"
    >
      <div className="relative w-full max-w-lg bg-charcoal-light border border-gold/30 rounded-sm shadow-2xl px-8 py-10 flex flex-col gap-6 animate-fade-in-up">
        {/* Gold top bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-gradient rounded-t-sm" />

        <h2
          id="welcome-headline"
          className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-steel leading-tight"
        >
          Welcome to <span className="text-gold">The Standard.</span>
        </h2>

        <p className="text-silver text-sm sm:text-base leading-relaxed">
          Most of the world wants you to stay comfortable, quiet, and average.
          This isn&apos;t just another &ldquo;self-help&rdquo; site filled with
          empty motivation. We are here for the men who are done with excuses
          and ready to build a life defined by discipline, iron-clad strength,
          and earned respect.
        </p>

        <p className="text-silver text-sm sm:text-base leading-relaxed">
          You&apos;re here because you know you&apos;re capable of more. We
          provide the roadmap; you provide the work. Glad to have you in the
          ranks.
        </p>

        <button
          onClick={dismiss}
          className="mt-2 w-full bg-gold-gradient text-charcoal font-display font-bold uppercase tracking-widest text-sm py-4 rounded-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Let&apos;s Get to Work.
        </button>
      </div>
    </div>
  );
}
