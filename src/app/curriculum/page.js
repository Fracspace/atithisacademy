"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Curriculum() {
  // State for active phase in the 90-day timeline
  const [activePhase, setActivePhase] = useState(1);
  
  // State for interactive "Practice vs Study" demo
  const [activePracticeTask, setActivePracticeTask] = useState(0);

  const phases = [
    {
      num: 1,
      name: "PHASE 01 — FOUNDATION",
      days: "Days 1–15",
      description: "Building the core professional mindset, self-discipline, and luxury hospitality principles.",
      highlights: ["Luxury hospitality mindset", "Grooming & professional posture", "Communication basics", "Emotional intelligence"]
    },
    {
      num: 2,
      name: "PHASE 02 — FRONT OFFICE",
      days: "Days 16–30",
      description: "Mastery of check-in, check-out, and greeting rituals. Learn the operational flow of welcoming guests.",
      highlights: ["Reception rituals", "Guest handling & profiling", "Property management systems", "Arrival experiences"]
    },
    {
      num: 3,
      name: "PHASE 03 — GUEST EXPERIENCE",
      days: "Days 31–41",
      description: "Understanding guest psychology, handling VIP requests, recovery techniques, and local storytelling.",
      highlights: ["Guest complaint recovery", "Destination storytelling", "VIP guest protocols", "Active listening & empathy"]
    },
    {
      num: 4,
      name: "PHASE 04 — HOUSEKEEPING",
      days: "Days 42–56",
      description: "The backbone of hospitality. Practical room setups, cleanliness standards, and guest comfort setup.",
      highlights: ["Bed making & linen care", "Turndown service standard", "Chemical safety", "Sanitisation protocols"]
    },
    {
      num: 5,
      name: "PHASE 05 — ROOMS DIVISION",
      days: "Days 57–63",
      description: "Managing entire inventories, room inspections, key handling, and coordination across rooms operations.",
      highlights: ["Room inspections checklist", "Key card & security systems", "Inventory control", "Departmental coordination"]
    },
    {
      num: 6,
      name: "PHASE 06 — VILLA & RESORT OPERATIONS",
      days: "Days 64–70",
      description: "Managing private luxury holiday home rentals, resort properties, and curated villa experiences.",
      highlights: ["Private butler services", "Villa guest hosting", "Concierge services", "Resort property operations"]
    },
    {
      num: 7,
      name: "PHASE 07 — SPA & WELLNESS",
      days: "Days 71–75",
      description: "An introduction to spa operations, wellness reception, product knowledge, and client comfort management.",
      highlights: ["Spa reception etiquette", "Wellness schedules", "Product presentation", "Aroma & atmosphere setup"]
    },
    {
      num: 8,
      name: "PHASE 08 — FITNESS CENTRE OPERATIONS",
      days: "Days 76–78",
      description: "Daily checks, safety guidelines, and assisting guests in gym and active recreation environments.",
      highlights: ["Safety protocols", "Equipment maintenance checks", "Recreational hospitality", "Guest support rules"]
    },
    {
      num: 9,
      name: "PHASE 09 — LAUNDRY OPERATIONS",
      days: "Days 79–81",
      description: "Linen management, stain removal, fabric types, industrial laundry machinery, and guest laundry collection.",
      highlights: ["Fabric care & stain treatment", "Commercial wash cycles", "Uniform management", "Ironing & finishing"]
    },
    {
      num: 10,
      name: "PHASE 10 — ENGINEERING & MAINTENANCE",
      days: "Days 82–85",
      description: "Managing the physical assets. Basic troubleshooting, electrical, plumbing, pool care, and green practices.",
      highlights: ["Preventive maintenance", "Pool safety & filtration", "Energy saving checklist", "Basic troubleshooting"]
    },
    {
      num: 11,
      name: "PHASE 11 — ATITHIS OPERATOR BOOTCAMP",
      days: "Days 86–90",
      description: "The ultimate program wrap-up. Real-time simulated running of a complete boutique hotel operations model.",
      highlights: ["Full operational simulations", "Duty Manager responsibilities", "Cross-departmental leadership", "Final practical assessment"]
    }
  ];

  const capabilities = [
    { title: "Guest Experience", desc: "Understanding expectations and personalising guest touchpoints." },
    { title: "Front Office Operations", desc: "Front desk procedures, check-in flows, and billing." },
    { title: "Reservation & PMS", desc: "Operating property management software, dynamic bookings, and channel management." },
    { title: "Housekeeping", desc: "Bed making, turndown services, and hygiene standards." },
    { title: "Rooms Division", desc: "Room coordination, inspections, and room status management." },
    { title: "Villa & Resort Operations", desc: "Premium butler service and luxury private property care." },
    { title: "Spa & Wellness", desc: "Etiquette, reception, and wellness coordination." },
    { title: "Fitness Centre Operations", desc: "Safety regulations, customer assistance, and gym upkeep." },
    { title: "Laundry & Linen Management", desc: "Fabric care, commercial operations, and guest laundry processing." },
    { title: "Engineering & Maintenance", desc: "Preventive maintenance, green hospitality, and facility checks." },
    { title: "Restaurant & Guest Experience", desc: "F&B service, table etiquette, and billing interactions." },
    { title: "Communication", desc: "Verbal grooming, telephone handling, and professional correspondence." },
    { title: "Grooming & Professional Etiquette", desc: "Dress standards, posture, speech tone, and visual poise." },
    { title: "Hospitality Technology", desc: "POS terminals, CRMs, booking engines, and digital guest systems." },
    { title: "Basic Hospitality Finance", desc: "Understanding room revenue metrics (ADR, RevPAR) and billing sheets." },
    { title: "Sales & Guest Relations", desc: "Upselling techniques, review responses, and managing relationships." },
    { title: "Emergency & Safety Procedures", desc: "First aid basics, fire safety protocols, and emergency evacuation drills." }
  ];

  const environments = [
    { name: "Reception Training Lab", desc: "Complete desk set up for practical check-in/out and PMS training." },
    { name: "Classroom / Theory Lab", desc: "Smart interactive space for lectures, discussions, and concepts." },
    { name: "Housekeeping Lab", desc: "Dedicated station for cleaning methods, products, and tool management." },
    { name: "Mock Hotel Room", desc: "Fully furnished hotel suite to practice setups, turn-down, and inspections." },
    { name: "Villa Suite / Holiday Home Lab", desc: "Simulates luxury villa management and exclusive butler hosting." },
    { name: "Spa & Wellness Lab", desc: "Simulated spa lobby and treatment setup to master customer entry." },
    { name: "Fitness Centre", desc: "Equipped active zone for gym operations and guest fitness assistance." },
    { name: "Laundry Lab", desc: "Commercial laundry unit to practice linen processes and ironing." },
    { name: "Engineering & Maintenance Lab", desc: "Troubleshooting workshop covering electricals, plumbing, and safety." },
    { name: "Restaurant / Guest Experience Lab", desc: "F&B styling, service, table setups, and order management." }
  ];

  const practiceTasks = [
    {
      action: "CHECK-IN A GUEST",
      wrong: "Not just learn the procedure.",
      right: "You will stand at the reception, welcome a real person acting as a guest, log them into the system, handle room assignment disputes, and complete the registration sequence professionally.",
      icon: "🛎️"
    },
    {
      action: "MAKE A ROOM",
      wrong: "Not just study housekeeping.",
      right: "You will practice making hospital corners, arranging guest amenities, and inspecting the environment under strict time and quality constraints to simulate real hotel shifts.",
      icon: "🛌"
    },
    {
      action: "HANDLE A COMPLAINT",
      wrong: "Not just read about guest relations.",
      right: "You will experience simulated pressure scenarios with angry guests, applying recovery frameworks, finding solutions, and rebuilding guest trust on the spot.",
      icon: "🗣️"
    },
    {
      action: "INSPECT A PROPERTY",
      wrong: "Not just study operations.",
      right: "You will perform actual 50-point audits of hospitality spaces, identifying defects, checking aesthetic cues, and ensuring absolute readiness.",
      icon: "🔍"
    },
    {
      action: "RUN A SIMULATION",
      wrong: "Not just answer an exam.",
      right: "You will lead teams during simulated crisis days—system outages, power failures, or high-occupancy surges—handling operations as a Duty Manager.",
      icon: "⚡"
    }
  ];

  const admissionsSteps = [
    { num: "01", title: "Submit Application", desc: "Fill out the online application form with basic educational details." },
    { num: "02", title: "Counselling / Interaction", desc: "A personal conversation with our guides to understand your goals and compatibility." },
    { num: "03", title: "Selection", desc: "Receive confirmation of admission based on interview performance and passion." },
    { num: "04", title: "Fee & Documentation", desc: "Submit required academic documents and complete fee formalities." },
    { num: "05", title: "Orientation", desc: "Introduction to academy rules, team members, uniforms, and standard practices." },
    { num: "06", title: "Begin Your Atithis Journey", desc: "Step onto campus as a professional trainee ready to grow." }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-bg-light text-text-dark selection:bg-primary selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden px-5 sm:px-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#0d2340_0_16px,#102a4c_16px_32px)] opacity-40"></div>
          <div className="relative max-w-[1280px] mx-auto text-center z-10">
            <div className="flex items-center justify-center gap-3.5 mb-6">
              <span className="w-11 h-[1px] bg-accent"></span>
              <span className="text-[12px] tracking-[0.32em] text-accent-light uppercase font-semibold">Interactive Prospectus</span>
              <span className="w-11 h-[1px] bg-accent"></span>
            </div>
            <h1 className="font-serif font-bold text-[44px] sm:text-[78px] leading-[1.05] text-white">
              The 90-Day Blueprint
            </h1>
            <p className="max-w-[700px] mx-auto mt-7 text-[19px] leading-relaxed text-white/80 font-light">
              From day one, you are treated like a professional. Explore the structured practical path that turns students into premium hospitality operators.
            </p>
          </div>
        </section>

        {/* 03 — ATITHIS AT A GLANCE */}
        <section className="py-20 md:py-28 bg-white border-b border-[#e6e9ee] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-[14px] tracking-[0.2em] font-semibold uppercase">ATITHIS AT A GLANCE</span>
              <h2 className="font-serif font-bold text-[36px] sm:text-[48px] text-primary mt-2">Where standard meets reality</h2>
              <p className="text-text-muted mt-3 text-[17px] max-w-[600px] mx-auto">This is where the parent and student immediately understand the core proposition.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
              <div className="p-8 border border-[#e6e9ee] hover:border-accent transition-all duration-300 bg-bg-light text-center rounded-sm">
                <span className="block text-[28px] lg:text-[36px] font-serif font-bold text-accent leading-none">90 DAYS</span>
                <span className="block text-[15px] tracking-[0.1em] text-primary uppercase font-bold mt-4">Immersive Programme</span>
              </div>
              <div className="p-8 border border-[#e6e9ee] hover:border-accent transition-all duration-300 bg-bg-light text-center rounded-sm">
                <span className="block text-[28px] lg:text-[36px] font-serif font-bold text-accent leading-none">2 BATCHES</span>
                <span className="block text-[14px] text-text-muted mt-2">9 AM–1 PM / 2 PM–6 PM</span>
              </div>
              <div className="p-8 border border-[#e6e9ee] hover:border-accent transition-all duration-300 bg-bg-light text-center rounded-sm">
                <span className="block text-[28px] lg:text-[36px] font-serif font-bold text-accent leading-none">50 STUDENTS</span>
                <span className="block text-[15px] tracking-[0.1em] text-primary uppercase font-bold mt-4">Per Batch Capacity</span>
              </div>
              <div className="p-8 border border-[#e6e9ee] hover:border-accent transition-all duration-300 bg-bg-light text-center rounded-sm">
                <span className="block text-[44px] lg:text-[56px] font-serif font-bold text-accent leading-none">80%</span>
                <span className="block text-[15px] tracking-[0.1em] text-primary uppercase font-bold mt-4">Practical Learning</span>
              </div>
              <div className="p-8 border border-[#e6e9ee] hover:border-accent transition-all duration-300 bg-bg-light text-center rounded-sm">
                <span className="block text-[44px] lg:text-[56px] font-serif font-bold text-accent leading-none">20%</span>
                <span className="block text-[15px] tracking-[0.1em] text-primary uppercase font-bold mt-4">Theory & Context</span>
              </div>
              <div className="p-8 border border-[#e6e9ee] hover:border-accent transition-all duration-300 bg-bg-light text-center rounded-sm">
                <span className="block text-[44px] lg:text-[56px] font-serif font-bold text-accent leading-none">11</span>
                <span className="block text-[15px] tracking-[0.1em] text-primary uppercase font-bold mt-4">Learning Environments</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-12 pt-8 border-t border-[#f0f2f5]">
              <span className="px-5 py-2.5 bg-primary/5 text-primary text-[13px] tracking-[0.2em] font-bold uppercase rounded-full">REAL SIMULATIONS</span>
              <span className="px-5 py-2.5 bg-primary/5 text-primary text-[13px] tracking-[0.2em] font-bold uppercase rounded-full">INDUSTRY EXPOSURE</span>
              <span className="px-5 py-2.5 bg-primary/5 text-primary text-[13px] tracking-[0.2em] font-bold uppercase rounded-full">PLACEMENT SUPPORT</span>
            </div>
          </div>
        </section>


        {/* 05 — THE ATITHIS METHOD */}
        <section className="py-20 md:py-28 bg-white border-b border-[#e6e9ee] px-5 sm:px-10">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-[14px] tracking-[0.2em] font-semibold uppercase">THE ATITHIS METHOD</span>
              <h2 className="font-serif font-bold text-[36px] sm:text-[48px] text-primary mt-2">A strong visual learning flow</h2>
              <p className="text-text-muted mt-3 text-[17px] max-w-[600px] mx-auto">The sequence of mastering any professional skill at Atithis.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-accent/20 -translate-y-1/2 hidden lg:block z-0"></div>
              {[
                { step: "EXPLAIN", label: "Understand the concept.", desc: "Clear breakdown of rules, psychology and frameworks." },
                { step: "DEMONSTRATE", label: "Watch an expert do it.", desc: "Visual demonstration by experienced professionals." },
                { step: "PRACTISE", label: "Practise it yourself.", desc: "Multiple trial runs to build mechanical memory." },
                { step: "SIMULATE", label: "Experience a real-world scenario.", desc: "Immersive roleplays with random challenges." },
                { step: "ASSESS", label: "Get evaluated & improve.", desc: "Rigorous performance feedback for correction." }
              ].map((m, idx) => (
                <div key={idx} className="relative z-10 bg-white border border-[#e6e9ee] p-6 text-center rounded-sm shadow-sm">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-serif text-[18px] font-bold mx-auto mb-4 border-2 border-accent">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-[16px] tracking-[0.15em] font-bold text-accent uppercase mb-2">{m.step}</h3>
                  <h4 className="text-[14px] font-bold text-primary mb-2 leading-tight">{m.label}</h4>
                  <p className="text-[12px] text-text-muted leading-relaxed font-light">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-bg-light border-l-4 border-accent text-center max-w-[700px] mx-auto">
              <p className="text-primary font-serif font-semibold italic text-[17px]">
                "This methodology ensures our trainees don't just memorize information; they acquire muscle memory and situational flexibility."
              </p>
            </div>
          </div>
        </section>

        {/* 06 — YOUR 90-DAY JOURNEY */}
        <section className="py-20 md:py-28 bg-bg-light border-b border-[#e6e9ee] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent text-[14px] tracking-[0.2em] font-semibold uppercase">PROGRAMME TIMELINE</span>
              <h2 className="font-serif font-bold text-[36px] sm:text-[48px] text-primary mt-2">Your 90-Day Journey</h2>
              <p className="text-text-muted mt-3 text-[17px] max-w-[600px] mx-auto">
                We break the programme into chronological phases rather than throwing a boring academic subject list at you.
              </p>
            </div>

            {/* Timelines grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Selector List */}
              <div className="lg:col-span-4 flex flex-col gap-2 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
                {phases.map((p) => (
                  <button
                    key={p.num}
                    onClick={() => setActivePhase(p.num)}
                    className={`w-full text-left p-4 transition-all duration-300 border flex justify-between items-center cursor-pointer rounded-sm ${
                      activePhase === p.num
                        ? "bg-primary border-primary text-white shadow-md"
                        : "bg-white border-[#e6e9ee] text-primary hover:border-accent"
                    }`}
                  >
                    <div>
                      <span className="block text-[11px] uppercase tracking-widest text-accent font-semibold">{p.days}</span>
                      <span className="font-serif text-[16px] font-bold block mt-1">{p.name}</span>
                    </div>
                    <span className="font-serif text-[20px] ml-4 font-bold">{String(p.num).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>

              {/* Display Area */}
              <div className="lg:col-span-8 bg-white border border-[#e6e9ee] p-8 md:p-12 shadow-sm min-h-[440px] flex flex-col justify-between rounded-sm">
                <div>
                  <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#e6e9ee] pb-5 mb-6">
                    <span className="text-[13px] tracking-[0.25em] font-bold text-accent uppercase">
                      {phases[activePhase - 1].days}
                    </span>
                    <span className="font-serif text-[28px] font-bold text-primary">
                      PHASE {String(activePhase).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-serif text-[24px] font-bold text-primary mb-4">
                    {phases[activePhase - 1].name.split(" — ")[1]}
                  </h3>
                  
                  <p className="text-text-muted text-[16px] leading-relaxed mb-6 font-light">
                    {phases[activePhase - 1].description}
                  </p>

                  <div>
                    <h4 className="text-[12px] tracking-[0.1em] text-primary uppercase font-bold mb-3">Core Training Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phases[activePhase - 1].highlights.map((h, i) => (
                        <span key={i} className="text-[13px] text-primary bg-bg-light border border-[#e6e9ee] px-4 py-2 font-medium rounded-full">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e6e9ee] flex justify-between items-center flex-wrap gap-4">
                  <span className="text-[13px] font-medium text-text-muted">
                    Phase {activePhase} of 11
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActivePhase((prev) => Math.max(1, prev - 1))}
                      disabled={activePhase === 1}
                      className="px-4 py-2 border border-[#e6e9ee] text-primary hover:border-accent disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      Prev Phase
                    </button>
                    <button
                      onClick={() => setActivePhase((prev) => Math.min(phases.length, prev + 1))}
                      disabled={activePhase === phases.length}
                      className="px-4 py-2 bg-primary text-white hover:bg-primary-light disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      Next Phase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — WHAT YOU WILL LEARN */}
        <section className="py-20 md:py-28 bg-white border-b border-[#e6e9ee] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-[14px] tracking-[0.2em] font-semibold uppercase">SKILL DIRECTORY</span>
              <h2 className="font-serif font-bold text-[36px] sm:text-[48px] text-primary mt-2">Professional Capabilities</h2>
              <p className="text-text-muted mt-3 text-[17px] max-w-[600px] mx-auto">
                Rather than calling them "subjects", we align training directly with marketable, industry-ready capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilities.map((c, i) => (
                <div key={i} className="p-6 border border-[#e6e9ee] hover:border-accent transition-all duration-300 rounded-sm">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-serif flex items-center justify-center text-[14px] font-bold mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-[18px] font-bold text-primary mb-2">{c.title}</h3>
                  <p className="text-[13px] leading-relaxed text-text-muted font-light">{c.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-text-muted mt-12 text-[14px] italic">
              This mirrors the practical orientation seen in Indian hospitality programmes, packaged in a highly career-focused way.
            </p>
          </div>
        </section>


        {/* 09 — PRACTICE THAT BUILDS PROFESSIONALS */}
        <section className="py-20 md:py-28 bg-white border-b border-[#e6e9ee] px-5 sm:px-10">
          <div className="max-w-[1080px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-[14px] tracking-[0.2em] font-semibold uppercase">PRACTICE OVER STUDY</span>
              <h2 className="font-serif font-bold text-[36px] sm:text-[48px] text-primary mt-2">Practice That Builds Professionals</h2>
              <p className="text-text-muted mt-3 text-[17px] max-w-[600px] mx-auto">
                We design our curriculum so students physically perform tasks, making parents and recruiters realize: "Our students learn real capabilities."
              </p>
            </div>

            {/* Interactive demo selector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col gap-2">
                {practiceTasks.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePracticeTask(idx)}
                    className={`w-full text-left p-5 border transition-all duration-300 flex items-center gap-4 cursor-pointer rounded-sm ${
                      activePracticeTask === idx
                        ? "bg-accent border-accent text-white shadow-md"
                        : "bg-bg-light border-[#e6e9ee] text-primary hover:border-accent"
                    }`}
                  >
                    <span className="text-[20px]">{t.icon}</span>
                    <span className="font-serif text-[16px] font-bold tracking-[0.05em]">{t.action}</span>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-7 bg-bg-light border border-[#e6e9ee] p-8 md:p-10 flex flex-col justify-between rounded-sm">
                <div>
                  <span className="text-[44px] block mb-4">{practiceTasks[activePracticeTask].icon}</span>
                  <h3 className="font-serif text-[24px] font-bold text-primary mb-2">
                    {practiceTasks[activePracticeTask].action}
                  </h3>
                  <div className="mb-4 text-[#ff5959] text-[13px] tracking-wider uppercase font-bold">
                    ✕ {practiceTasks[activePracticeTask].wrong}
                  </div>
                  <hr className="border-[#e6e9ee] my-4" />
                  <p className="text-[15px] leading-relaxed text-text-dark font-light">
                    {practiceTasks[activePracticeTask].right}
                  </p>
                </div>
                <div className="text-[12px] text-text-muted mt-6 font-semibold uppercase tracking-wider">
                  Real Competency Training
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — ASSESSMENT */}
        <section className="py-20 md:py-28 bg-bg-light border-b border-[#e6e9ee] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="text-accent text-[14px] tracking-[0.2em] font-semibold uppercase">ASSESSMENT</span>
                <h2 className="font-serif font-bold text-[36px] sm:text-[46px] text-primary mt-2">
                  YOU ARE ASSESSED ON WHAT YOU CAN DO.
                </h2>
                <p className="text-text-muted mt-5 text-[16px] leading-relaxed font-light">
                  We don't rely on conventional exam booklets. You are graded continuously during real work simulation projects, professionalism, and client satisfaction metrics.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {["Attendance", "Grooming", "Communication", "Discipline", "Teamwork", "Practical Skills"].map((trait, i) => (
                    <span key={i} className="text-[12px] bg-white border border-[#e6e9ee] text-primary font-semibold py-2 px-4 rounded-sm">
                      • {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-[#e6e9ee] p-8 md:p-10 shadow-sm rounded-sm">
                <h3 className="font-serif text-[20px] font-bold text-primary mb-6">Assessment Criteria Weights</h3>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Practical Performance", val: "50%", desc: "Competence in labs, operations execution and speed tests." },
                    { label: "Real-world Simulations", val: "20%", desc: "Crisis resolution and client satisfaction as Duty Managers." },
                    { label: "Theory & Knowledge", val: "20%", desc: "Conceptual understanding of hospitality rules." },
                    { label: "Professional Conduct", val: "10%", desc: "Daily grooming standards, punctuality and etiquette logs." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4 pb-4 border-b border-[#f0f2f5] last:border-b-0 last:pb-0">
                      <div>
                        <h4 className="font-bold text-[15px] text-primary">{item.label}</h4>
                        <p className="text-[12px] text-text-muted font-light mt-1">{item.desc}</p>
                      </div>
                      <span className="text-[20px] font-serif font-bold text-accent whitespace-nowrap">{item.val}</span>
                    </div>
                  ))}
                       </div>
              </div>

            </div>
          </div>
        </section>

        {/* 13 — CAREERS AFTER ATITHIS */}
        <section className="py-20 md:py-28 bg-bg-light border-b border-[#e6e9ee] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-[14px] tracking-[0.2em] font-semibold uppercase">PLACEMENT OUTCOMES</span>
              <h2 className="font-serif font-bold text-[36px] sm:text-[48px] text-primary mt-2">Careers After Atithis</h2>
              <p className="text-text-muted mt-3 text-[17px] max-w-[600px] mx-auto">
                Visualise your career pathway starting at top-tier boutique luxury spaces.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Front Office Associate",
                "Guest Relations Associate",
                "Housekeeping Associate",
                "Villa Operations Associate",
                "Resort Operations Associate",
                "Spa Associate",
                "Fitness Centre Associate",
                "Laundry Operations Associate",
                "Engineering Associate",
                "Guest Experience Executive",
                "Hospitality Sales Executive",
                "Operations Executive"
              ].map((role, idx) => (
                <div key={idx} className="bg-white p-5 border border-[#e6e9ee] hover:border-accent text-center transition-all duration-300 rounded-sm shadow-sm">
                  <span className="block text-[14px] font-bold text-primary">{role}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="font-serif italic text-accent font-bold text-[20px]">
                "Your first role is only the beginning."
              </p>
            </div>
          </div>
        </section>

        {/* 19 — THE ATITHIS PROMISE */}
        <section className="py-24 bg-primary text-white text-center px-5 sm:px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#102a4c_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
          <div className="relative max-w-[800px] mx-auto z-10">
            <span className="text-accent-light text-[12px] tracking-[0.3em] font-semibold uppercase block mb-6">THE PROMISE</span>
            
            <h2 className="font-serif font-bold text-[32px] sm:text-[46px] leading-tight text-white mb-8">
              We don't promise to make you an expert in 90 days. We promise to give you something more valuable: a foundation.
            </h2>
            
            <p className="text-white/80 text-[17px] leading-relaxed max-w-[680px] mx-auto mb-10 font-light">
              The confidence to enter any premium hospitality workplace. The discipline to perform professionally. The experience to understand how hospitality really works. And the mindset to keep growing.
            </p>

            <span className="block font-serif text-[24px] text-accent tracking-[0.2em] font-bold uppercase mb-10">
              LEARN. EXPERIENCE. GROW.
            </span>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/admissions"
                className="bg-accent text-white px-9 py-4 text-[13px] tracking-[0.15em] uppercase hover:bg-accent-light font-bold transition-all duration-300 rounded-sm"
              >
                Apply for Admission
              </Link>
              <Link
                href="/contact"
                className="border border-white/30 !text-white px-9 py-4 text-[13px] tracking-[0.15em] uppercase hover:border-accent-light hover:!text-accent-light transition-all duration-300 rounded-sm"
              >
                Speak to Advisor
              </Link>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
