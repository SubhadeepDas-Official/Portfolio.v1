"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink/80 backdrop-blur-sm p-3 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] bg-paper text-ink border-2 border-ink shadow-2xl flex flex-col overflow-y-auto"
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 bg-paper border-b border-ink px-4 md:px-8 py-3 flex items-center justify-between z-30 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-orange" />
            <span className="font-bold text-orange">{project.number}</span>
            <span className="font-bold uppercase tracking-wider text-ink">{project.category}</span>
            <span className="text-gray-500">// {project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            className="group flex items-center gap-1.5 px-2.5 py-1 border border-ink hover:bg-orange hover:text-white transition-colors font-bold uppercase tracking-wider"
          >
            <span>CLOSE</span>
            <span className="font-mono text-base leading-none">×</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 md:p-8 space-y-8">
          {/* Project Title */}
          <div>
            <h2 className="font-poster text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tightest uppercase text-ink">
              {project.title}
            </h2>
            <p className="mt-3 font-mono text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-600">
              {project.category} • ARCHIVE {project.year}
            </p>
          </div>

          {/* Hero Media */}
          <div className="relative w-full aspect-[16/9] border border-ink bg-zinc-950 overflow-hidden">
            <Image
              src={project.heroImage || project.thumbnail}
              alt={project.title}
              fill
              className="object-cover contrast-110"
              sizes="(max-width: 1024px) 95vw, 1000px"
              priority
            />
          </div>

          {/* Details & Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-ink pt-6">
            {/* Overview / Narrative (col-span-8) */}
            <div className="md:col-span-8 font-mono space-y-4">
              <h3 className="font-bold text-sm tracking-wider uppercase text-ink flex items-center gap-2">
                <span>PROJECT SYNOPSIS</span>
                <span className="w-6 h-[1.5px] bg-ink inline-block" />
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-ink/90 font-medium">
                {project.longDescription || project.description}
              </p>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-ink/30">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="p-3 border border-ink/30 bg-paper">
                      <div className="font-poster text-xl md:text-2xl text-orange">
                        {metric.value}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-gray-600 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Stack & Links (col-span-4) */}
            <div className="md:col-span-4 font-mono space-y-6">
              {/* Technologies */}
              <div>
                <h4 className="font-bold text-xs tracking-wider uppercase text-ink mb-3">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider border border-ink bg-paper text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: Live Demo & GitHub */}
              <div className="space-y-2 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3 bg-ink text-paper hover:bg-orange hover:text-white transition-colors font-bold text-xs uppercase tracking-widest border border-ink"
                  >
                    <span>LAUNCH PROJECT</span>
                    <span>↗</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3 bg-transparent text-ink hover:bg-ink hover:text-white transition-colors font-bold text-xs uppercase tracking-widest border border-ink"
                  >
                    <span>SOURCE CODE</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
