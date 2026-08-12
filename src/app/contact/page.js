"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const contacts = [
    { icon: "✉", label: "Email", value: "admissions@atithis.academy" },
    { icon: "☏", label: "Phone", value: "9247952344" },
    { icon: "⌂", label: "Campus", value: "Road No 12, Banjara Hills, Hyderabad" },
  ];

  const hours = [
    { day: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  const socials = ["IN", "FB", "IG", "LI"];

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
              <span className="text-[12px] tracking-[0.32em] text-accent-light uppercase">Get in Touch</span>
              <span className="w-11 h-[1px] bg-accent"></span>
            </div>
            <h1 className="font-serif font-semibold text-[42px] sm:text-[76px] leading-[1.05] text-white">
              We would love to hear from you
            </h1>
            <p className="max-w-[600px] mx-auto mt-7 text-[18px] leading-relaxed text-white/78 font-light">
              Questions about admissions or campus visits — our team is here to help.
            </p>
          </div>
        </section>

        {/* CONTACT INFO + FORM */}
        <section className="py-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[64px] items-start">
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <span className="w-10 h-[1px] bg-accent"></span>
                <span className="text-[12px] tracking-[0.3em] text-accent uppercase font-medium">Contact Information</span>
              </div>
              <div className="flex flex-col">
                {contacts.map((c, idx) => (
                  <div key={idx} className="flex gap-5.5 items-start py-6 border-b border-[#eef1f4]">
                    <div className="w-11 h-11 border border-[#dfe3e9] flex items-center justify-center text-accent text-[18px] flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-[12px] tracking-[0.14em] text-[#8894a5] uppercase font-semibold">{c.label}</div>
                      <div className="text-[17px] text-primary mt-1.5 leading-normal font-medium">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8.5">
                <div className="text-[12px] tracking-[0.14em] text-[#8894a5] uppercase mb-3.5 font-semibold">Office Hours</div>
                <div className="flex flex-col gap-2">
                  {hours.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between text-[15px] text-text-muted border-b border-dashed border-[#e2e6ec] pb-2 font-medium"
                    >
                      <span>{h.day}</span>
                      <span className="text-primary">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8.5 flex gap-3">
                {socials.map((s, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-11 h-11 border border-[#dfe3e9] flex items-center justify-center text-primary text-[12px] tracking-[0.04em] transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary font-semibold"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#e6e9ee] p-6 sm:p-13">
              <h2 className="font-serif text-[32px] text-primary font-bold">Send us a message</h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <span className="font-serif text-[38px] text-accent italic font-medium">Thank you</span>
                  <p className="mt-3.5 text-[16px] text-text-muted font-light max-w-[320px]">
                    Your message has been received. We will respond within two working days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4.5 mt-6.5">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Full Name</span>
                    <input
                      required
                      className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none"
                    />
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
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
                  </div>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Subject</span>
                    <input className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark focus:border-accent focus:outline-none" />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12px] tracking-[0.1em] text-[#7A8798] uppercase font-semibold">Message</span>
                    <textarea
                      rows={4}
                      className="p-[13px_14px] border border-[#dfe3e9] font-sans text-[15px] text-text-dark resize-y focus:border-accent focus:outline-none"
                    ></textarea>
                  </label>
                  <button
                    type="submit"
                    className="bg-primary !text-accent-light p-4 text-[13px] tracking-[0.14em] uppercase border-none cursor-pointer hover:bg-accent-light hover:!text-primary transition-all duration-300 font-bold"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
