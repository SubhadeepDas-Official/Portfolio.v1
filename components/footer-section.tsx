"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "@/data/portfolio";

export default function FooterSection() {
  const sealRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Continuous slow linear rotation of circular seal
    if (sealRef.current) {
      gsap.to(sealRef.current, {
        rotation: 360,
        duration: 45,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });
    }
  }, []);

  return (
    <footer
      id="contact"
      className="w-full bg-ink text-paper border-x border-b border-ink relative overflow-hidden selection:bg-orange selection:text-white"
    >
      <div className="flex flex-col lg:flex-row w-full">
        {/* ========================================================================= */}
        {/* LEFT EDGE: Vertical Small Copy with Thin Vertical Rule */}
        {/* ========================================================================= */}
        <div className="w-full lg:w-16 xl:w-20 border-b lg:border-b-0 lg:border-r border-zinc-800 p-4 lg:py-8 flex lg:flex-col items-center justify-between font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase text-zinc-400 select-none">
          <div className="hidden lg:flex lg:writing-vertical tracking-widest whitespace-nowrap">
            LET&apos;S BUILD SOMETHING BOLD.
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <span className="w-2 h-2 bg-orange" />
            <span>LET&apos;S BUILD SOMETHING BOLD.</span>
          </div>
          <span className="w-2 h-2 bg-orange hidden lg:block" />
        </div>

        {/* ========================================================================= */}
        {/* MAIN BODY: Grid of Huge CTA + Contact Column + Circular Seal & Barcode */}
        {/* ========================================================================= */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 divide-zinc-800">
          {/* Main CTA Column (col-span-6 or 7) */}
          <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col justify-between lg:border-r border-zinc-800">
            <div>
              {/* Massive Orange Headline */}
              <h2 className="font-poster text-[13vw] sm:text-[10vw] lg:text-[5.4rem] xl:text-[6.2rem] leading-[0.84] tracking-tightest text-orange uppercase select-none">
                READY TO <br />
                ELEVATE YOUR <br />
                DIGITAL PRESENCE?
              </h2>

              {/* Handdrawn / Brush Underline Graphic */}
              <div className="w-48 sm:w-64 h-2 mt-3 text-paper/80">
                <svg
                  viewBox="0 0 250 12"
                  fill="none"
                  className="w-full h-full text-paper opacity-70"
                >
                  <path
                    d="M2 6C50 3 150 9 248 5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Supporting Copy */}
              <p className="mt-8 font-mono text-xs md:text-sm font-semibold tracking-wider text-zinc-300 uppercase max-w-md leading-relaxed">
                {profile.contact.subheading}
              </p>
            </div>

            {/* Micro Copyright */}
            <div className="mt-12 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              © {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Contact Details Column (col-span-3) */}
          <div className="lg:col-span-3 p-6 md:p-10 flex flex-col justify-between lg:border-r border-zinc-800">
            <div>
              <h3 className="font-mono font-bold text-xs tracking-widest text-zinc-400 uppercase mb-6 flex items-center gap-2">
                <span>CONTACT</span>
                <span className="w-4 h-[1px] bg-zinc-700 inline-block" />
              </h3>

              {/* Links List with Circular Icons */}
              <ul className="space-y-4 font-mono text-xs tracking-wider">
                <li>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="flex items-center gap-3 text-zinc-300 hover:text-orange transition-colors group"
                  >
                    <span className="w-6 h-6 rounded-full border border-zinc-600 group-hover:border-orange flex items-center justify-center text-[10px] shrink-0 transition-colors">
                      ✉
                    </span>
                    <span className="truncate">{profile.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-zinc-300 hover:text-orange transition-colors group"
                  >
                    <span className="w-6 h-6 rounded-full border border-zinc-600 group-hover:border-orange flex items-center justify-center text-[10px] shrink-0 transition-colors">
                      📞
                    </span>
                    <span>{profile.contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://${profile.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-300 hover:text-orange transition-colors group"
                  >
                    <span className="w-6 h-6 rounded-full border border-zinc-600 group-hover:border-orange flex items-center justify-center text-[10px] shrink-0 transition-colors">
                      🌐
                    </span>
                    <span>{profile.contact.website}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://${profile.contact.dribbble}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-300 hover:text-orange transition-colors group"
                  >
                    <span className="w-6 h-6 rounded-full border border-zinc-600 group-hover:border-orange flex items-center justify-center text-[10px] shrink-0 transition-colors">
                      🏀
                    </span>
                    <span>{profile.contact.dribbble}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://${profile.contact.behance}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-300 hover:text-orange transition-colors group"
                  >
                    <span className="w-6 h-6 rounded-full border border-zinc-600 group-hover:border-orange flex items-center justify-center text-[10px] shrink-0 transition-colors">
                      Bē
                    </span>
                    <span>{profile.contact.behance}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              LOCAL TIME: UTC-4
            </div>
          </div>

          {/* Right Column: Rotating Circular Stamp Seal + Barcode (col-span-2) */}
          <div className="lg:col-span-2 p-6 md:p-8 flex flex-col items-center justify-between gap-8 bg-zinc-950/60">
            {/* ROTATING CIRCULAR STAMP SEAL */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center select-none">
              {/* Spinning Text SVG */}
              <svg
                ref={sealRef}
                viewBox="0 0 200 200"
                className="w-full h-full text-zinc-300"
              >
                <path
                  id="sealCirclePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
                />
                <text className="text-[10.5px] font-mono uppercase tracking-[0.24em] fill-current">
                  <textPath href="#sealCirclePath" startOffset="0%">
                    {profile.contact.sealText}
                  </textPath>
                </text>
                {/* Outer and Inner Circle Rings */}
                <circle
                  cx="100"
                  cy="100"
                  r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="62"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>

              {/* Center Monogram Logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-poster text-4xl md:text-5xl text-orange">
                  {profile.contact.initials}
                </span>
              </div>
            </div>

            {/* VECTOR DECORATIVE BARCODE */}
            <div className="w-full max-w-[170px] flex flex-col items-center">
              <svg
                viewBox="0 0 180 40"
                fill="currentColor"
                className="w-full text-zinc-300 h-9"
              >
                {/* Procedural Barcode Lines */}
                <rect x="0" y="0" width="3" height="34" />
                <rect x="5" y="0" width="1" height="34" />
                <rect x="8" y="0" width="4" height="34" />
                <rect x="15" y="0" width="2" height="34" />
                <rect x="19" y="0" width="1" height="34" />
                <rect x="22" y="0" width="5" height="34" />
                <rect x="30" y="0" width="2" height="34" />
                <rect x="34" y="0" width="1" height="34" />
                <rect x="37" y="0" width="4" height="34" />
                <rect x="44" y="0" width="2" height="34" />
                <rect x="48" y="0" width="3" height="34" />
                <rect x="54" y="0" width="1" height="34" />
                <rect x="57" y="0" width="4" height="34" />
                <rect x="64" y="0" width="3" height="34" />
                <rect x="70" y="0" width="1" height="34" />
                <rect x="73" y="0" width="5" height="34" />
                <rect x="81" y="0" width="2" height="34" />
                <rect x="85" y="0" width="4" height="34" />
                <rect x="92" y="0" width="1" height="34" />
                <rect x="95" y="0" width="3" height="34" />
                <rect x="101" y="0" width="2" height="34" />
                <rect x="105" y="0" width="5" height="34" />
                <rect x="113" y="0" width="1" height="34" />
                <rect x="116" y="0" width="3" height="34" />
                <rect x="122" y="0" width="4" height="34" />
                <rect x="129" y="0" width="2" height="34" />
                <rect x="133" y="0" width="1" height="34" />
                <rect x="136" y="0" width="5" height="34" />
                <rect x="144" y="0" width="2" height="34" />
                <rect x="148" y="0" width="3" height="34" />
                <rect x="154" y="0" width="4" height="34" />
                <rect x="161" y="0" width="1" height="34" />
                <rect x="164" y="0" width="3" height="34" />
                <rect x="170" y="0" width="2" height="34" />
                <rect x="175" y="0" width="4" height="34" />
              </svg>
              <div className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 uppercase mt-1">
                MN-2025-ARCHIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
