"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeSection, setActiveSection] = useState(navItems[0]?.href ?? "#beranda");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-5 xl:px-8">
        <Link
          href="#beranda"
          onClick={() => handleNavClick("#beranda")}
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
        >
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Image
              src="/Logo IKSPI Kera Sakti 1980.png"
              alt="Logo IKSPI Kera Sakti"
              width={48}
              height={48}
              quality={100}
              priority
              className="size-9 object-contain sm:size-12"
            />
            <Image
              src="/logo ks tanggungs.png"
              alt="Logo IKSPI Kera Sakti Sub Ranting Tanggung"
              width={48}
              height={48}
              quality={100}
              priority
              className="size-9 object-contain sm:size-12"
            />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[11px] font-black uppercase text-white sm:text-sm">
              IKSPI Kera Sakti
            </p>
            <p className="truncate text-[10px] font-black uppercase text-white sm:text-xs">
              Sub Ranting Tanggung
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "group relative py-2 text-[11px] font-black uppercase tracking-wide transition-colors duration-300 hover:text-red-500 xl:text-xs",
                activeSection === item.href ? "text-red-500" : "text-white",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-0 -bottom-0.5 h-0.5 origin-center rounded-full bg-red-600 transition-transform duration-300",
                  activeSection === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                )}
              />
            </Link>
          ))}
        </nav>

        <Link
          href="#kontak"
          onClick={() => handleNavClick("#kontak")}
          className="hidden shrink-0 rounded bg-red-600 px-3 py-2.5 text-[11px] font-black uppercase text-white transition hover:bg-red-500 sm:inline-flex xl:px-4 xl:py-3 xl:text-xs"
        >
          Gabung Sekarang
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
          className="grid size-10 shrink-0 place-items-center rounded border border-white/15 text-white transition hover:border-red-500 hover:text-red-500 lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition",
                isMenuOpen && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-5 rounded bg-current transition",
                isMenuOpen && "top-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-black/90 transition-[max-height,opacity] duration-300 lg:hidden",
          isMenuOpen ? "max-h-[440px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto grid max-w-[1440px] gap-1 px-4 py-4 sm:px-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "flex items-center justify-between rounded px-3 py-3 text-sm font-black uppercase tracking-wide transition",
                activeSection === item.href
                  ? "bg-red-600 text-white"
                  : "text-white hover:bg-white/10 hover:text-red-400",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "h-0.5 w-8 rounded bg-current transition",
                  activeSection === item.href ? "opacity-100" : "opacity-0",
                )}
              />
            </Link>
          ))}
          <Link
            href="#kontak"
            onClick={() => handleNavClick("#kontak")}
            className="mt-3 rounded bg-red-600 px-4 py-3 text-center text-xs font-black uppercase text-white transition hover:bg-red-500"
          >
            Gabung Sekarang
          </Link>
        </nav>
      </div>
    </header>
  );
}
