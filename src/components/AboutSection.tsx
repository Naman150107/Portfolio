import React from 'react';
import { ABOUT_TEXT } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-[#E2DFD7]" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-2 text-[12px] font-mono text-[#3D4E41] uppercase tracking-wider mb-2">
          <span>02 / Background & Philosophy</span>
        </div>
        <h2
          id="about-heading"
          className="font-serif text-[28px] sm:text-[34px] font-medium text-[#191919] tracking-[-0.01em] mb-8"
        >
          About & Engineering Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Narrative */}
          <div className="md:col-span-2 space-y-5 text-[15px] sm:text-[16px] leading-[1.7] text-[#5A5852]">
            <p className="text-[#191919] font-normal">
              {ABOUT_TEXT.paragraph1}
            </p>
            <p>
              {ABOUT_TEXT.paragraph2}
            </p>
            <p>
              {ABOUT_TEXT.paragraph3}
            </p>
          </div>

          {/* Quick Academic & Engineering Facts */}
          <div className="bg-[#EFECE6]/60 border border-[#E2DFD7] rounded-xs p-5 self-start space-y-4 text-[13px]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#7D7A73] block mb-1">
                Current Program
              </span>
              <p className="font-medium text-[#191919]">
                B.Tech in Computer Science & Engineering (AI/ML)
              </p>
              <p className="text-[#5A5852] text-[12px]">2nd Year Undergraduate</p>
            </div>

            <div className="border-t border-[#E2DFD7] pt-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#7D7A73] block mb-1">
                Target Roles
              </span>
              <p className="font-medium text-[#191919]">
                Software Engineering Intern · Applied AI Intern
              </p>
            </div>

            <div className="border-t border-[#E2DFD7] pt-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#7D7A73] block mb-1">
                Core Disciplines
              </span>
              <p className="text-[#5A5852]">
                Deterministic Rule Engines, State Graphs, Relational Data Modeling, Dual-Storage Resilience
              </p>
            </div>

            <div className="border-t border-[#E2DFD7] pt-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#7D7A73] block mb-1">
                Engineering Invariant
              </span>
              <p className="text-[#3D4E41] font-mono text-[12px]">
                "AI provides advisory synthesis; deterministic code governs decisions and compliance."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
