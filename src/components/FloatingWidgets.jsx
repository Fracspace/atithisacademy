"use client";

import { useState, useEffect } from "react";

export default function FloatingWidgets() {
  const [showCard, setShowCard] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Application for Admission",
    message: "",
  });

  useEffect(() => {
    // Determine viewport width on client side
    const isMobile = window.innerWidth < 640;

    if (isMobile) {
      // Mobile flow: open the application modal directly after 50 seconds
      const isFormShown = sessionStorage.getItem("hospitality_form_auto_shown");
      if (!isFormShown) {
        const timer = setTimeout(() => {
          setShowModal(true);
          sessionStorage.setItem("hospitality_form_auto_shown", "true");
        }, 50000); // 50 seconds
        return () => clearTimeout(timer);
      }
    } else {
      // Desktop flow: show floating card after a short delay
      const isDismissed = sessionStorage.getItem("hospitality_card_dismissed");
      if (!isDismissed) {
        const timer = setTimeout(() => setShowCard(true), 1500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleDismissCard = () => {
    setShowCard(false);
    sessionStorage.setItem("hospitality_card_dismissed", "true");
  };

  const handleOpenModal = () => {
    setShowModal(true);
    sessionStorage.setItem("hospitality_form_auto_shown", "true");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSubmitted(false);
    sessionStorage.setItem("hospitality_form_auto_shown", "true");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Application for Admission",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    sessionStorage.setItem("hospitality_form_auto_shown", "true");
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes subtle-glow {
          0%, 100% { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 2px rgba(176, 137, 79, 0.2); }
          50% { box-shadow: 0 10px 20px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 16px rgba(176, 137, 79, 0.65); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 0.9; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-gentle-1 {
          animation: gentle-bounce 3s ease-in-out infinite;
        }
        .animate-bounce-gentle-2 {
          animation: gentle-bounce 3s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        .animate-bounce-gentle-3 {
          animation: gentle-bounce 3s ease-in-out infinite;
          animation-delay: 0.8s;
        }
        .animate-subtle-glow {
          animation: subtle-glow 2s infinite ease-in-out;
        }
        .animate-pulse-ring {
          animation: pulse-ring 2.2s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Floating Buttons & Card Container */}
      <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 pointer-events-none select-none">
        
        {/* Action Buttons */}
        <div className="pointer-events-auto flex flex-col gap-3">
          {/* Apply Now Floating Icon Button */}
          <button
            onClick={handleOpenModal}
            className="w-14 h-14 rounded-full bg-[#0F2747] border border-[#C9A96A]/40 hover:bg-[#B0894F] hover:text-white flex items-center justify-center text-[#C9A96A] shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer animate-bounce-gentle-1"
            aria-label="Open application form"
          >
            {/* Document/Edit SVG Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919247952344?text=Hi!%20I%20am%20interested%20in%20building%20a%20career%20in%20hospitality."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer animate-bounce-gentle-2"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.9 9.9 0 00-6.98-2.855c-5.443 0-9.866 4.37-9.87 9.8a9.7 9.7 0 001.558 5.22l-.93 3.396 3.486-.903zm10.741-6.721c-.266-.134-1.574-.775-1.817-.863-.243-.088-.419-.133-.596.134-.176.265-.685.862-.839 1.04-.155.176-.309.199-.575.066-1.53-.762-2.584-1.348-3.606-3.102-.269-.462.269-.43.769-1.43.083-.166.042-.31-.02-.442-.063-.133-.596-1.436-.817-1.966-.215-.518-.432-.448-.596-.456-.154-.008-.331-.01-.508-.01a.98.98 0 00-.707.331c-.243.265-.928.906-.928 2.21 0 1.303.951 2.562 1.084 2.739.133.177 1.87 2.854 4.53 4.001.632.273 1.127.436 1.512.559.635.202 1.212.174 1.669.107.509-.077 1.574-.641 1.795-1.26.221-.619.221-1.149.155-1.26-.067-.11-.243-.176-.51-.31z" />
            </svg>
          </a>

          {/* Phone Button */}
          <a
            href="tel:+919247952344"
            className="w-14 h-14 rounded-full bg-[#C9A96A] hover:bg-[#B0894F] flex items-center justify-center text-[#0F2747] hover:text-white shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer animate-bounce-gentle-3"
            aria-label="Call admissions office"
          >
            <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.502-5.127-3.805-6.63-6.63l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
        </div>

        {/* Floating Card */}
        {showCard && (
          <div className="pointer-events-auto select-text hidden sm:block w-[380px] bg-[#FBFAF8] text-[#1E2A3A] p-6 rounded-2xl shadow-2xl relative mt-1.5 animate-fade-in border-t-4 border-t-[#C9A96A] border-x border-b border-[#C9A96A]/20 transition-all duration-300 hover:-translate-y-1">
            {/* Close Button */}
            <button
              onClick={handleDismissCard}
              className="absolute top-4 right-4 text-[#0F2747]/40 hover:text-[#0F2747] transition-colors cursor-pointer"
              aria-label="Dismiss card"
            >
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex gap-4 items-start pr-4">
              {/* Pulsing Gold Circular Icon Container */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#C9A96A] animate-pulse-ring"></div>
                <div className="w-12 h-12 rounded-full bg-[#C9A96A] text-[#0F2747] flex items-center justify-center relative z-10 shadow-md">
                  {/* Concierge/Bell SVG Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a1 1 0 0 1 1 1v1.07A8.01 8.01 0 0 1 20 12H4a8.01 8.01 0 0 1 7-7.93V3a1 1 0 0 1 1-1zm8 11v1H4v-1h16zm1.7 3a1 1 0 0 1-.7 1.7H3a1 1 0 0 1-.7-1.7l1-1h17.4l1 1z" />
                  </svg>
                </div>
              </div>

              {/* Text Info */}
              <div>
                {/* Admissions Badge */}
                <span className="inline-block bg-[#B0894F]/10 text-[#B0894F] text-[9px] font-bold tracking-[0.2em] px-2.5 py-1 rounded-full uppercase mb-2">
                  Admissions Open
                </span>
                
                <h4 className="font-serif font-bold text-[19px] text-[#0F2747] leading-tight mb-2">
                  Build a Career in Hospitality
                </h4>
                <p className="text-[13px] leading-relaxed text-[#3A4759]/90 font-light mb-5">
                  Join Atithis Institute of Hospitality and develop the skills, discipline, and experience to build a career in boutique and luxury hospitality.
                </p>
                <button
                  onClick={handleOpenModal}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#C9A96A] to-[#B0894F] text-[#0F2747] hover:from-[#B0894F] hover:to-[#C9A96A] hover:text-white hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-accent/20 animate-subtle-glow"
                >
                  Apply Now &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-4 bg-transparent sm:bg-[#0F2747]/60 backdrop-blur-none sm:backdrop-blur-md pointer-events-none sm:pointer-events-auto animate-fade-in">
          {/* Modal content container */}
          <div className="relative bg-[#FBFAF8] text-[#1E2A3A] w-full max-w-[520px] rounded-3xl shadow-2xl border border-[#C9A96A]/20 overflow-y-auto max-h-[85vh] sm:max-h-[90vh] animate-slide-up pointer-events-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-[#0F2747]/40 hover:text-[#0F2747] hover:bg-[#0F2747]/5 w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer z-10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Form Area */}
            <div className="p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#B0894F]/10 border border-[#B0894F]/30 flex items-center justify-center text-[#B0894F] mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-serif text-[36px] text-[#0F2747] italic font-semibold leading-tight">Thank you</span>
                  <p className="mt-4 text-[14px] text-[#3A4759] font-light max-w-[320px] leading-relaxed">
                    Your application has been received. Our admissions team will contact you within two working days.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="mt-8 bg-[#0F2747] !text-[#C9A96A] hover:bg-[#B0894F] hover:!text-white transition-all duration-300 px-8 py-3.5 rounded-xl text-xs font-bold tracking-[0.15em] uppercase cursor-pointer shadow-lg"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-serif text-3xl font-bold text-[#0F2747] tracking-wide">
                      Admission Application
                    </h3>
                    <p className="text-xs text-[#3A4759]/60 font-light tracking-wider uppercase mt-1.5">
                      Atithis Institute of Hospitality Admissions
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[10px] tracking-[0.2em] text-[#B0894F] uppercase font-semibold">Full Name</span>
                      <input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="p-[14px_16px] bg-white border border-[#dfe3e9] focus:border-[#B0894F] rounded-xl font-sans text-sm text-[#1E2A3A] placeholder-[#1E2A3A]/30 focus:outline-none focus:ring-1 focus:ring-[#B0894F]/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-[10px] tracking-[0.2em] text-[#B0894F] uppercase font-semibold">Email Address</span>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="p-[14px_16px] bg-white border border-[#dfe3e9] focus:border-[#B0894F] rounded-xl font-sans text-sm text-[#1E2A3A] placeholder-[#1E2A3A]/30 focus:outline-none focus:ring-1 focus:ring-[#B0894F]/20 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-[10px] tracking-[0.2em] text-[#B0894F] uppercase font-semibold">Phone Number</span>
                        <input
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="p-[14px_16px] bg-white border border-[#dfe3e9] focus:border-[#B0894F] rounded-xl font-sans text-sm text-[#1E2A3A] placeholder-[#1E2A3A]/30 focus:outline-none focus:ring-1 focus:ring-[#B0894F]/20 transition-all duration-300"
                          placeholder="9876543210"
                        />
                      </label>
                    </div>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-[10px] tracking-[0.2em] text-[#B0894F] uppercase font-semibold">Subject</span>
                      <input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="p-[14px_16px] bg-white border border-[#dfe3e9] focus:border-[#B0894F] rounded-xl font-sans text-sm text-[#1E2A3A] placeholder-[#1E2A3A]/30 focus:outline-none focus:ring-1 focus:ring-[#B0894F]/20 transition-all duration-300"
                      />
                    </label>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-[10px] tracking-[0.2em] text-[#B0894F] uppercase font-semibold">Message / Notes</span>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="p-[14px_16px] bg-white border border-[#dfe3e9] focus:border-[#B0894F] rounded-xl font-sans text-sm text-[#1E2A3A] placeholder-[#1E2A3A]/30 resize-none focus:outline-none focus:ring-1 focus:ring-[#B0894F]/20 transition-all duration-300"
                        placeholder="Tell us about your background or queries..."
                      ></textarea>
                    </label>

                    <button
                      type="submit"
                      className="bg-[#0F2747] !text-[#C9A96A] hover:bg-[#B0894F] hover:!text-white transition-all duration-300 py-4.5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-accent/15 cursor-pointer mt-2"
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
