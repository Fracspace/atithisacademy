"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
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
              <span className="text-[12px] tracking-[0.32em] text-accent-light uppercase">Legal</span>
              <span className="w-11 h-[1px] bg-accent"></span>
            </div>
            <h1 className="font-serif font-semibold text-[42px] sm:text-[64px] leading-[1.05] text-white">
              Terms &amp; Conditions
            </h1>
            <p className="max-w-[600px] mx-auto mt-7 text-[18px] leading-relaxed text-white/78 font-light">
              Last updated: August 12, 2026
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24 bg-bg-light px-5 sm:px-10">
          <div className="max-w-[800px] mx-auto bg-white border border-[#e6e9ee] p-8 sm:p-16">
            <div className="prose prose-slate max-w-none text-text-muted font-light leading-relaxed">
              <p className="mb-6">
                Welcome to Atithis Institute of Hospitality ("Atithis", "we", "us", or "our"). These Terms &amp; Conditions govern your use of our website located at atithis.in and any associated services, contents, or applications.
              </p>
              <p className="mb-6">
                By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our website.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">1. Intellectual Property Rights</h2>
              <p className="mb-6">
                Unless otherwise stated, Atithis and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this from the website for your own personal use subjected to restrictions set in these terms and conditions.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">2. Restrictions on Use</h2>
              <p className="mb-4">
                You are specifically restricted from all of the following:
              </p>
              <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
                <li>Publishing any website material in any other media without prior consent.</li>
                <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
                <li>Using this website in any way that is or may be damaging to this website.</li>
                <li>Using this website in any way that impacts user access to this website.</li>
                <li>Using this website contrary to applicable laws and regulations.</li>
              </ul>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">3. User Content</h2>
              <p className="mb-6">
                In these terms and conditions, "User Content" shall mean any audio, video text, images, or other material you choose to display or submit on this website. By displaying/submitting it, you grant Atithis a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">4. No Warranties</h2>
              <p className="mb-6">
                This website is provided "as is," with all faults, and Atithis expresses no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">5. Limitation of Liability</h2>
              <p className="mb-6">
                In no event shall Atithis, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Atithis, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">6. Severability</h2>
              <p className="mb-6">
                If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">7. Variation of Terms</h2>
              <p className="mb-6">
                Atithis is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">8. Governing Law &amp; Jurisdiction</h2>
              <p className="mb-6">
                These terms will be governed by and interpreted in accordance with the laws of the State of Telangana, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Hyderabad for the resolution of any disputes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
