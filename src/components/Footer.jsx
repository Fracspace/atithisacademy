import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0B1D36] text-white py-10 px-5 sm:px-10 mt-auto">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/12">
          <div>
            <div className="mb-2">
              <Image src={logoImg} alt="ATITHIS logo" className="h-25 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="mt-[2px] text-[14px] leading-[1.8] text-white font-light max-w-[280px]">
              Developing the future stewards of boutique hotels, wellness resorts and holiday-home communities — the Atithis Way.
            </p>
          </div>
          <div>
            <h4 className="text-[12px] tracking-[.2em] text-accent-light uppercase mb-5 font-semibold">Explore</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-[14px] !text-white hover:!text-accent transition-colors">Home</Link>
              <Link href="/about" className="text-[14px] !text-white hover:!text-accent transition-colors">About Us</Link>
              <Link href="/program" className="text-[14px] !text-white hover:!text-accent transition-colors">Program</Link>
              <Link href="/curriculum" className="text-[14px] !text-white hover:!text-accent transition-colors">Curriculum</Link>
            </div>
          </div>
          <div>
            <h4 className="text-[12px] tracking-[.2em] text-accent-light uppercase mb-5 font-semibold">Institute</h4>
            <div className="flex flex-col gap-3">
              <Link href="/admissions" className="text-[14px] !text-white hover:!text-accent transition-colors">Admissions</Link>
              <Link href="/contact" className="text-[14px] !text-white hover:!text-accent transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-[12px] tracking-[.2em] text-accent-light uppercase mb-5 font-semibold">Newsletter</h4>
            <p className="text-[14px] text-white font-light leading-[1.7] mb-4">
              Admissions dates and hospitality insights, occasionally.
            </p>
            <div className="flex border border-white/20">
              <input
                placeholder="Your email"
                className="flex-1 bg-transparent border-none py-[13px] px-[14px] text-white font-sans text-[14px] focus:outline-none placeholder:text-white/60"
              />
              <button className="bg-accent text-white border-none px-5 text-[12px] tracking-[.1em] uppercase cursor-pointer hover:bg-accent-light transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-7">
          <span className="text-[13px] text-white text-center sm:text-left">
            © 2026 Atithis Institute of Hospitality. All rights reserved.
          </span>
          <div className="flex gap-[26px]">
            <Link href="/privacy" className="text-[13px] !text-white hover:!text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[13px] !text-white hover:!text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
