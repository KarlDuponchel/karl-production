"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { href: "/galerie", label: "Galerie", isExternal: false },
  { href: "https://karlduponchel.fr", label: "Portfolio", isExternal: true },
  { href: "/contact", label: "Contact", isExternal: false },
];

function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = NAV_LINKS.findIndex(({ href }) => pathname === href);

  const movePill = useCallback((index: number) => {
    const link = linkRefs.current[index];
    const nav = navRef.current;
    if (!link || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setPill({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  }, []);

  const resetPill = useCallback(() => {
    if (activeIndex >= 0) {
      movePill(activeIndex);
    } else {
      setPill((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeIndex, movePill]);

  useEffect(() => {
    resetPill();
  }, [resetPill]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`flex text-lime-50 items-center justify-center w-full px-4 fixed z-50 transition-all duration-300 ${scrolled ? "py-2 md:py-3" : "py-4 md:py-6"}`}>
      {/* Desktop nav */}
      <nav
        ref={navRef}
        className={`relative hidden md:flex gap-2 items-center rounded-full px-4 bg-mossy-olive-950/55 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] transition-all duration-300 ${scrolled ? "w-[60%] py-1.5" : "w-2/3 py-2"}`}
        onMouseLeave={resetPill}
      >
        <Link href="/" className={`font-heading mr-auto pl-2 transition-all duration-300 ${scrolled ? "text-base" : "text-lg"}`}>
          kduponchel
        </Link>

        <div
          className="absolute top-1/2 -translate-y-1/2 h-[calc(100%-16px)] rounded-full bg-foreground/10 transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: pill.left,
            width: pill.width,
            opacity: pill.opacity,
          }}
        />

        {NAV_LINKS.map(({ href, label, isExternal }, i) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              ref={(el) => { linkRefs.current[i] = el; }}
              target={isExternal ? "_blank" : ""}
              onMouseEnter={() => movePill(i)}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-lime-50"
                  : "text-lime-50/70 hover:text-lime-50"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile nav bar */}
      <nav className="flex md:hidden items-center justify-between w-full rounded-full py-2 px-4 bg-mossy-olive-950/55 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]">
        <Link href="/" className="font-heading text-lg pl-2">
          kduponchel
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
          aria-label="Ouvrir le menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile slide panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-mossy-olive-950 shadow-[-4px_0_24px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <span className="font-heading text-lg">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Fermer le menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-4 gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-foreground/10 text-lime-50"
                    : "text-lime-50/70 hover:bg-foreground/5 hover:text-lime-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
