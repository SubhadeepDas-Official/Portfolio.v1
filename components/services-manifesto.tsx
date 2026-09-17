"use client";

import { useState } from "react";
import { services, manifesto, techStack } from "@/data/portfolio";

export default function ServicesManifesto() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleService = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="services"
      className="w-full bg-paper border-x border-b border-ink overflow-hidden selection:bg-orange selection:text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-ink">
        {/* ========================================================================= */}
        {/* COLUMN 1: SERVICES (Approx 36% / 4.3 cols or col-span-4 or 5) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 bg-paper p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="font-poster text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase text-ink">
                SERVICES
              </h2>
              <span className="w-8 h-[2px] bg-ink inline-block mt-2" />
            </div>

            {/* Services List Rows */}
            <div className="divide-y divide-ink/40 border-y border-ink">
              {services.map((service, idx) => {
                const isOpen = expandedIndex === idx;
                return (
                  <div
                    key={service.number}
                    className="group transition-colors duration-150 cursor-pointer"
                    onClick={() => toggleService(idx)}
                  >
                    <div className="flex items-center justify-between py-3.5 px-1 hover:bg-ink/5">
                      <div className="flex items-center gap-4 font-mono text-xs md:text-sm">
                        <span className="font-bold text-gray-500 group-hover:text-orange transition-colors">
                          {service.number}
                        </span>
                        <span className="font-bold tracking-wider uppercase text-ink group-hover:text-orange transition-colors">
                          {service.title}
                        </span>
                      </div>

                      {/* + Icon that rotates to x */}
                      <span
                        className={`text-base font-bold font-mono text-ink transition-transform duration-200 select-none ${
                          isOpen ? "rotate-45 text-orange" : "group-hover:rotate-90"
                        }`}
                      >
                        +
                      </span>
                    </div>

                    {/* Expandable Accordion Drawer */}
                    {isOpen && (
                      <div className="px-2 pb-4 pt-1 font-mono text-xs text-ink/85 animate-in slide-in-from-top-2 duration-150">
                        <p className="mb-2 leading-relaxed text-zinc-800">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-1 gap-1 text-[11px] text-zinc-600 pl-3 border-l-2 border-orange">
                          {service.deliverables.map((item) => (
                            <div key={item}>• {item}</div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            // RIGOROUS EXECUTION • TRANSPARENT TIMELINES
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 2: DESIGN MANIFESTO (Approx 32% / col-span-4) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 bg-orange text-ink p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <h2 className="font-poster text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase text-ink leading-[0.88]">
                DESIGN <br /> MANIFESTO
              </h2>
              <span className="w-8 h-[2px] bg-ink inline-block" />
            </div>

            {/* Manifesto Stanzas */}
            <div className="space-y-6 font-mono text-xs md:text-sm font-bold tracking-wider leading-relaxed text-ink uppercase">
              {manifesto.stanzas.map((stanza, idx) => (
                <p key={idx} className="leading-snug">
                  {stanza}
                </p>
              ))}
            </div>
          </div>

          {/* Bottom Statement & Corner Triangle */}
          <div className="relative z-10 pt-10 mt-auto">
            <div className="font-mono text-xs font-extrabold tracking-widest text-ink uppercase whitespace-pre-line">
              {manifesto.punchline}
            </div>
          </div>

          {/* Large Black Diagonal Corner Triangle */}
          <div
            className="absolute bottom-0 right-0 w-36 h-28 bg-ink clip-corner-triangle pointer-events-none z-0"
            aria-hidden="true"
          />
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 3: TECH STACK (Approx 32% / col-span-3) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-3 bg-paper p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="font-poster text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase text-ink">
                TECH STACK
              </h2>
              <span className="w-8 h-[2px] bg-ink inline-block mt-2" />
            </div>

            {/* Tech List with Square Pips */}
            <div className="space-y-3 font-mono text-xs md:text-sm">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-between border-b border-ink/20 pb-1.5 hover:text-orange transition-colors group cursor-default"
                >
                  <span className="font-bold tracking-widest uppercase text-ink group-hover:text-orange">
                    {tech.name}
                  </span>
                  {/* Black Square Marker */}
                  <span className="w-2 h-2 bg-ink group-hover:bg-orange transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            // MODERN APPARATUS • ZERO UNNECESSARY BLOAT
          </div>
        </div>
      </div>
    </section>
  );
}
