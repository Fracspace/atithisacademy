"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-[30px] font-bold text-primary tracking-[0.14em]">ATITHIS</span>
          <span className="text-[9px] tracking-[0.42em] text-accent mt-[5px] uppercase">Institute of Hospitality</span>
        </Link>
        <div className="hidden lg:flex items-center gap-9">
          <div className="flex gap-7 items-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] tracking-[0.04em] transition-all pb-[2px] ${
                    isActive
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
      </nav>
    </header>
  );
}
