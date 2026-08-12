"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);

  const facts = [
    { label: "Duration", value: "12 Weeks" },
    { label: "Schedule", value: "6 Days / Week" },
    { label: "Internship", value: "90 Days Paid" },
    { label: "Credential", value: "Certified Pro" },
  ];

  const eligibility = [
    "Minimum age 18, with a genuine passion for hospitality and service.",
    "Class 12 / higher secondary completed (graduates and career-changers welcome).",
    "Fluency or working proficiency in English; other languages an advantage.",
    "Readiness to commit to a disciplined, six-days-a-week immersive schedule.",
  ];

  const steps = [
    { n: "1", title: "Submit Inquiry", desc: "Complete the application form or download the brochure to begin.", line: true },
    { n: "2", title: "Admissions Call", desc: "A one-on-one conversation to understand your goals and answer questions.", line: true },
    { n: "3", title: "Personal Interview", desc: "A short interview and grooming assessment with the faculty panel.", line: true },
    { n: "4", title: "Offer & Enrolment", desc: "Receive your offer, confirm your seat and complete enrolment formalities.", line: true },
    { n: "5", title: "Orientation", desc: "Join your cohort for orientation and step into the Atithis Way.", line: false },
  ];

  const fees = [
    {
      tier: "Program Fee",
      price: "₹ ——",
      note: "Full 12-week certificate",
      bg: "bg-white",
      border: "border-[#e6e9ee]",
      text: "text-text-dark",
      accent: "text-accent",
      divider: "border-[#eef1f4]",
      items: ["Classroom + simulation training", "All 11 simulation labs", "Uniforms & materials", "Certification"],
    },
    {
      tier: "Most Chosen",
      price: "₹ ——",
      note: "Program + placement track",
      bg: "bg-primary",
      border: "border-primary",
      text: "text-white",
      accent: "text-accent-light",
      divider: "border-white/15",
      items: ["Everything in Program Fee", "Guaranteed 90-day paid internship", "Placement assistance", "Industry mentorship"],
    },
    {
      tier: "Easy Payment",
      price: "EMI",
      note: "Flexible instalment plans",
      bg: "bg-white",
      border: "border-[#e6e9ee]",
      text: "text-text-dark",
      accent: "text-accent",
      divider: "border-[#eef1f4]",
      items: ["Instalment-based tuition", "Education-loan assistance", "Early-bird concessions", "Scholarship options"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span className="text-[12px] tracking-[0.32em] text-accent-light uppercase">Admissions 2026</span>
              <span className="w-11 h-[1px] bg-accent"></span>
            </div>
            <h1 className="font-serif font-semibold text-[42px] sm:text-[76px] leading-[1.05] text-white">
              Your place in the next cohort
            </h1>
            <p className="max-w-[600px] mx-auto mt-7 text-[18px] leading-relaxed text-white/78 font-light">
              A selective 12-week program for those ready to commit to the discipline of world-class hospitality.
            </p>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="bg-[#0B1D36] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {facts.map((f, idx) => (
                <div
                  key={idx}
                  className="py-9 px-6 text-center border-b border-white/10 last:border-b-0 odd:border-r md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <div className="text-[11px] tracking-[0.2em] text-accent-light uppercase font-semibold">{f.label}</div>
                  <div className="font-serif text-[30px] text-white mt-2 leading-none font-medium">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ELIGIBILITY + PROCESS */}
        <section className="py-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-[72px] items-start">
            <div>
              <div className="flex items-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Eligibility</span>
              </div>
              <h2 className="font-serif font-semibold text-[32px] sm:text-[46px] leading-tight text-primary">
                Who should apply
              </h2>
              <div className="margin-top:28px mt-7 flex flex-col gap-4">
                {eligibility.map((e, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start bg-white border border-[#e9ecf1] p-[18px_20px]">
                    <span className="text-accent text-[15px] mt-0.5">◆</span>
                    <span className="text-[15px] leading-relaxed text-text-muted font-medium">{e}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3.5 mb-5.5">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Admission Process</span>
              </div>
              <h2 className="font-serif font-semibold text-[32px] sm:text-[46px] leading-tight text-primary">
                Five steps to enrolment
              </h2>
              <div className="mt-8 flex flex-col">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex gap-6 items-start pb-7 relative">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-serif text-[20px] font-semibold">
                        {s.n}
                      </div>
                      {s.line && <div className="w-[1px] min-h-[36px] bg-[#dfe3e9] mt-1.5 flex-grow"></div>}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-serif text-[23px] text-primary font-bold">{s.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-text-muted font-light">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEES / TUITION
        <section className="pb-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fees.map((f, idx) => (
                <div key={idx} className={`${f.bg} border ${f.border} p-11 px-9 ${f.text}`}>
                  <span className={`text-[12px] tracking-[0.16em] uppercase ${f.accent} font-semibold`}>{f.tier}</span>
                  <div className="font-serif text-[46px] mt-3.5 leading-none font-bold">{f.price}</div>
                  <div className="text-[13px] opacity-70 mt-1.5 font-light">{f.note}</div>
                  <div className={`mt-6.5 pt-5.5 border-t ${f.divider} flex flex-col gap-3`}>
                    {f.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex gap-3 items-start text-[14px] leading-normal font-medium">
                        <span className={f.accent}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-[12px] text-[#8894a5] mt-6 tracking-[0.04em]">
              Fee figures shown are placeholders — final tuition and payment plans are confirmed by the admissions team.
            </p>
          </div>
        </section>
        */}

        {/* DOWNLOAD + APPLY FORM */}
        <section id="apply" className="pb-32 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1080px] mx-auto">
            <div className="bg-white border border-[#e6e9ee] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
              <div className="bg-primary text-white p-8 sm:p-14 sm:px-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-5.5">
                    <span className="w-10 h-[1px] bg-accent"></span>
                    <span className="text-[12px] tracking-[0.3em] text-accent-light uppercase">Start Here</span>
                  </div>
                  <h2 className="font-serif text-[40px] leading-tight text-white font-bold">Apply for the 2026 cohort</h2>
                  <p className="mt-[18px] text-[16px] leading-relaxed text-white/75 font-light">
                    Complete the form and our admissions team will contact you with dates, eligibility guidance and next steps.
                  </p>
                </div>
                {/* <div className="mt-10">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 border border-white/35 !text-white p-[15px_26px] text-[13px] tracking-[0.1em] uppercase hover:border-accent-light hover:!text-accent-light hover:bg-transparent transition-all duration-300 font-semibold"
                  >
                    ↓ Download Brochure
                  </a>
                </div> */}
              </div>
              <div className="p-8 sm:p-14 sm:px-12">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-10">
                    <span className="font-serif text-[40px] text-accent italic font-medium">Thank you</span>
                    <p className="mt-3.5 text-[16px] text-text-muted font-light max-w-[340px]">
                      Your application inquiry has been received. Our admissions team will be in touch within two working days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">First Name</span>
                        <input
                          required
                          className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none"
                        />
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Last Name</span>
                        <input
                          required
                          className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none"
                        />
                      </label>
                    </div>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Email</span>
                      <input
                        required
                        type="email"
                        className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Phone</span>
                      <input
                        required
                        className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Why Atithis?</span>
                      <textarea
                        rows={3}
                        className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark resize-y focus:border-accent focus:outline-none"
                      ></textarea>
                    </label>
                    <button
                      type="submit"
                      className="bg-primary !text-accent-light p-4 text-[13px] tracking-[0.14em] uppercase border-none cursor-pointer hover:bg-accent-light hover:!text-primary transition-all duration-300 mt-1.5 font-bold"
                    >
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
