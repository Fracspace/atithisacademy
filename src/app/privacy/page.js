"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                At Atithis Institute of Hospitality ("Atithis", "we", "us", or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website, and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
                <li>Personal information by which you may be personally identified, such as name, postal address, e-mail address, or telephone number.</li>
                <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
              </ul>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it, including processing admissions applications.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              </ul>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">3. Disclosure of Your Information</h2>
              <p className="mb-6">
                We do not sell, share, or otherwise disclose your personal information to third parties for commercial purposes. We may disclose personal information that we collect or you provide as described in this privacy policy to contractors, service providers, and other third parties we use to support our institute.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">4. Data Security</h2>
              <p className="mb-6">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">5. Changes to Our Privacy Policy</h2>
              <p className="mb-6">
                It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page.
              </p>

              <h2 className="font-serif text-[24px] text-primary font-bold mt-10 mb-4">6. Contact Information</h2>
              <p className="mb-6">
                To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:admissions@atithis.in" className="text-accent underline font-medium hover:text-accent-light">admissions@atithis.in</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
