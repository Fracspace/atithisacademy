"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const facts = [
    { label: "Duration", value: "12 Weeks" },
    { label: "Schedule", value: "6 Days / Week" },
    { label: "Internship", value: "90 Days Paid" },
    { label: "Credential", value: "Certified Pro" },
  ];

  const admissionsSteps = [
    { num: "01", title: "Submit Application", desc: "Fill out the online application form with basic educational details." },
    { num: "02", title: "Counselling / Interaction", desc: "A personal conversation with our guides to understand your goals and compatibility." },
    { num: "03", title: "Selection", desc: "Receive confirmation of admission based on interview performance and passion." },
    { num: "04", title: "Fee & Documentation", desc: "Submit required academic documents and complete fee formalities." },
    { num: "05", title: "Orientation", desc: "Introduction to academy rules, team members, uniforms, and standard practices." },
    { num: "06", title: "Begin Your Atithis Journey", desc: "Step onto campus as a professional trainee ready to grow." }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message
    };
    console.log("Submitting admission application:", payload);
    try {
      const response = await fetch("https://atithisacademy-backend.onrender.com/api/admissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Admission application submitted successfully:", data);
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: ""
        });
      } else {
        console.error("Admission application submission failed:", data);
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Admission application submission error:", err);
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
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

        {/* WHO SHOULD JOIN & DETAILS */}
        <section className="py-20 md:py-28 bg-white border-b border-[#e6e9ee] px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Who Should Join */}
              <div className="lg:col-span-7">
                <span className="text-accent text-[14px] tracking-[0.2em] font-semibold uppercase">ELIGIBILITY & PROFILE</span>
                <h2 className="font-serif font-bold text-[32px] sm:text-[42px] text-primary mt-2">WHO SHOULD JOIN?</h2>
                <div className="mt-4 inline-block bg-accent/10 border border-accent text-primary text-[13px] tracking-wider uppercase font-bold py-2 px-5 rounded-sm mb-6">
                  12th PASS / EQUIVALENT
                </div>
                
                <h3 className="font-serif text-[18px] font-bold text-primary mb-4">THIS PROGRAMME IS FOR YOU IF…</h3>
                <div className="flex flex-col gap-3">
                  {[
                    "You enjoy meeting and interacting with people",
                    "You want a fast-tracked professional career path",
                    "You prefer learning by doing rather than writing lengthy exams",
                    "You want to work in premium hotels, luxury resorts or villas",
                    "You want to develop core self-confidence and speech grooming",
                    "You are willing to work hard and practice physically on-campus",
                    "You want exposure to the real hospitality industry"
                  ].map((item, idx) => (
                    <div key={idx} className="text-[14px] text-text-muted flex gap-2">
                      <span className="text-accent font-bold">✓</span> {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[14px] text-text-muted italic border-l-2 border-accent pl-4 font-medium">
                  You don't need to know everything before you arrive. You just need the willingness to learn.
                </p>
              </div>

              {/* Program Details */}
              <div className="lg:col-span-5 bg-bg-light border border-[#e6e9ee] p-8 rounded-sm">
                <span className="text-accent text-[12px] tracking-[0.2em] font-semibold uppercase block mb-2">BATCH SPECS</span>
                <h3 className="font-serif font-bold text-[24px] text-primary mb-6">Programme Details</h3>
                
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Programme", val: "90-Day Immersive Hospitality Programme" },
                    { label: "Duration", val: "90 Training Days" },
                    { label: "Days", val: "Monday–Saturday" },
                    { label: "Batch 1", val: "9:00 AM–1:00 PM" },
                    { label: "Batch 2", val: "2:00 PM–6:00 PM" },
                    { label: "Students", val: "50 per batch" },
                    { label: "Learning", val: "80% Practical / 20% Theory" },
                    { label: "Mode", val: "On-campus / practical immersion" }
                  ].map((detail, idx) => (
                    <div key={idx} className="flex justify-between items-center gap-4 pb-3 border-b border-[#e6e9ee] last:border-0 last:pb-0">
                      <span className="text-[13px] font-bold text-text-muted uppercase">{detail.label}</span>
                      <span className="text-[13px] font-semibold text-primary text-right">{detail.val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ENROLMENT FLOW */}
        <section className="py-20 md:py-28 bg-bg-light border-b border-[#e6e9ee] px-5 sm:px-10" id="admissions-flow">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-[14px] tracking-[0.2em] font-semibold uppercase">ENROLMENT FLOW</span>
              <h2 className="font-serif font-bold text-[36px] sm:text-[48px] text-primary mt-2">YOUR JOURNEY STARTS HERE.</h2>
              <p className="text-text-muted mt-3 text-[17px] max-w-[600px] mx-auto">
                A simple, direct process to enter the academy.
              </p>
            </div>

            {/* Steps timeline layout */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
              {admissionsSteps.map((step, idx) => (
                <div key={idx} className="p-6 bg-white border border-[#e6e9ee] rounded-sm shadow-sm flex flex-col justify-between min-h-[200px]">
                  <div>
                    <span className="text-[28px] font-serif font-bold text-accent-light block leading-none mb-4">
                      {step.num}
                    </span>
                    <h3 className="font-serif text-[16px] font-bold text-primary mb-2">{step.title}</h3>
                  </div>
                  <p className="text-[12px] text-text-muted leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Spec sheets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#e6e9ee]">
              <div className="p-6 bg-white border border-[#e6e9ee] rounded-sm">
                <h4 className="font-serif font-bold text-[16px] text-primary mb-3 uppercase tracking-wider">Eligibility</h4>
                <p className="text-[13px] text-text-muted leading-relaxed font-light">
                  Completed class 12th/intermediate or equivalent. No prior hospitality background required. Minimum age 18.
                </p>
              </div>
              <div className="p-6 bg-white border border-[#e6e9ee] rounded-sm">
                <h4 className="font-serif font-bold text-[16px] text-primary mb-3 uppercase tracking-wider">Documents Required</h4>
                <p className="text-[13px] text-text-muted leading-relaxed font-light">
                  Copy of 10th and 12th marksheets, government identity proof (Aadhaar/Passport), passport size photographs.
                </p>
              </div>
              <div className="p-6 bg-white border border-[#e6e9ee] rounded-sm">
                <h4 className="font-serif font-bold text-[16px] text-primary mb-3 uppercase tracking-wider">Important Dates</h4>
                <p className="text-[13px] text-text-muted leading-relaxed font-light">
                  Batches commence every alternate month. Contact our admissions team for immediate batch registration dates.
                </p>
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
                  {error && <div className="text-red-500 text-sm font-semibold">{error}</div>}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">First Name</span>
                      <input
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Last Name</span>
                      <input
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Email</span>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Phone</span>
                    <input
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Why Atithis?</span>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark resize-y focus:border-accent focus:outline-none"
                    ></textarea>
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary !text-accent-light p-4 text-[13px] tracking-[0.14em] uppercase border-none cursor-pointer hover:bg-accent-light hover:!text-primary transition-all duration-300 mt-1.5 font-bold disabled:opacity-50"
                  >
                    {loading ? "Please wait while we submit..." : "Submit Application"}
                  </button>
                </form>

                {submitted && (
                  <div className="flex flex-col items-center justify-center mt-6 py-6 text-center bg-green-50/50 border border-green-200 rounded-sm">
                    <span className="font-serif text-[24px] text-accent italic font-semibold">Thank you!</span>
                    <p className="mt-1.5 text-[14px] text-text-muted font-light max-w-[340px]">
                      Your application inquiry has been received. Our admissions team will be in touch within two working days.
                    </p>
                  </div>
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
