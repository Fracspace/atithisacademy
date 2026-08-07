"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Curriculum() {
  const [activeMonth, setActiveMonth] = useState(1);
  const [openWeek, setOpenWeek] = useState(1);

  const weeks = [
    {
      num: 1,
      month: 1,
      title: "The Atithis Way",
      groups: [
        {
          label: "Core",
          items: [
            "Philosophy of Atithis",
            "Indian hospitality heritage",
            "Atithi Devo Bhava in modern hospitality",
            "Luxury hospitality mindset",
            "Professional ethics",
            "Discipline & accountability",
            "Emotional intelligence",
            "Grooming & personal presentation",
          ],
        },
        {
          label: "Practical",
          items: ["Uniform standards", "Professional posture", "Communication drills", "Confidence building", "Public speaking"],
        },
      ],
    },
    {
      num: 2,
      month: 1,
      title: "Guest Psychology & Service Excellence",
      groups: [
        {
          label: "Core",
          items: [
            "Understanding guest expectations",
            "Luxury guest behaviour",
            "Observation techniques",
            "Memory skills",
            "Communication mastery",
            "Telephone etiquette",
            "Guest complaint recovery",
            "VIP guest handling",
          ],
        },
        {
          label: "Role Plays",
          items: [
            "Difficult guests",
            "International travellers",
            "Families",
            "Honeymoon guests",
            "Senior citizens",
            "Children",
            "Wellness travellers",
          ],
        },
      ],
    },
    {
      num: 3,
      month: 1,
      title: "Sense of Place",
      groups: [
        {
          label: "Focus",
          items: [
            "Destination storytelling",
            "Regional cuisine",
            "Local culture",
            "Architecture appreciation",
            "Sustainability",
            "Responsible tourism",
            "Creating memorable experiences",
          ],
        },
      ],
      note: "Every property should reflect its destination rather than becoming generic.",
    },
    {
      num: 4,
      month: 1,
      title: "Boutique Hospitality Operations",
      groups: [
        {
          label: "Introduction to",
          items: [
            "Front Office",
            "Housekeeping",
            "Reservations",
            "Laundry",
            "Food & Beverage",
            "Engineering",
            "Maintenance",
            "Security",
            "Spa Operations",
            "Guest Relations",
          ],
        },
      ],
      note: "No departmental silos — students understand how all departments work together.",
    },
    {
      num: 5,
      month: 2,
      title: "Rooms Division Excellence",
      groups: [
        {
          label: "Core",
          items: [
            "Check-in & check-out",
            "Room readiness",
            "Luxury housekeeping",
            "Linen standards",
            "Room inspections",
            "Turn-down service",
            "Lost & found",
            "Guest amenities",
          ],
        },
        {
          label: "Practical",
          items: ["Operate a mock boutique hotel"],
        },
      ],
    },
    {
      num: 6,
      month: 2,
      title: "Food & Beverage",
      groups: [
        {
          label: "Core",
          items: [
            "Restaurant service",
            "Banquets",
            "Villa dining",
            "In-room dining",
            "Table etiquette",
            "Beverage service",
            "Hygiene",
            "Kitchen coordination",
            "Guest interaction",
          ],
        },
      ],
      note: "Students host live dining experiences.",
    },
    {
      num: 7,
      month: 2,
      title: "Engineering & Asset Care",
      groups: [
        {
          label: "Core",
          items: [
            "Preventive maintenance",
            "Energy efficiency",
            "Landscaping",
            "Pools",
            "Water systems",
            "Safety standards",
            "Fire safety",
            "Asset preservation",
            "Sustainability",
          ],
        },
      ],
      note: "Hospitality is about protecting assets as much as serving guests.",
    },
    {
      num: 8,
      month: 2,
      title: "Revenue & Commercial Excellence",
      groups: [
        {
          label: "Introduction to",
          items: [
            "Hotel revenue management",
            "ADR",
            "RevPAR",
            "Occupancy strategy",
            "Dynamic pricing",
            "OTA management",
            "Direct bookings",
            "Sales strategy",
            "Marketing basics",
            "Reputation management",
            "Guest reviews",
          ],
        },
      ],
      note: "Students analyse real hospitality case studies.",
    },
    {
      num: 9,
      month: 3,
      title: "Leadership & Team Culture",
      groups: [
        {
          label: "Core",
          items: [
            "Leadership styles",
            "Team building",
            "Recruitment",
            "Performance management",
            "Conflict resolution",
            "Staff motivation",
            "Time management",
            "Professional conduct",
          ],
        },
      ],
      note: "Students lead operational simulations.",
    },
    {
      num: 10,
      month: 3,
      title: "Hospitality Technology",
      groups: [
        {
          label: "Hands-on exposure to",
          items: [
            "PMS",
            "Channel Manager",
            "Booking Engines",
            "POS",
            "CRM",
            "Guest Communication Platforms",
            "AI in Hospitality",
            "Owner Dashboards",
            "Reporting",
          ],
        },
      ],
      note: "Technology should enhance hospitality — not replace it.",
    },
    {
      num: 11,
      month: 3,
      title: "The Atithis Standards™",
      groups: [
        {
          label: "Proprietary framework covering",
          items: [
            "Arrival experience",
            "Guest journey",
            "Rooms",
            "Food & Beverage",
            "Maintenance",
            "Engineering",
            "Landscaping",
            "Wellness",
            "Housekeeping",
            "Service rituals",
            "Safety",
            "Sustainability",
            "Brand standards",
            "Quality audits",
          ],
        },
      ],
      note: "Each student participates in a complete property audit.",
    },
    {
      num: 12,
      month: 3,
      title: "Capstone & Assessment",
      groups: [
        {
          label: "Rotating responsibilities",
          items: [
            "General Manager",
            "Front Office",
            "Guest Experience",
            "Housekeeping",
            "Restaurant",
            "Engineering",
            "Revenue",
            "Sales",
            "Duty Manager",
          ],
        },
        {
          label: "Assessment measures",
          items: ["Leadership", "Operational competence", "Teamwork", "Guest satisfaction", "Problem-solving", "Professionalism"],
        },
      ],
    },
  ];

  const monthTabs = [
    { label: "Month One (Foundation)", value: 1 },
    { label: "Month Two (Operator)", value: 2 },
    { label: "Month Three (Steward)", value: 3 },
  ];

  const visibleWeeks = weeks.filter((w) => w.month === activeMonth);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-primary text-white py-24 md:py-28 relative overflow-hidden px-5 sm:px-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#0d2340_0_16px,#102a4c_16px_32px)] opacity-50"></div>
          <div className="relative max-w-[1280px] mx-auto text-center z-10">
            <div className="flex items-center justify-center gap-3.5 mb-6">
              <span className="w-11 h-[1px] bg-accent"></span>
              <span className="text-[12px] tracking-[0.32em] text-accent-light uppercase">Curriculum</span>
              <span className="w-11 h-[1px] bg-accent"></span>
            </div>
            <h1 className="font-serif font-semibold text-[42px] sm:text-[76px] leading-[1.05] text-white">
              Twelve weeks, module by module
            </h1>
            <p className="max-w-[640px] mx-auto mt-7 text-[18px] leading-relaxed text-white/78 font-light">
              Explore every week of the program in full detail — the topics, practicals and role-plays that shape a complete hospitality professional.
            </p>
          </div>
        </section>

        {/* ACCORDION MODULES */}
        <section className="py-20 md:py-32 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1080px] mx-auto">
            {/* MONTH SWITCHER */}
            <div className="flex gap-3 justify-center mb-12 flex-wrap">
              {monthTabs.map((t) => {
                const isActive = activeMonth === t.value;
                return (
                  <button
                    key={t.value}
                    onClick={() => {
                      setActiveMonth(t.value);
                      const firstWeek = weeks.find((w) => w.month === t.value)?.num || 1;
                      setOpenWeek(firstWeek);
                    }}
                    className={`px-7 py-4 text-[13px] tracking-[0.1em] uppercase transition-all duration-300 font-medium cursor-pointer border ${
                      isActive
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-primary border-[#e6e9ee] hover:border-primary"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* WEEKS ACCORDION */}
            <div className="flex flex-col gap-3.5">
              {visibleWeeks.map((w) => {
                const isOpen = openWeek === w.num;
                return (
                  <div
                    key={w.num}
                    className={`bg-white border transition-colors duration-300 ${isOpen ? "border-accent" : "border-[#e6e9ee]"}`}
                  >
                    <button
                      onClick={() => setOpenWeek(isOpen ? null : w.num)}
                      className="w-full flex items-center gap-5.5 p-6 sm:p-[26px_32px] bg-transparent border-none cursor-pointer text-left"
                    >
                      <span className="font-serif text-[26px] text-accent min-w-[76px] font-medium">W{w.num}</span>
                      <span className="flex-grow font-serif text-[20px] text-primary font-bold">{w.title}</span>
                      <span
                        className={`text-[26px] text-accent font-light transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-9 sm:px-[32px] sm:pb-[34px] lg:pl-[130px] animate-[slideDown_0.4s_ease] border-t border-dashed border-[#e6e9ee] pt-6">
                        {w.groups.map((g, gIdx) => (
                          <div key={gIdx} className="mb-5.5">
                            <span className="text-[12px] tracking-[0.2em] text-[#8894a5] uppercase font-semibold">
                              {g.label}
                            </span>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {g.items.map((it, itIdx) => (
                                <span
                                  key={itIdx}
                                  className="text-[14px] text-text-muted bg-[#F6F7F9] border border-[#e9ecf1] p-[7px_15px] font-medium"
                                >
                                  {it}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                        {w.note && (
                          <p className="mt-2 text-[15px] font-medium italic text-primary border-l-2 border-accent pl-4 font-serif">
                            {w.note}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-white text-center px-5 sm:px-10">
          <div className="max-w-[720px] mx-auto">
            <h2 className="font-serif font-semibold text-[32px] sm:text-[48px] leading-tight text-white">
              This is the making of a steward
            </h2>
            <div className="flex gap-4 justify-center mt-9 flex-wrap">
              <Link
                href="/admissions#apply"
                className="bg-accent text-white px-9 py-4 text-[14px] tracking-[0.1em] uppercase hover:bg-accent-light transition-all duration-300"
              >
                Apply Now
              </Link>
              <Link
                href="/program"
                className="border border-white/40 text-white px-9 py-4 text-[14px] tracking-[0.1em] uppercase hover:border-white hover:bg-white/6 transition-all duration-300"
              >
                Program Overview
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
