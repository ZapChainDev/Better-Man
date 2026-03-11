import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Better Man",
  description:
    "I didn't read about this in a book. I lived it. The story behind Better Man.",
};

const sections = [
  {
    label: "The Story",
    body: "I've lost a business and had to rebuild from nothing. I've gone through divorce, betrayal, and losing full-time access to my kids. I've struggled with anger, mental health, and being completely unfocused.",
  },
  {
    label: "The Shift",
    body: "I took full responsibility to fix it. I lived it, rebuilt it, and now I teach it. No shortcuts. No excuses. Just the hard work of becoming who you're supposed to be.",
  },
  {
    label: "The Mission",
    body: "Better Man exists to provide the roadmap I wish I had when I was broke and drifting. We don't do soft advice. We do results.",
  },
  {
    label: "The Promise",
    body: "We help modern men become respected, powerful, and in total control of their lives.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] bg-charcoal flex items-end px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold font-sans mb-6">
            About
          </p>
          <h1 className="font-display font-bold text-silver uppercase leading-[0.95] tracking-wide text-[clamp(2.5rem,6vw,5rem)]">
            I didn&apos;t read about this in a book. I lived it.
          </h1>
          <div className="w-16 h-[2px] bg-gold mt-8" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#111112] py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          {sections.map((s) => (
            <div key={s.label}>
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold font-sans mb-4">
                {s.label}
              </p>
              <p className="text-silver/75 leading-relaxed font-sans text-base">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-20 pt-16 border-t border-white/5 text-center">
          <p className="text-slate text-sm font-sans mb-6 tracking-wide">
            Ready to stop drifting and start building?
          </p>
          <Link href="/contact" className="btn-gold inline-block text-sm">
            Get the Roadmap
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
