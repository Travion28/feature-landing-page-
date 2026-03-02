"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080810]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 3C10.343 3 9 4.343 9 6V13C9 14.657 10.343 16 12 16C13.657 16 15 14.657 15 13V6C15 4.343 13.657 3 12 3ZM7 13C7 15.761 9.239 18 12 18C14.761 18 17 15.761 17 13V11H19V13C19 16.866 15.866 20 12 20C8.134 20 5 16.866 5 13V11H7V13ZM11 21H13V23H11V21Z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              Chorus
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#waitlist"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white text-sm font-medium hover:from-purple-500 hover:to-violet-400 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-3">
            {["Features", "How It Works", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-sm text-gray-400 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#waitlist"
              className="block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white text-sm font-medium mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
