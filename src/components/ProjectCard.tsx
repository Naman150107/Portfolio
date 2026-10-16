import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, ChevronDown, ChevronUp, Code2, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <article
      id={project.id}
      className="bg-[#F7F6F2] border border-[#E2DFD7] rounded-xs p-6 sm:p-8 transition-colors hover:border-[#D5D1C7] focus-within:border-[#3D4E41]"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Header Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-[#E2DFD7]/70">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[13px] text-[#3D4E41] font-semibold tracking-wider">
            {project.index}
          </span>
          <span className="h-3 w-px bg-[#E2DFD7]" aria-hidden="true" />
          <span className="text-[12px] font-mono text-[#5A5852] uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-xs text-[11px] font-mono bg-[#E9ECE8] text-[#3D4E41] border border-[#CFD7CF]">
          {project.badge}
        </div>
      </div>

      {/* Project Title & Tagline */}
      <div className="mb-6">
        <h3
          id={`project-title-${project.id}`}
          className="font-serif text-[22px] sm:text-[25px] font-medium text-[#191919] leading-tight"
        >
          {project.title}
          {project.secondaryTitle && (
            <span className="text-[#5A5852] font-normal text-[18px] sm:text-[20px] ml-2">
              / {project.secondaryTitle}
            </span>
          )}
        </h3>
        <p className="mt-2 text-[14px] sm:text-[15px] font-mono text-[#5A5852] leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* Two-Column Problem & Implemented Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#EFECE6]/50 p-4 rounded-xs border border-[#E2DFD7]/80">
          <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#7D7A73] mb-2 flex items-center gap-1.5">
            <span>The Problem</span>
          </h4>
          <p className="text-[14px] sm:text-[15px] text-[#191919] leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="bg-[#EFECE6]/50 p-4 rounded-xs border border-[#E2DFD7]/80">
          <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#3D4E41] mb-2 flex items-center gap-1.5">
            <span>Implemented Approach</span>
          </h4>
          <p className="text-[14px] sm:text-[15px] text-[#191919] leading-relaxed">
            {project.approach}
          </p>
        </div>
      </div>

      {/* Key Technical Decisions */}
      <div className="mb-6">
        <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#7D7A73] mb-3">
          Key Technical Decisions
        </h4>
        <ul className="space-y-2 text-[14px] leading-relaxed text-[#5A5852]">
          {project.technicalDecisions.map((decision, idx) => {
            const [headline, ...rest] = decision.split(': ');
            return (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#3D4E41] font-mono text-[12px] mt-0.5 select-none" aria-hidden="true">
                  —
                </span>
                <span>
                  <strong className="text-[#191919] font-medium">{headline}: </strong>
                  {rest.join(': ')}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Verified Stack Chips */}
      <div className="mb-6">
        <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#7D7A73] mb-2.5">
          Verified Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.verifiedStack.map((tech) => (
            <span
              key={tech}
              className="text-[12px] font-mono px-2.5 py-1 bg-[#EFECE6] text-[#191919] border border-[#E2DFD7] rounded-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scope & Integrity Box */}
      <div className="p-4 bg-[#F2EFE9] border border-[#E2DFD7] rounded-xs mb-6 text-[13px] text-[#5A5852] space-y-3">
        <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#191919] font-medium">
            Architecture Scope & Transparency
          </span>
          <span className="font-mono text-[10px] text-[#7D7A73]">Verified Repository Implementation</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <div className="flex items-center gap-1.5 text-[#3D4E41] font-medium text-[12px] mb-1.5">
              <CheckCircle2 size={13} aria-hidden="true" />
              <span>Implemented Logic</span>
            </div>
            <ul className="space-y-1 list-disc list-inside text-[12px] text-[#5A5852]">
              {project.integrityScope.implemented.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-[#7D7A73] font-medium text-[12px] mb-1.5">
              <AlertCircle size={13} aria-hidden="true" />
              <span>Mock / Simulated Layers</span>
            </div>
            <ul className="space-y-1 list-disc list-inside text-[12px] text-[#5A5852]">
              {project.integrityScope.simulatedOrMocked.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Collapsible Architecture & Logic Inspector */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setShowArchitecture(!showArchitecture)}
          className="inline-flex items-center gap-2 text-[13px] font-mono text-[#3D4E41] hover:text-[#191919] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D4E41] rounded-xs"
          aria-expanded={showArchitecture}
        >
          <Code2 size={14} aria-hidden="true" />
          <span>{showArchitecture ? 'Hide Engine Details' : 'View Engine Logic & Code'}</span>
          {showArchitecture ? <ChevronUp size={14} aria-hidden="true" /> : <ChevronDown size={14} aria-hidden="true" />}
        </button>

        {showArchitecture && (
          <div className="mt-3 p-4 bg-[#EFECE6] border border-[#E2DFD7] rounded-xs text-[13px] space-y-3 animate-in fade-in duration-150">
            <div>
              <span className="text-[11px] font-mono text-[#7D7A73] uppercase tracking-wider block mb-1">
                Data & Control Flow
              </span>
              <p className="font-mono text-[12px] text-[#191919] bg-[#F7F6F2] p-2.5 rounded-xs border border-[#E2DFD7]">
                {project.architecture.flowSummary}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono text-[#7D7A73] uppercase tracking-wider block mb-1">
                Guiding Invariant
              </span>
              <p className="text-[13px] text-[#5A5852]">
                {project.architecture.keyRuleOrDecision}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono text-[#7D7A73] uppercase tracking-wider block mb-1">
                Source Snippet: {project.architecture.codeSnippetTitle}
              </span>
              <pre className="text-[12px] leading-relaxed font-mono bg-[#191919] text-[#EFECE6] p-3.5 rounded-xs overflow-x-auto border border-[#E2DFD7]">
                <code>{project.architecture.codeSnippet}</code>
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Footer Links & Verification */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2DFD7]/70 text-[13px]">
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[#191919] hover:text-[#3D4E41] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D4E41] rounded-xs"
          >
            <span>View Source on GitHub</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="text-[12px] font-mono text-[#7D7A73]">
          <span>Status: </span>
          <span className="text-[#3D4E41] font-medium">{project.demoStatus.label}</span>
          <span className="text-[#5A5852] ml-1.5 hidden sm:inline">({project.demoStatus.note})</span>
        </div>
      </div>
    </article>
  );
};
