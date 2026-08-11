"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoImg from "@/assets/logo.png";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Program", href: "/program" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg-light/88 backdrop-blur-[14px] border-b border-primary/9">
      <nav className="max-w-[1280px] mx-auto px-5 sm:px-10 h-[88px] flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image src={logoImg} alt="ATITHIS logo" className="h-28 w-auto object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-9">
          <div className="flex gap-7 items-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] tracking-[0.04em] transition-all pb-[2px] ${isActive
                    ? "text-primary font-medium border-b border-accent"
                    : "text-text-muted hover:text-accent border-b border-transparent"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <Link
            href="/admissions#apply"
            className="bg-primary !text-accent-light px-[26px] py-[13px] text-[13px] tracking-[0.12em] uppercase border border-primary hover:bg-accent-light hover:!text-primary hover:border-accent-light transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary focus:outline-none p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[88px] z-40 bg-bg-light transition-all duration-300 lg:hidden border-t border-primary/9 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col p-6 gap-6 h-[calc(100vh-88px)] bg-bg-light overflow-y-auto">
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[18px] tracking-[0.06em] py-2 border-b border-primary/5 transition-all ${isActive ? "text-accent font-medium pl-2" : "text-text-muted"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <Link
            href="/admissions#apply"
            onClick={() => setIsOpen(false)}
            className="bg-primary !text-accent-light text-center py-4 text-[14px] tracking-[0.12em] uppercase border border-primary hover:bg-accent-light hover:!text-primary transition-all duration-300 mt-4"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}

