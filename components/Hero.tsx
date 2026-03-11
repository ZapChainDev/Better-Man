"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const stats = [
  { value: "10K+", label: "Men Coached" },
  { value: "7-Fig", label: "Businesses Built" },
  { value: "15+", label: "In the Game" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    async function init() {
      const { gsap } = await import("gsap");
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.15 });
        tl
          .fromTo("[data-h-acc]", { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power3.out", transformOrigin: "left" })
          .fromTo("[data-h-eye]", { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
          .fromTo("[data-h-t1]", { opacity: 0, y: 70, skewY: 4 }, { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: "power3.out" }, "-=0.1")
          .fromTo("[data-h-t2]", { opacity: 0, y: 70, skewY: 4 }, { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: "power3.out" }, "-=0.65")
          .fromTo("[data-h-body]", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.12 }, "-=0.3")
          .fromTo("[data-h-cta]", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }, "-=0.2")
          .fromTo("[data-h-stat]", { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: 0.1 }, "-=0.1")
          .fromTo("[data-h-img]", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1.3, ease: "power3.out" }, 0);
      }, ref.current ?? undefined);
    }
    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden bg-[#0c0c0d]">
      {/* Desktop: full-bleed image panel on right with diagonal clip-path */}
      <div
        data-h-img
        className="absolute inset-y-0 right-0 w-[55%] hidden lg:block opacity-0"
        style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Landingpageimg.png"
          alt="Better Man"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0d] via-[#0c0c0d]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0d]/30 via-transparent to-[#0c0c0d]/40 pointer-events-none" />
      </div>

      {/* Copy — fills full height on desktop */}
      <div className="relative z-10 lg:min-h-screen flex flex-col justify-center px-8 lg:pl-16 xl:pl-24 pt-24 pb-16 lg:max-w-[50%]">
        {/* Vertical side label (xl screens only) */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 pointer-events-none select-none">
          <div className="h-16 w-px bg-gradient-to-b from-transparent to-gold/25" />
          <span
            className="text-[0.5rem] text-gold/25 tracking-[0.4em] uppercase font-sans"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Better Man — Est. 2026
          </span>
          <div className="h-16 w-px bg-gradient-to-t from-transparent to-gold/25" />
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <div
            data-h-acc
            className="h-px w-10 bg-gold"
            style={{ transform: "scaleX(0)", transformOrigin: "left" }}
          />
          <p data-h-eye className="text-gold uppercase tracking-[0.3em] text-[0.65rem] font-semibold font-sans opacity-0">
            Coaching · Mindset · Brotherhood
          </p>
        </div>

        {/* Headline — two lines, second in gold gradient */}
        <div className="overflow-hidden mb-1">
          <h1
            data-h-t1
            className="font-display text-silver uppercase font-bold leading-[0.88] tracking-tight text-[clamp(3.5rem,7.5vw,8.5rem)] opacity-0"
          >
            Take Back
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <h1
            data-h-t2
            className="font-display text-gradient-gold uppercase font-bold leading-[0.88] tracking-tight text-[clamp(3.5rem,7.5vw,8.5rem)] opacity-0"
          >
            Control.
          </h1>
        </div>

        <p data-h-body className="text-silver/35 text-[0.7rem] uppercase tracking-[0.28em] mb-5 font-sans opacity-0">
          Mindset — Money — Masculinity
        </p>
        <p data-h-body className="text-silver/55 text-sm leading-relaxed max-w-xs mb-10 font-sans opacity-0">
          Tough-love coaching and a proven system for men who are done
          drifting and ready to lead.
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <div data-h-cta className="opacity-0">
            <Link href="/contact" className="btn-gold inline-block text-xs">Get the Roadmap</Link>
          </div>
          <div data-h-cta className="opacity-0">
            <Link href="/about" className="btn-outline inline-block text-xs">Our Story</Link>
          </div>
        </div>

        <div className="flex gap-8 pt-6 border-t border-white/[0.06]">
          {stats.map((s) => (
            <div key={s.label} data-h-stat className="opacity-0">
              <div className="font-display font-bold text-gold text-xl leading-none mb-1">{s.value}</div>
              <div className="text-silver/30 text-[0.58rem] uppercase tracking-widest font-sans">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: image below copy */}
      <div className="lg:hidden mt-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Landingpageimg.png"
          alt="Better Man"
          className="w-full h-72 object-cover object-top"
        />
      </div>
    </div>
  );
}
