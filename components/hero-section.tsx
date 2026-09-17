"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "@/data/portfolio";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const orangeShapeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Micro-entrance animation
      gsap.from(headlineRef.current?.children || [], {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(orangeShapeRef.current, {
        scaleX: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(portraitRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(aboutRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="about"
      className="relative w-full bg-paper border-x border-b border-ink overflow-hidden selection:bg-orange selection:text-white"
    >
      {/* Top Micro-Information Row */}
      <div className="w-full border-b border-ink px-4 md:px-8 py-3 grid grid-cols-2 md:grid-cols-3 gap-4 text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase text-ink">
        {/* Left: Role Indicator */}
        <div className="flex items-start gap-2">
          <span className="w-2.5 h-2.5 bg-orange mt-0.5 shrink-0" />
          <div className="leading-tight">
            <div>{profile.role}</div>
            <div className="text-gray-600">{profile.subRole}</div>
          </div>
        </div>

        {/* Center: Location */}
        <div className="text-left md:text-center leading-tight">
          <div className="text-gray-500 font-medium">BASED IN</div>
          <div>{profile.location}</div>
        </div>

        {/* Right: Availability */}
        <div className="col-span-2 md:col-span-1 flex items-start md:justify-end gap-2">
          <span className="w-2.5 h-2.5 bg-orange mt-0.5 shrink-0 md:hidden" />
          <div className="leading-tight text-left md:text-right">
            <div className="text-gray-500 font-medium">AVAILABLE FOR</div>
            <div>NEW PROJECTS</div>
          </div>
          <span className="w-2.5 h-2.5 bg-orange mt-0.5 shrink-0 hidden md:inline-block" />
        </div>
      </div>

      {/* Main Hero Grid */}
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">
        {/* LEFT COLUMN: Monumental Typography & About block (approx 55%) */}
        <div className="lg:col-span-7 flex flex-col justify-between p-4 md:p-8 lg:pr-4 lg:border-r border-ink relative z-10">
          {/* Giant Headline */}
          <div ref={headlineRef} className="pt-2 md:pt-4 select-none">
            <h1 className="font-poster text-[21vw] sm:text-[18vw] lg:text-[10.8rem] xl:text-[12.2rem] leading-[0.80] tracking-tightest uppercase text-ink">
              <span className="block drop-shadow-sm ink-distress">
                {profile.heroHeadline.line1}
              </span>
              <span className="block drop-shadow-sm ink-distress">
                {profile.heroHeadline.line2}
              </span>
              <span className="block text-orange flex items-baseline">
                {profile.heroHeadline.accent.replace(".", "")}
                <span className="inline-block w-[0.14em] h-[0.14em] bg-ink ml-[0.05em] align-baseline shrink-0" />
              </span>
            </h1>
          </div>

          {/* Lower About Me Section */}
          <div
            ref={aboutRef}
            className="mt-12 lg:mt-16 max-w-xl font-mono text-ink text-xs md:text-sm tracking-wide"
          >
            <div className="font-bold text-sm md:text-base tracking-wider uppercase mb-3 flex items-center gap-2">
              <span>ABOUT ME</span>
              <span className="w-6 h-[1.5px] bg-ink inline-block" />
            </div>

            <p className="font-medium leading-relaxed text-ink/90 text-sm md:text-base mb-4">
              {profile.about.lead}
            </p>

            <div className="text-xs md:text-sm text-gray-700 font-medium leading-normal mb-6 whitespace-pre-line">
              {profile.about.secondary}
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-ink/70 mb-5" />

            {/* Worldwide availability badge with wireframe globe */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 shrink-0 border border-ink rounded-full flex items-center justify-center p-1.5 relative">
                {/* SVG Wireframe Globe */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="w-full h-full text-ink"
                >
                  <circle cx="12" cy="12" r="10" />
                  <ellipse cx="12" cy="12" rx="4" ry="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              </div>
              <div className="text-[10px] md:text-xs font-mono font-semibold tracking-wider uppercase leading-tight text-ink/80">
                {profile.about.note}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Editorial Portrait + Geometric Orange Shapes */}
        <div className="lg:col-span-5 relative flex items-end justify-center min-h-[520px] lg:min-h-full overflow-hidden bg-paper">
          {/* Target / Crosshair Graphic (Upper Right) */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 w-14 h-14 md:w-16 md:h-16 pointer-events-none z-20">
            <svg
              viewBox="0 0 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-full h-full text-ink/80"
            >
              <circle cx="30" cy="30" r="22" />
              <circle cx="30" cy="30" r="13" />
              <circle cx="30" cy="30" r="3" fill="#121111" />
              <line x1="30" y1="0" x2="30" y2="60" strokeDasharray="2 2" />
              <line x1="0" y1="30" x2="60" y2="30" strokeDasharray="2 2" />
            </svg>
          </div>

          {/* Stepped Orange Geometric Backdrop Shape */}
          <div
            ref={orangeShapeRef}
            className="absolute top-12 right-0 w-[86%] sm:w-[75%] lg:w-[92%] h-[80%] z-0"
          >
            {/* Top orange stepped block */}
            <div className="absolute top-0 right-0 w-full h-[58%] bg-orange clip-notch-geometry shadow-sm opacity-95" />
            {/* Lower orange offset step */}
            <div className="absolute bottom-4 right-0 w-[90%] h-[48%] bg-orange opacity-95" />
          </div>

          {/* High Contrast Monochrome Portrait */}
          <div
            ref={portraitRef}
            className="relative z-10 w-[82%] sm:w-[70%] lg:w-[88%] xl:w-[84%] h-[92%] max-h-[760px] flex items-end justify-center"
          >
            <div className="relative w-full h-full contrast-[1.18] brightness-95">
              <Image
                src="/images/hero-portrait.png"
                alt={profile.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 38vw"
              />
            </div>

            {/* PERSON INFO CARD: Black Rectangle overlay */}
            <div className="absolute bottom-12 right-[-8px] md:bottom-20 md:right-[-12px] z-30 bg-ink text-white p-3 md:p-4 border border-paper shadow-2xl font-mono tracking-wider min-w-[170px] md:min-w-[200px]">
              <div className="font-bold text-xs md:text-sm leading-tight uppercase tracking-widest text-paper">
                {profile.personBadge.name}
              </div>
              <div className="text-[10px] md:text-xs text-orange font-bold mt-1 tracking-widest uppercase">
                {profile.personBadge.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
