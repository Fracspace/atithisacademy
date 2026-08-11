"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Image from "next/image";

import aboutImg from '../../assets/about/aboutImg.png';

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      n: "01",
      name: "Character",
      long: "Understanding the destination, culture and identity — so every property reflects the place it belongs to.",
    },
    {
      n: "02",
      name: "Care",
      long: "Anticipating guest needs with empathy and professionalism, long before they are ever spoken.",
    },
    {
      n: "03",
      name: "Craft",
      long: "Delivering excellence through operational mastery, where every detail is deliberate.",
    },
    {
      n: "04",
      name: "Stewardship",
      long: "Protecting people, property, brand and owner trust as if they were your own.",
    },
    {
      n: "05",
      name: "Growth",
      long: "Creating lasting value for guests, teams, owners and the communities we serve.",
    },
  ];

  const different = [
    {
      n: "01",
      title: "The Whole House",
      desc: "No departmental silos. Students learn how front office, housekeeping, F&B, engineering and revenue work as one living property.",
    },
    {
      n: "02",
      title: "Sense of Place",
      desc: "Every property should reflect its destination rather than becoming generic. We teach hospitality rooted in culture and story.",
    },
    {
      n: "03",
      title: "Stewardship First",
      desc: "Hospitality is about protecting assets as much as serving guests — people, property, brand and owner trust.",
    },
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
              <span className="text-[12px] tracking-[0.32em] text-accent-light uppercase">About the Institute</span>
              <span className="w-11 h-[1px] bg-accent"></span>
            </div>
            <h1 className="font-serif font-semibold text-[42px] sm:text-[76px] leading-[1.05] text-white">
              Hospitality, taught as a profession
            </h1>
            <p className="max-w-[640px] mx-auto mt-7 text-[18px] leading-relaxed text-white/78 font-light">
              We develop professionals capable of operating world-class boutique hotels, wellness resorts and holiday-home communities — the Atithis Way.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="py-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative mb-12 lg:mb-0">
                <div className="aspect-[4/5] shadow-[0_34px_70px_-40px_rgba(15,39,71,0.35)]">
                  <Image id="about-main" src={aboutImg} className="fill" alt="Upload — campus / heritage architecture" />
                </div>
                <div className="absolute -bottom-9 left-4 sm:left-auto sm:-left-9 w-[calc(100%-32px)] sm:w-[56%] aspect-square bg-accent text-white p-[30px] flex flex-col justify-center">
                  <span className="font-serif text-[22px] italic leading-snug">Atithi Devo Bhava — the guest is divine.</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <span className="w-10 h-[1px] bg-accent"></span>
                  <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Our Philosophy</span>
                </div>
                <h2 className="font-serif font-semibold text-[32px] sm:text-[50px] leading-[1.08] text-primary">
                  Atithis does not train hotel employees.
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-text-muted font-light">
                  We develop hospitality professionals capable of operating world-class boutique hotels, wellness resorts and holiday-home communities with the warmth of Indian hospitality and the discipline of international luxury standards.
                </p>
                <p className="mt-4.5 text-[17px] leading-relaxed text-text-muted font-light">
                  Every module is built around the Five Pillars of Atithis. There are no departmental silos here — students learn how an entire property breathes as one, because a true steward understands the whole house.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY DIFFERENT */}
        <section className="pb-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {different.map((d, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e6e9ee] p-10 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(15,39,71,0.28)] transition-all duration-400"
                >
                  <span className="font-serif text-[34px] text-accent leading-none">{d.n}</span>
                  <h3 className="font-serif text-[26px] text-primary mt-2.5 leading-snug">{d.title}</h3>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-text-muted font-light">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FIVE PILLARS INTERACTIVE */}
        <section className="py-24 bg-primary text-white px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-[660px] mx-auto mb-14">
              <div className="flex items-center justify-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent-light uppercase">Our Foundation</span>
                <span className="w-10 h-[1px] bg-accent"></span>
              </div>
              <h2 className="font-serif font-semibold text-[36px] sm:text-[56px] leading-[1.08] text-white">The Five Pillars of Atithis</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start">
              <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 lg:gap-0.5 pb-4 lg:pb-0 scrollbar-none">
                {pillars.map((p, i) => {
                  const isActive = i === activePillar;
                  return (
                    <button
                      key={p.n}
                      onClick={() => setActivePillar(i)}
                      className={`flex items-center gap-[18px] p-[16px_20px] lg:p-[22px_24px] border-l-2 transition-all duration-300 font-sans text-left cursor-pointer flex-shrink-0 ${isActive
                        ? "bg-accent-light/12 border-accent-light text-white"
                        : "bg-transparent border-white/14 text-white/70 hover:text-white"
                        }`}
                    >
                      <span
                        className={`font-serif text-[20px] lg:text-[22px] min-w-[36px] lg:min-w-[44px] text-left transition-colors duration-300 ${isActive ? "text-accent-light" : "text-white/40"
                          }`}
                      >
                        {p.n}
                      </span>
                      <span className="text-[15px] lg:text-[17px] tracking-[0.06em] font-medium">{p.name}</span>
                    </button>
                  );
                })}
              </div>
              <div className="border border-white/14 p-8 sm:p-14 min-h-[300px] lg:min-h-[340px] flex flex-col justify-center bg-white/2">
                <span className="font-serif text-[60px] lg:text-[80px] text-accent-light/28 leading-none">{pillars[activePillar].n}</span>
                <h3 className="font-serif text-[36px] lg:text-[44px] text-white -mt-2 lg:-mt-3.5 leading-snug">{pillars[activePillar].name}</h3>
                <p className="mt-4 lg:mt-5 text-[17px] lg:text-[19px] leading-relaxed text-white/82 font-light max-w-[520px]">
                  {pillars[activePillar].long}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE OATH */}
        <section className="py-32 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[960px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3.5 mb-[30px]">
              <span className="w-10 h-[1px] bg-accent"></span>
              <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">The Atithis Oath</span>
              <span className="w-10 h-[1px] bg-accent"></span>
            </div>
            <p className="font-serif text-[24px] sm:text-[38px] italic leading-[1.5] text-primary text-pretty">
              "I will welcome every guest with dignity, serve every destination with respect, protect every property as if it were my own, honour the trust of every owner, support my colleagues with integrity, and leave every place better than I found it. Through Character, Care, Craft, Stewardship and Growth, I will uphold the Atithis Way wherever I serve."
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0B1D36] text-white text-center px-5 sm:px-10">
          <div className="max-w-[720px] mx-auto">
            <h2 className="font-serif font-semibold text-[32px] sm:text-[48px] leading-tight text-white">
              Ready to learn the Atithis Way?
            </h2>
            <div className="flex gap-4 justify-center mt-9 flex-wrap">
              <Link
                href="/program"
                className="bg-accent text-white px-9 py-4 text-[14px] tracking-[0.1em] uppercase hover:bg-accent-light transition-all duration-300"
              >
                Explore the Program
              </Link>
              <Link
                href="/admissions#apply"
                className="border border-white/40 !text-white px-9 py-4 text-[14px] tracking-[0.1em] uppercase hover:border-accent-light hover:!text-accent-light hover:bg-transparent transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
