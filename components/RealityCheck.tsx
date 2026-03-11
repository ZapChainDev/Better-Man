"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function RealityCheck() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: any;
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          "[data-rc]",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }, ref.current ?? undefined);
    }
    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#0d0d0e] py-32 px-8 lg:px-16 xl:px-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background ghost number */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden leading-none">
        <span className="font-display font-bold text-[30vw] text-white/[0.025]">
          80
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-28 items-center">
          {/* Left — outlined stat number */}
          <div data-rc className="opacity-0">
            <div
              className="font-display font-bold leading-none select-none text-[clamp(5rem,13vw,11rem)]"
              style={{
                WebkitTextStroke: "1.5px rgba(184,155,94,0.55)",
                color: "transparent",
              }}
            >
              80%
            </div>
            <p className="text-silver/40 text-xs uppercase tracking-widest mt-4 font-sans leading-relaxed">
              of men know what
              <br />
              they should do.
            </p>
            <p
              className="text-xs uppercase tracking-widest mt-1 font-sans font-semibold"
              style={{ color: "rgba(184,155,94,0.65)" }}
            >
              None of them do it.
            </p>
          </div>

          {/* Right — copy */}
          <div>
            <p
              data-rc
              className="text-gold uppercase tracking-[0.35em] text-[0.65rem] font-semibold font-sans mb-8 opacity-0"
            >
              The Reality Check
            </p>
            <h2
              data-rc
              className="font-display text-silver uppercase font-bold leading-[0.9] tracking-wide text-[clamp(2rem,4.5vw,4rem)] mb-8 opacity-0"
            >
              You don&apos;t have a potential problem.
              <br />
              You have a{" "}
              <span className="text-gradient-gold">plan problem.</span>
            </h2>
            <div data-rc className="w-12 h-px bg-gold mb-8 opacity-0" />
            <p
              data-rc
              className="text-silver/55 text-base leading-relaxed max-w-lg mb-12 font-sans opacity-0"
            >
              Most men are ambitious but drifting. They fight low confidence,
              poor habits, and a lack of real direction. If you&apos;re waiting
              for a permission slip to start leading your life — it&apos;s never
              coming.
            </p>
            <div data-rc className="opacity-0">
              <Link
                href="/contact"
                className="btn-outline inline-block text-xs"
              >
                Get the Roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
    </section>
  );
}
