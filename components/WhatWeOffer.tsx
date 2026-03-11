"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const offers = [
  {
    number: "01",
    title: "Daily Structure",
    body: "Mental exercises and a discipline-first approach. Stop improvising your day and start owning it — hour by hour.",
  },
  {
    number: "02",
    title: "Financial Independence",
    body: "A clear blueprint for income and personal pride. Know exactly where you are going and precisely how you will get there.",
  },
  {
    number: "03",
    title: "The Brotherhood",
    body: "A vetted community of men rebuilding from the ground up. You do not have to figure any of this out alone.",
  },
];

export default function WhatWeOffer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: any;
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;
      ctx = gsap.context(() => {
        gsap.fromTo(
          "[data-wwo-header]",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
        gsap.fromTo(
          "[data-wwo-item]",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: "[data-wwo-item]",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
        gsap.fromTo(
          "[data-wwo-cta]",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "[data-wwo-cta]",
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      }, ref.current);
    }
    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-charcoal py-32 px-8 lg:px-16 xl:px-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-wwo-header className="mb-20 opacity-0">
          <p className="text-gold uppercase tracking-[0.35em] text-[0.65rem] font-semibold font-sans mb-5">
            What We Offer
          </p>
          <h2 className="font-display text-silver uppercase font-bold leading-[0.9] tracking-wide text-[clamp(2.5rem,5.5vw,5rem)]">
            Tools For The<br />Serious Few
          </h2>
        </div>

        {/* Numbered editorial list */}
        <div>
          {offers.map((offer) => (
            <div
              key={offer.number}
              data-wwo-item
              className="group grid grid-cols-[4.5rem_1fr] lg:grid-cols-[8rem_18rem_1fr] gap-x-6 lg:gap-x-16 gap-y-3 py-12 border-t border-white/[0.06] hover:border-gold/20 transition-colors duration-500 opacity-0 cursor-default"
            >
              {/* Large faded number */}
              <div className="font-display font-bold text-[3.5rem] lg:text-[4.5rem] leading-none text-gold/[0.12] group-hover:text-gold/30 transition-colors duration-500 text-right pr-4 lg:pr-6">
                {offer.number}
              </div>

              {/* Title + mobile body */}
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-silver uppercase tracking-[0.15em] text-base lg:text-lg font-bold mb-3 group-hover:text-gold transition-colors duration-500">
                  {offer.title}
                </h3>
                <div className="w-8 h-px bg-gold/30 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
                <p className="lg:hidden text-silver/40 text-sm leading-relaxed mt-4 font-sans">
                  {offer.body}
                </p>
              </div>

              {/* Desktop body */}
              <div className="hidden lg:flex items-center">
                <p className="text-silver/40 text-sm leading-relaxed font-sans max-w-md">
                  {offer.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA row */}
        <div
          data-wwo-cta
          className="mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-white/[0.06] pt-10 opacity-0"
        >
          <p className="text-silver/25 text-xs uppercase tracking-widest font-sans">
            Ready to build a better life?
          </p>
          <Link href="/contact" className="btn-gold inline-block text-xs">
            Get the Roadmap
          </Link>
        </div>
      </div>
    </section>
  );
}
