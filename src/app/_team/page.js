"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Team() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el, i) => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("in"), i * 80);
              io.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      io.observe(el);
    });
  }, []);

  const leadership = [
    {
      name: "[ Founder Name ]",
      title: "Founder & Chairman",
      bio: "A career built across flagship luxury properties, now devoted to shaping the next generation of Indian hospitality leaders.",
      exp: "30+ years in luxury hospitality",
      tag: "[ portrait — founder ]",
    },
    {
      name: "[ Director Name ]",
      title: "Director, Academics",
      bio: "Architect of the Atithis curriculum, blending international operating standards with the warmth of Atithi Devo Bhava.",
      exp: "25+ years · hotel operations",
      tag: "[ portrait — director ]",
    },
    {
      name: "[ Dean Name ]",
      title: "Dean of Hospitality",
      bio: "Former General Manager of award-winning boutique resorts, leading faculty and the live-training partnerships.",
      exp: "22+ years · resort management",
      tag: "[ portrait — dean ]",
    },
  ];

  const faculty = [
    {
      name: "[ Faculty Name ]",
      title: "Rooms Division",
      spec: "Front office, housekeeping and luxury guest experience.",
      tag: "[ faculty ]",
    },
    {
      name: "[ Faculty Name ]",
      title: "Food & Beverage",
      spec: "Fine dining service, villa dining and banquet operations.",
      tag: "[ faculty ]",
    },
    {
      name: "[ Faculty Name ]",
      title: "Revenue & Commercial",
      spec: "Revenue management, distribution and reputation.",
      tag: "[ faculty ]",
    },
    {
      name: "[ Faculty Name ]",
      title: "Soft Skills & Etiquette",
      spec: "Communication, grooming and luxury etiquette.",
      tag: "[ faculty ]",
    },
    {
      name: "[ Faculty Name ]",
      title: "Engineering & Asset Care",
      spec: "Preventive maintenance, safety and sustainability.",
      tag: "[ faculty ]",
    },
    {
      name: "[ Faculty Name ]",
      title: "Hospitality Technology",
      spec: "PMS, CRM, channel management and AI in hospitality.",
      tag: "[ faculty ]",
    },
    {
      name: "[ Faculty Name ]",
      title: "Leadership & Culture",
      spec: "Team building, performance and conflict resolution.",
      tag: "[ faculty ]",
    },
    {
      name: "[ Faculty Name ]",
      title: "Wellness & Spa",
      spec: "Spa operations and wellness guest journeys.",
      tag: "[ faculty ]",
    },
  ];

  const mentors = [
    { name: "[ Mentor Name ]", title: "Former GM · Luxury Resort Group", exp: "28 yrs" },
    { name: "[ Mentor Name ]", title: "VP Operations · Boutique Hotel Brand", exp: "24 yrs" },
    { name: "[ Mentor Name ]", title: "Executive Chef · Heritage Hotel", exp: "20 yrs" },
    { name: "[ Mentor Name ]", title: "Director of Revenue · Hospitality Group", exp: "18 yrs" },
    { name: "[ Mentor Name ]", title: "Head of Guest Experience · Wellness Retreat", exp: "16 yrs" },
  ];

  const advisory = [
    { name: "[ Advisor Name ]", title: "Hospitality Industry Veteran" },
    { name: "[ Advisor Name ]", title: "HR Director · International Hotel Chain" },
    { name: "[ Advisor Name ]", title: "Founder · Boutique Resort Brand" },
    { name: "[ Advisor Name ]", title: "Hospitality Consultant & Critic" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* PAGE HERO */}
        <section className="bg-primary text-white py-24 md:py-28 relative overflow-hidden px-5 sm:px-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#0d2340_0_16px,#102a4c_16px_32px)] opacity-50"></div>
          <div className="relative max-w-[1280px] mx-auto text-center z-10">
            <div className="flex items-center justify-center gap-3.5 mb-6">
              <span className="w-11 h-[1px] bg-accent"></span>
              <span className="text-[12px] tracking-[0.32em] text-accent-light uppercase">The People Behind Atithis</span>
              <span className="w-11 h-[1px] bg-accent"></span>
            </div>
            <h1 className="font-serif font-semibold text-[42px] sm:text-[76px] leading-[1.05] text-white">
              Mentors who have run the finest houses
            </h1>
            <p className="max-w-[640px] mx-auto mt-7 text-[18px] leading-relaxed text-white/78 font-light">
              Our faculty and mentors bring decades of leadership across luxury hotels, resorts and hospitality groups — teaching not from theory, but from a lifetime on the floor.
            </p>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-3.5 mb-11">
              <span className="w-10 h-[1px] bg-accent"></span>
              <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Leadership Team</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {leadership.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e6e9ee] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-26px_rgba(15,39,71,0.3)] transition-all duration-400 overflow-hidden reveal"
                >
                  <div className="aspect-square bg-[repeating-linear-gradient(135deg,#e7eaef_0_14px,#eff2f6_14px_28px)] flex items-end p-5">
                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#8894a5] font-semibold">{m.tag}</span>
                  </div>
                  <div className="p-[30px_28px]">
                    <h3 className="font-serif text-[26px] text-primary font-bold">{m.name}</h3>
                    <div className="text-[13px] tracking-[0.06em] text-accent mt-1.5 uppercase font-semibold">{m.title}</div>
                    <p className="mt-4 text-[14px] leading-relaxed text-text-muted font-light">{m.bio}</p>
                    <div className="flex justify-between items-center mt-5.5 pt-4.5 border-t border-[#eef1f4]">
                      <span className="text-[12px] text-[#8894a5] font-medium">{m.exp}</span>
                      <span className="text-[11px] tracking-[0.14em] text-accent uppercase font-mono font-semibold">in</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACULTY */}
        <section className="py-16 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-3.5 mb-11">
              <span className="w-10 h-[1px] bg-accent"></span>
              <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Academic Faculty</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {faculty.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e6e9ee] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-24px_rgba(15,39,71,0.28)] transition-all duration-400 overflow-hidden reveal"
                >
                  <div className="aspect-[4/5] bg-[repeating-linear-gradient(135deg,#e7eaef_0_12px,#eff2f6_12px_24px)] flex items-end p-3.5">
                    <span className="font-mono text-[9px] tracking-[0.1em] text-[#8894a5] font-semibold">{m.tag}</span>
                  </div>
                  <div className="p-[22px_20px]">
                    <h3 className="font-serif text-[21px] text-primary font-bold">{m.name}</h3>
                    <div className="text-[12px] text-accent mt-1.5 tracking-[0.04em] font-semibold">{m.title}</div>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#6A7889] font-light">{m.spec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENTORS + ADVISORY */}
        <section className="py-24 bg-[#0B1D36] text-white px-5 sm:px-10 mt-12">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3.5 mb-9">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent-light uppercase font-medium">
                  Industry Mentors & Visiting Experts
                </span>
              </div>
              <div className="flex flex-col divide-y divide-white/10">
                {mentors.map((m, idx) => (
                  <div key={idx} className="flex gap-5 items-center py-5">
                    <div className="w-14 h-14 rounded-full bg-[repeating-linear-gradient(135deg,#16304f_0_8px,#1b3a5e_8px_16px)] flex-shrink-0"></div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-[22px] text-white font-bold">{m.name}</h3>
                      <div className="text-[13px] text-white/62 mt-1">{m.title}</div>
                    </div>
                    <span className="text-[12px] text-accent-light tracking-[0.06em] font-semibold">{m.exp}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/3 border border-white/14 p-10 sm:p-12">
              <div className="flex items-center gap-3.5 mb-7">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent-light uppercase font-medium">Advisory Board</span>
              </div>
              <h3 className="font-serif text-[30px] leading-snug text-white font-bold">Guided by leaders of the industry</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/72 font-light">
                Our advisory board shapes the curriculum to meet the evolving standards of luxury and boutique hospitality worldwide.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {advisory.map((a, idx) => (
                  <div key={idx} className="flex gap-3.5 items-center pb-4 border-b border-white/10 last:border-none">
                    <span className="text-accent-light text-[14px]">◆</span>
                    <div>
                      <div className="text-[16px] text-white font-medium">{a.name}</div>
                      <div className="text-[12px] text-white/60 mt-0.5">{a.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-bg-light text-center px-5 sm:px-10">
          <div className="max-w-[720px] mx-auto">
            <h2 className="font-serif font-semibold text-[32px] sm:text-[48px] leading-tight text-primary">
              Learn from those who have set the standard
            </h2>
            <div className="flex gap-4 justify-center mt-9 flex-wrap">
              <Link
                href="/admissions"
                className="bg-primary !text-accent-light px-9 py-4 text-[14px] tracking-[0.1em] uppercase hover:bg-accent-light hover:!text-primary transition-all duration-300"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="border border-primary text-primary px-9 py-4 text-[14px] tracking-[0.1em] uppercase hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
