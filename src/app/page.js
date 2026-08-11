"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Image from "next/image";

import heroImg from '../assets/Home/hero-img.webp';
import greetingImg from '../assets/Home/greeting-guest.webp';
import hospitalityTeamImg from '../assets/Home/hospitality-team.webp';

export default function Home() {
  const statsRef = useRef(null);
  const [stats, setStats] = useState({ rate: 0, partners: 0, days: 0, conv: 0 });
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    // Reveal animation intersection observer
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el, i) => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("in"), i * 90);
              io.disconnect();
            }
          });
        },
        { threshold: 0.12 }
      );
      io.observe(el);
    });

    // Stats counter animation observer
    if (statsRef.current) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !statsAnimated) {
              animateStats();
              io.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      io.observe(statsRef.current);
    }
  }, [statsAnimated]);

  const animateStats = () => {
    setStatsAnimated(true);
    const targets = { rate: 94, partners: 40, days: 21, conv: 85 };
    const dur = 1600;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setStats({
        rate: Math.round(targets.rate * e),
        partners: Math.round(targets.partners * e),
        days: Math.round(targets.days * e),
        conv: Math.round(targets.conv * e),
      });
      if (t < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  };

  const heroStats = [
    { big: "12 Wk", label: "Professional Certificate" },
    { big: "90 Days", label: "Guaranteed Paid Internship" },
    { big: "1:1", label: "Industry Mentorship" },
    { big: "Boutique", label: "Hospitality Focus" },
  ];

  const pillars = [
    { n: "01", name: "Character", short: "Understanding the destination, culture and identity." },
    { n: "02", name: "Care", short: "Anticipating guest needs with empathy and professionalism." },
    { n: "03", name: "Craft", short: "Delivering excellence through operational mastery." },
    { n: "04", name: "Stewardship", short: "Protecting people, property, brand and owner trust." },
    { n: "05", name: "Growth", short: "Creating value for guests, teams, owners and communities." },
  ];

  const monthCards = [
    {
      month: "Month One",
      title: "The Foundation",
      desc: "Mindset, guest psychology, sense of place and the shape of a boutique property. The student becomes a host.",
    },
    {
      month: "Month Two",
      title: "The Operator",
      desc: "Rooms, food & beverage, engineering and revenue. The student learns to run every department with mastery.",
    },
    {
      month: "Month Three",
      title: "The Steward",
      desc: "Leadership, technology, the Atithis Standards™ and a live capstone. The student becomes a leader.",
    },
  ];

  const placementStats = [
    { value: `${stats.rate}%`, label: "Placement Rate" },
    { value: `${stats.partners}+`, label: "Hiring Partners" },
    { value: `${stats.days} Days`, label: "Avg. Time to Placement" },
    { value: `${stats.conv}%`, label: "Internship Conversions" },
  ];

  const brands = [
    "Oberoi Hotels",
    "ITC Hotels",
    "Taj Hotels",
    "Marriott Intl.",
    "Hyatt Hotels",
    "The Leela",
    "Radisson Group",
    "Accor",
    "IHCL Group",
    "Boutique Hotels",
    "Wellness Retreats",
    "Heritage Hotels",
  ];

  const testimonials = [
    {
      slotId: "home-testi-1",
      quote:
        "Atithis did not teach me how to hold a tray. It taught me how to read a room, protect an asset and earn an owner’s trust. I walked into my internship as a professional.",
      name: "Ananya R.",
      role: "Front Office Executive · Class of 2025",
    },
    {
      slotId: "home-testi-2",
      quote:
        "The capstone week broke every silo in my head. Running a simulated resort as GM showed me how one decision ripples across housekeeping, F&B and revenue.",
      name: "Karan M.",
      role: "Duty Manager · Class of 2025",
    },
    {
      slotId: "home-testi-3",
      quote:
        "What stayed with me was the discipline — fitness at 6:30, grooming, reflection at night. It rebuilt how I carry myself in front of a guest.",
      name: "Meera S.",
      role: "Guest Experience Associate · Class of 2024",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-bg-light py-16 md:py-24 relative overflow-hidden px-5 sm:px-10">
          <div className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] border border-accent/18 rounded-full pointer-events-none"></div>
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-[72px] items-center relative">
            <div>
              <div className="flex items-center gap-4 mb-6 reveal">
                <span className="w-13 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">
                  Professional Certificate · Boutique Hospitality Stewardship
                </span>
              </div>
              <h1 className="font-serif font-semibold text-[40px] sm:text-[54px] lg:text-[72px] leading-[1.02] text-primary tracking-tight reveal">
                We don't train hotel employees.<br />
                <span className="italic text-accent">We develop leaders.</span>
              </h1>
              <p className="mt-7 text-[19px] leading-relaxed text-text-muted font-light max-w-[520px] reveal">
                A 12-week immersive program blending the warmth of Indian hospitality with the discipline of international luxury standards — for the future stewards of boutique hotels, resorts and wellness retreats.
              </p>
              <div className="flex flex-wrap gap-4 mt-10 reveal">
                <Link
                  href="/admissions#apply"
                  className="bg-primary !text-accent-light px-[38px] py-[17px] text-[14px] tracking-[0.1em] uppercase hover:bg-accent-light hover:!text-primary transition-all duration-300"
                >
                  Begin Your Application
                </Link>
                <Link
                  href="/program"
                  className="bg-transparent text-primary px-[38px] py-[17px] text-[14px] tracking-[0.1em] uppercase border border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Explore the Program
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 border-t border-primary/14 pt-[30px] reveal">
                {heroStats.map((s, idx) => (
                  <div key={idx} className="pr-4">
                    <div className="font-serif text-[30px] text-primary font-semibold leading-tight">{s.big}</div>
                    <div className="text-[11px] tracking-[0.05em] text-[#7A8798] mt-1.5 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal mt-12 lg:mt-0">
              <div className="aspect-[4/5] shadow-[0_40px_80px_-40px_rgba(15,39,71,0.4)] relative">
                <Image src={heroImg} fill className="object-cover" id="home-hero-main" alt="Upload hero image — luxury arrival / lobby" />
              </div>
              <div className="absolute -bottom-[46px] -left-[46px] w-[200px] h-[250px] border-[10px] border-bg-light shadow-[0_30px_60px_-30px_rgba(15,39,71,0.4)] hidden md:block">
                <Image src={greetingImg} fill className="object-cover" id="home-hero-sub" alt="Upload — guest experience" />
              </div>
              <div className="absolute top-[26px] -right-2 sm:-right-5 bg-primary text-white py-5 px-[26px] text-center shadow-[0_20px_40px_-20px_rgba(15,39,71,0.5)]">
                <div className="font-serif text-[40px] font-semibold leading-none text-accent-light">90</div>
                <div className="text-[10px] tracking-[0.18em] uppercase mt-1 text-white/85">Day Paid Internship</div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="bg-[#0B1D36] py-6 text-white px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:flex-wrap justify-between gap-6 items-center text-center md:text-left">
            <span className="text-[12px] tracking-[0.28em] text-accent-light uppercase">Atithi Devo Bhava</span>
            <span className="text-[13px] tracking-[0.1em] text-white/55">Guaranteed 90-Day Paid Internship</span>
            <span className="text-[13px] tracking-[0.1em] text-white/55">6 Days a Week · Classroom + Simulation + Live Training</span>
            <span className="text-[13px] tracking-[0.1em] text-white/55">Atithis Certified Hospitality Professional</span>
          </div>
        </div>

        {/* ABOUT TEASER */}
        <section className="py-24 md:py-32 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative mb-12 lg:mb-0">
                <div className="aspect-[5/4] shadow-[0_34px_70px_-40px_rgba(15,39,71,0.35)] relative">
                  <Image src={hospitalityTeamImg} fill className="object-cover" id="home-about" alt="Upload — campus / heritage courtyard" />
                </div>
                <div className="absolute -bottom-[34px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:-right-[34px] w-[90%] sm:w-[58%] aspect-[16/10] bg-primary text-white p-[30px] flex flex-col justify-center">
                  <span className="font-serif text-[23px] italic leading-snug text-white">"Leave every place better than you found it."</span>
                  <span className="text-[11px] tracking-[0.24em] text-accent-light mt-3.5 uppercase">— The Atithis Oath</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <span className="w-10 h-[1px] bg-accent"></span>
                  <span className="text-[12px] tracking-[0.3em] text-accent uppercase">The Institute</span>
                </div>
                <h2 className="font-serif font-semibold text-[34px] sm:text-[52px] leading-[1.08] text-primary">
                  The philosophy of a great host, taught as a profession.
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-text-muted font-light">
                  Atithis develops hospitality professionals capable of operating world-class boutique hotels, wellness resorts and holiday-home communities. Every module is built around the Five Pillars of Atithis — and here, there are no departmental silos.
                </p>
                <div className="flex gap-6 sm:gap-11 mt-10">
                  <div>
                    <div className="font-serif text-[38px] text-primary font-semibold">05</div>
                    <div className="text-[13px] text-[#7A8798] mt-1">Pillars</div>
                  </div>
                  <div>
                    <div className="font-serif text-[38px] text-primary font-semibold">12</div>
                    <div className="text-[13px] text-[#7A8798] mt-1">Weeks</div>
                  </div>
                  <div>
                    <div className="font-serif text-[38px] text-primary font-semibold">11</div>
                    <div className="text-[13px] text-[#7A8798] mt-1">Sim. Labs</div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 mt-9 text-[14px] tracking-[0.08em] uppercase text-primary border-b border-accent pb-1 hover:text-accent transition-colors duration-300"
                >
                  Read About the Institute →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FIVE PILLARS */}
        <section className="py-24 bg-primary text-white px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-14">
              <div className="flex items-center justify-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent-light uppercase">Our Foundation</span>
                <span className="w-10 h-[1px] bg-accent"></span>
              </div>
              <h2 className="font-serif font-semibold text-[34px] sm:text-[54px] leading-[1.08] text-white">The Five Pillars of Atithis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-white/16">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-[36px_24px] border-b md:border-b-0 md:border-r border-white/12 last:border-b-0 md:last:border-r-0 hover:bg-accent-light/8 transition-colors duration-300"
                >
                  <span className="font-serif text-[30px] text-accent-light/50">{p.n}</span>
                  <h3 className="font-serif text-[26px] text-white mt-2">{p.name}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/70 font-light">{p.short}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-11">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-[14px] tracking-[0.08em] uppercase text-accent-light border-b border-accent-light/40 pb-1 hover:text-white transition-colors"
              >
                Explore the Pillars →
              </Link>
            </div>
          </div>
        </section>

        {/* PROGRAM AT A GLANCE */}
        <section className="py-24 md:py-32 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end flex-wrap gap-6 mb-14">
              <div className="max-w-[600px]">
                <div className="flex items-center gap-3.5 mb-5.5">
                  <span className="w-10 h-[1px] bg-accent"></span>
                  <span className="text-[12px] tracking-[0.3em] text-accent uppercase">The Program</span>
                </div>
                <h2 className="font-serif font-semibold text-[34px] sm:text-[52px] leading-[1.08] text-primary">
                  Three months. Three transformations.
                </h2>
              </div>
              <Link
                href="/curriculum"
                className="text-[14px] tracking-[0.08em] uppercase text-primary border-b border-accent pb-1 hover:text-accent whitespace-nowrap transition-colors"
              >
                See Full Curriculum →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {monthCards.map((m, idx) => (
                <Link
                  key={idx}
                  href="/program"
                  className="block bg-white border border-[#e6e9ee] p-10 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(15,39,71,0.28)] transition-all duration-400 text-inherit"
                >
                  <span className="text-[12px] tracking-[0.24em] text-accent uppercase font-medium">{m.month}</span>
                  <h3 className="font-serif text-[32px] text-primary mt-3 leading-tight">{m.title}</h3>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-text-muted font-light">{m.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PLACEMENTS BAND */}
        <section ref={statsRef} className="py-24 md:py-32 bg-[#0B1D36] text-white px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <div className="flex items-center justify-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent-light uppercase">Placements &amp; Careers</span>
                <span className="w-10 h-[1px] bg-accent"></span>
              </div>
              <h2 className="font-serif font-semibold text-[34px] sm:text-[58px] leading-[1.06] text-white">
                Launch your career with leading hospitality brands
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/16 mb-[60px]">
              {placementStats.map((p, idx) => (
                <div
                  key={idx}
                  className="py-10 px-6 text-center border-b border-white/12 last:border-b-0 odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <div className="font-serif text-[54px] font-semibold text-accent-light leading-none">{p.value}</div>
                  <div className="text-[13px] tracking-[0.06em] text-white/70 mt-2.5">{p.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-[14px] tracking-[0.06em] text-white/55 mb-7">
              Graduates receive placement assistance and career opportunities with leading hospitality brands
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
              {brands.map((b, idx) => (
                <div
                  key={idx}
                  className="border border-white/14 aspect-[16/9] flex items-center justify-center p-3.5 hover:bg-white/5 hover:border-accent-light transition-all duration-300 text-center"
                >
                  <span className="font-serif text-[16px] text-white/82 leading-tight">{b}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-[11px] text-white/40 mt-5.5 tracking-[0.04em]">
              Brand names shown as placeholders — to be replaced with official partner assets. Not affiliated unless stated.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS
        <section className="py-24 md:py-32 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">In Their Words</span>
                <span className="w-10 h-[1px] bg-accent"></span>
              </div>
              <h2 className="font-serif font-semibold text-[32px] sm:text-[52px] leading-tight text-primary">
                Voices from our graduates
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white border border-[#e9ecf1] p-10 flex flex-col">
                  <span className="font-serif text-[54px] text-accent leading-[0.6] h-7">"</span>
                  <p className="text-[16px] leading-[1.8] text-text-muted font-light italic flex-grow">{t.quote}</p>
                  <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-[#eef1f4]">
                    <div className="w-[52px] h-[52px] rounded-full overflow-hidden flex-shrink-0">
                      <ImageSlot id={t.slotId} shape="circle" placeholder="Photo" />
                    </div>
                    <div>
                      <div className="text-[15px] color-primary font-medium">{t.name}</div>
                      <div className="text-[12px] text-[#8894a5] mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* APPLY CTA */}
        <section className="py-32 bg-primary text-white text-center relative overflow-hidden px-5 sm:px-10">
          <div className="absolute -top-[100px] -left-[100px] w-[380px] h-[380px] border border-accent-light/18 rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-[140px] -right-[80px] w-[420px] h-[420px] border border-accent-light/14 rounded-full pointer-events-none"></div>
          <div className="max-w-[760px] mx-auto relative z-10">
            <div className="flex items-center justify-center gap-3.5 mb-6">
              <span className="w-10 h-[1px] bg-accent"></span>
              <span className="text-[12px] tracking-[0.3em] text-accent-light uppercase">Admissions 2026</span>
              <span className="w-10 h-[1px] bg-accent"></span>
            </div>
            <h2 className="font-serif font-semibold text-[36px] sm:text-[62px] leading-[1.06] text-white">
              Begin your journey with Atithis
            </h2>
            <p className="mt-5.5 text-[18px] leading-relaxed text-white/78 font-light">
              A selective 12-week program for those ready to commit to the discipline of world-class hospitality.
            </p>
            <div className="flex gap-4 justify-center mt-10 flex-wrap">
              <Link
                href="/admissions#apply"
                className="bg-accent text-white px-10 py-[17px] text-[14px] tracking-[0.1em] uppercase hover:bg-accent-light transition-all duration-300"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="border border-white/40 !text-white px-10 py-[17px] text-[14px] tracking-[0.1em] uppercase hover:border-accent-light hover:!text-accent-light hover:bg-transparent transition-all duration-300"
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
