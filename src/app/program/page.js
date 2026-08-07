"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";

import Image from "next/image";

import botique_hotel_Img from '../../assets/program/progarm_botique_hotel_image.png';
import laundry_operations_Img from '../../assets/program/progarm_laundry_operations.png';
import luxury_guest_room_Img from '../../assets/program/progarm_luxury_guest_room.png';
import concierge_Img from '../../assets/program/program_concierge.png';
import engineering_Img from '../../assets/program/program_engineering_workshop.png';
import fine_dining_restaurant_Img from '../../assets/program/program_fine_dining_restaurant.png';
import holiday_home_villa_Img from '../../assets/program/program_holdiay_home_villa.png';
import housekeeping_Img from '../../assets/program/program_housekeeping.png';
import reservation_Img from '../../assets/program/program_reservation_office.png';
import resort_lobby_Img from '../../assets/program/program_resort_lobby.png';
import spa_reception_Img from '../../assets/program/program_spa_reciption.png';

import internImg from '../../assets/program/intern-deplyImg.png';

export default function Program() {
  const facts = [
    { label: "Duration", value: "12 Weeks" },
    { label: "Schedule", value: "6 Days / Week" },
    { label: "Internship", value: "90 Days Paid" },
    { label: "Credential", value: "Certified Pro" },
  ];

  const monthCards = [
    {
      month: "Month One",
      title: "The Foundation",
      desc: "Mindset, guest psychology, sense of place and the shape of a boutique property. The student becomes a host.",
      weeks: [
        { num: 1, title: "The Atithis Way" },
        { num: 2, title: "Guest Psychology & Service" },
        { num: 3, title: "Sense of Place" },
        { num: 4, title: "Boutique Operations" },
      ],
    },
    {
      month: "Month Two",
      title: "The Operator",
      desc: "Rooms, food & beverage, engineering and revenue. The student learns to run every department with mastery.",
      weeks: [
        { num: 5, title: "Rooms Division" },
        { num: 6, title: "Food & Beverage" },
        { num: 7, title: "Engineering & Asset Care" },
        { num: 8, title: "Revenue & Commercial" },
      ],
    },
    {
      month: "Month Three",
      title: "The Steward",
      desc: "Leadership, technology, the Atithis Standards™ and a live capstone. The student becomes a leader.",
      weeks: [
        { num: 9, title: "Leadership & Culture" },
        { num: 10, title: "Hospitality Technology" },
        { num: 11, title: "The Atithis Standards™" },
        { num: 12, title: "Capstone & Assessment" },
      ],
    },
  ];

  const schedule = [
    { time: "06:30", activity: "Fitness & Wellness" },
    { time: "07:30", activity: "Grooming & Professional Readiness" },
    { time: "08:30", activity: "Classroom Learning" },
    { time: "11:00", activity: "Simulation Lab" },
    { time: "13:00", activity: "Lunch" },
    { time: "14:00", activity: "Department Rotation" },
    { time: "17:00", activity: "Guest Experience Workshop" },
    { time: "18:00", activity: "Reflection & Feedback" },
  ];

  const labNames = [
    "Boutique Hotel Reception",
    "Luxury Guest Room",
    "Holiday Home Villa",
    "Resort Lobby",
    "Fine Dining Restaurant",
    "Housekeeping Lab",
    "Laundry Operations",
    "Engineering Workshop",
    "Reservations Office",
    "Spa Reception",
    "Concierge Desk",
  ];

  const labImages = [
    botique_hotel_Img,
    luxury_guest_room_Img,
    holiday_home_villa_Img,
    resort_lobby_Img,
    fine_dining_restaurant_Img,
    housekeeping_Img,
    laundry_operations_Img,
    engineering_Img,
    reservation_Img,
    spa_reception_Img,
    concierge_Img,
  ];

  const labs = labNames.map((name, i) => ({
    name,
    n: String(i + 1).padStart(2, "0"),
    src: labImages[i],
    ph: `Upload — ${name}`,
  }));

  const softSkills = [
    "Spoken English",
    "Professional Writing",
    "Business Communication",
    "Presentation Skills",
    "Telephone Etiquette",
    "Body Language",
    "Grooming",
    "Luxury Etiquette",
    "Cultural Sensitivity",
    "Emotional Intelligence",
    "Financial Literacy",
    "Digital Skills",
  ];

  const tech = [
    "PMS",
    "Channel Manager",
    "Booking Engines",
    "POS",
    "CRM",
    "Guest Communication",
    "AI in Hospitality",
    "Owner Dashboards",
    "Reporting",
  ];

  const exposure = [
    { n: "01", text: "Site visits to luxury hotels and resorts" },
    { n: "02", text: "Interaction with General Managers" },
    { n: "03", text: "Guest lectures by hospitality leaders" },
    { n: "04", text: "Mock owner presentations" },
    { n: "05", text: "Live event operations" },
    { n: "06", text: "Destination immersion exercises" },
  ];

  const certReqs = [
    "Minimum 90% attendance",
    "Practical competence in all departments",
    "Professional grooming standards",
    "Successful completion of simulations",
    "Final capstone assessment",
    "Viva with industry panel",
  ];

  const internTypes = [
    "Boutique Hotels",
    "Luxury Resorts",
    "Wellness Retreats",
    "Holiday Home Communities",
    "Heritage Hotels",
    "Atithis-managed properties",
    "Partner hospitality brands",
  ];

  const pathway = [
    { step: "01", role: "Student", fill: "#0F2747", txt: "#fff", ring: "#0F2747", arrow: true },
    { step: "02", role: "Guest Experience Associate", fill: "#fff", txt: "#0F2747", ring: "#B0894F", arrow: true },
    { step: "03", role: "Executive", fill: "#fff", txt: "#0F2747", ring: "#B0894F", arrow: true },
    { step: "04", role: "Manager", fill: "#fff", txt: "#0F2747", ring: "#B0894F", arrow: true },
    { step: "05", role: "General Manager", fill: "#fff", txt: "#0F2747", ring: "#B0894F", arrow: true },
    { step: "06", role: "Cluster Operations Head", fill: "#B0894F", txt: "#fff", ring: "#B0894F", arrow: false },
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
              <span className="text-[12px] tracking-[0.32em] text-accent-light uppercase">The Program</span>
              <span className="w-11 h-[1px] bg-accent"></span>
            </div>
            <h1 className="font-serif font-semibold text-[42px] sm:text-[76px] leading-[1.05] text-white">
              A 12-week immersion into luxury hospitality
            </h1>
            <p className="max-w-[660px] mx-auto mt-7 text-[18px] leading-relaxed text-white/78 font-light">
              Classroom learning, simulation labs and live training, six days a week — a deliberate arc from foundation to operator to steward.
            </p>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="bg-[#0B1D36] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {facts.map((f, idx) => (
                <div key={idx} className="py-9 px-6 text-center border-r border-white/10 last:border-r-0">
                  <div className="text-[11px] tracking-[0.2em] text-accent-light uppercase font-semibold">{f.label}</div>
                  <div className="font-serif text-[30px] text-white mt-2 leading-none font-medium">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE MONTHS */}
        <section className="py-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end flex-wrap gap-6 mb-14">
              <div className="max-w-[600px]">
                <div className="flex items-center gap-3.5 mb-5.5">
                  <span className="w-10 h-[1px] bg-accent"></span>
                  <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Program Structure</span>
                </div>
                <h2 className="font-serif font-semibold text-[34px] sm:text-[52px] leading-[1.08] text-primary">
                  Three months. Three transformations.
                </h2>
              </div>
              <p className="max-w-[340px] text-[16px] leading-relaxed text-text-muted font-light">
                From foundation to operator to steward — a complete hospitality professional, week by week.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {monthCards.map((m, idx) => (
                <div key={idx} className="bg-white border border-[#e6e9ee] p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] tracking-[0.24em] text-accent uppercase font-medium">{m.month}</span>
                    <h3 className="font-serif text-[32px] text-primary mt-3 leading-tight font-medium">{m.title}</h3>
                    <p className="mt-3.5 text-[15px] leading-relaxed text-text-muted font-light">{m.desc}</p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-[#eef1f4] flex flex-col gap-2.5">
                    {m.weeks.map((w, wIdx) => (
                      <div key={wIdx} className="flex gap-3.5 items-baseline">
                        <span className="text-[11px] text-accent tracking-[0.1em] font-semibold min-w-[52px]">
                          WEEK {w.num}
                        </span>
                        <span className="text-[14px] text-[#2A3646] font-medium">{w.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-11">
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-2.5 text-[14px] tracking-[0.08em] uppercase text-primary border-b border-accent pb-1 hover:text-accent transition-colors duration-300 font-medium"
              >
                See the Full Week-by-Week Curriculum →
              </Link>
            </div>
          </div>
        </section>

        {/* DAILY SCHEDULE
        <section className="py-24 bg-white border-t border-[#eef1f4] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-20 items-start">
              <div className="lg:sticky lg:top-[120px]">
                <div className="flex items-center gap-3.5 mb-5.5">
                  <span className="w-10 h-[1px] bg-accent"></span>
                  <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">A Day at Atithis</span>
                </div>
                <h2 className="font-serif font-semibold text-[32px] sm:text-[48px] leading-tight text-primary">
                  Discipline, from dawn to reflection.
                </h2>
                <p className="mt-[22px] text-[16px] leading-relaxed text-text-muted font-light">
                  Every day is a rehearsal for the standards of a luxury property — beginning with wellness and grooming, closing with reflection and feedback.
                </p>
              </div>
              <div className="divide-y divide-[#eef1f4]">
                {schedule.map((row, idx) => (
                  <div key={idx} className="flex gap-7 items-center py-5">
                    <span className="font-serif text-[24px] text-primary min-w-[96px] font-semibold">{row.time}</span>
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                    <span className="text-[17px] text-[#2A3646] tracking-[0.02em] font-medium">{row.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

        {/* SIMULATION LABS */}
        <section className="py-24 bg-[#F6F7F9] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-14">
              <div className="flex items-center justify-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Learn by Doing</span>
                <span className="w-10 h-[1px] bg-accent"></span>
              </div>
              <h2 className="font-serif font-semibold text-[36px] sm:text-[56px] leading-[1.08] text-primary">
                Eleven Simulation Labs
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-text-muted font-light">
                Realistic environments where students rehearse every touchpoint of a boutique property — long before they meet a real guest.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {labs.map((l, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e6e9ee] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(15,39,71,0.3)] transition-all duration-400"
                >
                  <div className="aspect-[4/3] w-full relative">
                    <Image src={l.src} alt={l.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] text-accent tracking-[0.14em] font-semibold font-mono">LAB {l.n}</span>
                    <h3 className="text-[17px] text-primary mt-1.5 font-medium">{l.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOFT SKILLS + TECH */}
        <section className="py-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Woven Throughout</span>
              </div>
              <h2 className="font-serif font-semibold text-[28px] sm:text-[40px] leading-tight text-primary">
                Soft skills, every single day
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
                {softSkills.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 bg-white border border-[#e9ecf1] p-3.5 px-4">
                    <span className="w-1.5 h-1.5 bg-accent rotate-45 flex-shrink-0"></span>
                    <span className="text-[14px] text-[#2A3646] font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Hospitality Technology</span>
              </div>
              <h2 className="font-serif font-semibold text-[28px] sm:text-[40px] leading-tight text-primary">
                Technology that enhances hospitality
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-text-muted font-light">
                Hands-on exposure to the systems that run a modern property — because technology should elevate the guest experience, never replace it.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-6">
                {tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[14px] tracking-[0.04em] text-primary bg-white border border-[#dfe3e9] p-[11px_18px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPOSURE + CERT */}
        <section className="py-24 bg-[#0B1D36] text-white px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3.5 mb-5.5">
                  <span className="w-10 h-[1px] bg-accent"></span>
                  <span className="text-[12px] tracking-[0.3em] text-accent-light uppercase">Industry Exposure</span>
                </div>
                <h2 className="font-serif font-semibold text-[30px] sm:text-[46px] leading-tight text-white">
                  Learning that steps beyond the classroom
                </h2>
                <div className="mt-8 divide-y divide-white/10">
                  {exposure.map((e, idx) => (
                    <div key={idx} className="flex gap-4.5 items-center py-4.5">
                      <span className="font-serif text-[18px] text-accent-light min-w-[34px] font-semibold">{e.n}</span>
                      <span className="text-[17px] text-white/90 font-light">{e.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/3 border border-white/14 p-10 sm:p-13">
                <div className="flex items-center gap-3.5 mb-5.5">
                  <span className="w-10 h-[1px] bg-accent"></span>
                  <span className="text-[12px] tracking-[0.3em] text-accent-light uppercase">Certification</span>
                </div>
                <h3 className="font-serif text-[32px] leading-snug text-white font-medium">
                  The Atithis Certified Hospitality Professional
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-white/72 font-light">
                  A credential earned, not given. Candidates must meet every standard of the house.
                </p>
                <div className="mt-6.5 flex flex-col gap-3.5">
                  {certReqs.map((c, idx) => (
                    <div key={idx} className="flex gap-3.5 items-start">
                      <span className="text-accent-light text-[15px] mt-0.5">◆</span>
                      <span className="text-[15px] text-white/86 font-light">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNSHIP */}
        <section className="py-24 bg-white px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20 items-center">
              <div className="relative">
                <div className="aspect-[5/4] shadow-[0_34px_70px_-40px_rgba(15,39,71,0.35)]">
                  <Image src={internImg} className="w-auto h-auto" id="program-internship" alt="Upload — internship / resort operations floor" />
                </div>
                <div className="absolute -top-7 -right-7 bg-accent text-white py-6 px-7.5 text-center shadow-lg">
                  <div className="font-serif text-[46px] font-semibold leading-none">90</div>
                  <div className="text-[11px] tracking-[0.2em] uppercase mt-1">Day Paid Internship</div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3.5 mb-5.5">
                  <span className="w-10 h-[1px] bg-accent"></span>
                  <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Guaranteed Internship</span>
                </div>
                <h2 className="font-serif font-semibold text-[32px] sm:text-[50px] leading-tight text-primary">
                  Every graduate steps into a real property
                </h2>
                <p className="mt-5.5 text-[17px] leading-relaxed text-text-muted font-light">
                  A structured 90-day paid internship at an Atithis-managed or partner property, rotating through Front Office, Rooms, F&amp;B, Guest Experience and Operations.
                </p>
                <div className="flex flex-wrap gap-2.5 mt-6.5">
                  {internTypes.map((i, idx) => (
                    <span
                      key={idx}
                      className="text-[14px] text-primary border border-[#dfe3e9] p-[10px_18px] bg-bg-light font-medium"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAREER PATHWAYS */}
        <section className="py-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-16">
              <div className="flex items-center justify-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Career Pathways</span>
                <span className="w-10 h-[1px] bg-accent"></span>
              </div>
              <h2 className="font-serif font-semibold text-[36px] sm:text-[56px] leading-[1.08] text-primary">
                A clear road to General Manager
              </h2>
            </div>
            <div className="flex flex-wrap items-stretch justify-center gap-4 lg:gap-0">
              {pathway.map((p, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="text-center px-2">
                    <div
                      style={{ background: p.fill, color: p.txt, borderColor: p.ring }}
                      className="w-[74px] h-[74px] rounded-full border flex items-center justify-center mx-auto font-serif text-[24px] shadow-sm font-semibold"
                    >
                      {p.step}
                    </div>
                    <div className="text-[13px] text-[#2A3646] mt-3.5 max-w-[120px] mx-auto leading-snug font-semibold">
                      {p.role}
                    </div>
                  </div>
                  {p.arrow && (
                    <span className="text-accent text-[22px] mx-1.5 lg:mx-3 self-start mt-6 hidden sm:inline-block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-white text-center px-5 sm:px-10">
          <div className="max-w-[720px] mx-auto">
            <h2 className="font-serif font-semibold text-[32px] sm:text-[48px] leading-tight text-white">
              Your seat in the next cohort awaits
            </h2>
            <div className="flex gap-4 justify-center mt-9 flex-wrap">
              <Link
                href="/admissions#apply"
                className="bg-accent text-white px-9 py-4 text-[14px] tracking-[0.1em] uppercase hover:bg-accent-light transition-all duration-300"
              >
                Apply Now
              </Link>
              <Link
                href="/curriculum"
                className="border border-white/40 text-white px-9 py-4 text-[14px] tracking-[0.1em] uppercase hover:border-white hover:bg-white/6 transition-all duration-300"
              >
                View Curriculum
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
