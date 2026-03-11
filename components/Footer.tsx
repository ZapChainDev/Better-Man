import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-gold/30 flex items-center justify-center">
            <span className="font-display text-gold text-xs font-bold tracking-wider">
              BM
            </span>
          </div>
          <span className="font-display text-silver text-sm font-bold uppercase tracking-wider">
            Better Man
          </span>
        </div>
        <p className="text-slate text-xs tracking-wide text-center">
          Better isn&apos;t a destination; it&apos;s a standard.&nbsp;
          <span className="text-gold/40 mx-1">|</span>&nbsp; &copy;2026 Better
          Man. All rights reserved.
        </p>
        <nav className="flex gap-5">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-slate text-xs uppercase tracking-widest hover:text-gold transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
