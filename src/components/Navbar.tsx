"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-900/95 backdrop-blur-md border-b border-stone-800 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors duration-200">
              <span className="text-white font-black text-sm">H</span>
            </div>
            <span className="text-stone-50 font-black text-lg tracking-tight">
              Hassan<span className="text-orange-500">Hauled</span>It
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  pathname === href
                    ? "text-orange-500"
                    : "text-stone-400 hover:text-stone-50"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold uppercase tracking-wide px-5 py-2.5 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-stone-400 hover:text-stone-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="border-t border-stone-800 pt-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-2 py-3 text-base font-semibold transition-colors duration-200 ${
                  pathname === href
                    ? "text-orange-500"
                    : "text-stone-400 hover:text-stone-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block text-center bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold uppercase tracking-wide px-5 py-3 rounded-sm transition-all duration-200"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
