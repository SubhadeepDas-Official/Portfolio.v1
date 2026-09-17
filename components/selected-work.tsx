"use client";

import Image from "next/image";
import { useState } from "react";
import { selectedProjects, Project } from "@/data/portfolio";
import ProjectModal from "@/components/project-modal";

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="work"
        className="w-full bg-ink text-paper border-x border-b border-ink relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row w-full">
          {/* LEFT: Narrow Vertical Orange Block */}
          <div className="w-full md:w-16 lg:w-20 bg-orange text-ink font-poster text-2xl md:text-3xl lg:text-4xl py-3 px-4 md:py-8 flex md:flex-col items-center justify-between border-b md:border-b-0 md:border-r border-ink shrink-0 select-none">
            {/* Horizontal for Mobile, Vertical Rotated for Desktop */}
            <div className="hidden md:flex md:writing-vertical tracking-tight whitespace-nowrap font-bold text-center">
              SELECTED WORK ↓
            </div>
            <div className="md:hidden font-bold tracking-tight text-xl flex items-center justify-between w-full">
              <span>SELECTED WORK</span>
              <span>↓</span>
            </div>
            <span className="hidden md:block w-3 h-3 bg-ink" />
          </div>

          {/* RIGHT AREA: 3 Projects Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {selectedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                data-cursor="VIEW"
                className="group relative flex flex-col justify-between p-4 md:p-6 lg:p-7 cursor-pointer hover:bg-zinc-900/80 transition-colors duration-200"
              >
                {/* Top Numbering */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono font-bold text-orange text-base md:text-lg group-hover:translate-x-1 transition-transform duration-200">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    {project.year}
                  </span>
                </div>

                {/* Preview Image Container */}
                <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden border border-zinc-800">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover contrast-110 brightness-95 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-300 ease-out"
                  />

                  {/* Corner Orange Badge Icon */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-orange text-ink flex items-center justify-center translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Project Metadata below preview */}
                <div className="mt-5 font-mono">
                  <h3 className="font-bold text-sm md:text-base tracking-wider uppercase text-paper group-hover:text-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-zinc-400 uppercase tracking-widest mt-1">
                    {project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Case Study Modal Overlay */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
