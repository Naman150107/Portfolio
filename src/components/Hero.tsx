import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-14 sm:pt-20 sm:pb-18 border-b border-[#E2DFD7]" aria-labelledby="hero-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Subtle Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFECE6] border border-[#E2DFD7] rounded-xs text-[12px] font-mono text-[#5A5852] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3D4E41]" aria-hidden="true" />
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Hero Headline */}
        <h1
          id="hero-heading"
          className="font-serif text-[32px] sm:text-[42px] md:text-[46px] leading-[1.18] tracking-[-0.015em] text-[#191919] font-normal max-w-3xl mb-6"
        >
          {PERSONAL_INFO.bioHeadline}
        </h1>

        {/* Narrative Introduction */}
        <div className="space-y-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.65] text-[#5A5852] font-normal mb-8">
          <p>
            I am an undergraduate engineer building reliable web architectures and applied AI tools. My work focuses on replacing brittle manual processes with deterministic software, resilient state machines, and pragmatic model integrations.
          </p>
          <p className="text-[15px] sm:text-[16px] text-[#7D7A73]">
            Currently exploring deterministic compliance engines, agentic memory workflows, and resilient full-stack systems. Built with verified code, verifiable facts, and zero fluff.
          </p>
        </div>

        {/* Action Links & Socials */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[#3D4E41] hover:bg-[#2D3B31] text-[#F7F6F2] px-5 py-2.5 text-[14px] font-medium rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D4E41] focus-visible:ring-offset-2"
          >
            <span>View projects</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#EFECE6] hover:bg-[#E8E5DE] text-[#191919] border border-[#E2DFD7] px-4 py-2.5 text-[14px] font-medium rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D4E41]"
          >
            <GithubIcon size={16} aria-hidden="true" />
            <span>GitHub</span>
            <ArrowUpRight size={13} className="text-[#5A5852]" aria-hidden="true" />
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#EFECE6] hover:bg-[#E8E5DE] text-[#191919] border border-[#E2DFD7] px-4 py-2.5 text-[14px] font-medium rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D4E41]"
          >
            <LinkedinIcon size={16} aria-hidden="true" />
            <span>LinkedIn</span>
            <ArrowUpRight size={13} className="text-[#5A5852]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
