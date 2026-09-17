"use client";

import Link from "next/link";
import { profile } from "@/data/portfolio";

export default function HeaderNav() {
  const navItems = [
    { label: "WORK", href: "#work", index: "01" },
    { label: "FEATURED", href: "#featured", index: "02" },
    { label: "ABOUT", href: "#about", index: "03" },
    { label: "SERVICES", href: "#services", index: "04" },
    { label: "CONTACT", href: "#contact", index: "05" },
  ];

  return (
    <header className="w-full border-b border-ink bg-paper sticky top-0 z-50 px-4 md:px-8 py-2.5 flex items-center justify-between text-xs tracking-wider font-mono">
      {/* Brand Identity / Status */}
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 bg-orange inline-block animate-pulse" />
        <span className="font-bold text-ink uppercase tracking-widest hidden sm:inline">
          {profile.name}
        </span>
        <span className="text-gray-500 hidden md:inline">// ARCHIVE & DIRECTORY</span>
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-4 md:gap-8 font-medium">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex items-center gap-1 text-ink/80 hover:text-orange transition-colors"
          >
            <span className="text-[10px] text-orange opacity-60 group-hover:opacity-100">
              {item.index}/
            </span>
            <span className="uppercase font-semibold">{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
