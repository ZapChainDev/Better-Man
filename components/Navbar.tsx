"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-charcoal/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-gold/40 flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
            <span className="font-display text-gold text-xs font-bold tracking-wider group-hover:text-charcoal transition-colors duration-300">
              BM
            </span>
          </div>
          <span className="font-display text-silver text-lg tracking-wider uppercase hidden sm:block">
            Better Man
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn-gold text-xs px-6 py-3 inline-block"
          >
            Get the Roadmap
          </Link>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={
              "block w-6 h-0.5 bg-silver transition-all duration-300 " +
              (menuOpen ? "rotate-45 translate-y-2" : "")
            }
          />
          <span
            className={
              "block w-6 h-0.5 bg-silver transition-all duration-300 " +
              (menuOpen ? "opacity-0" : "")
            }
          />
          <span
            className={
              "block w-6 h-0.5 bg-silver transition-all duration-300 " +
              (menuOpen ? "-rotate-45 -translate-y-2" : "")
            }
          />
        </button>
      </nav>
      <div
        className={
          "md:hidden overflow-hidden transition-all duration-300 " +
          (menuOpen ? "max-h-72 border-t border-white/5" : "max-h-0")
        }
      >
        <ul className="flex flex-col bg-charcoal px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="nav-link block py-2 border-b border-white/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-gold text-xs px-6 py-3 inline-block mt-2"
            >
              Get the Roadmap
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
