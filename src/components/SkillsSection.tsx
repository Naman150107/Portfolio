import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-[#E2DFD7]" aria-labelledby="skills-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-2 text-[12px] font-mono text-[#3D4E41] uppercase tracking-wider mb-2">
          <span>03 / Technical Competencies</span>
        </div>
        <h2
          id="skills-heading"
          className="font-serif text-[28px] sm:text-[34px] font-medium text-[#191919] tracking-[-0.01em] mb-4"
        >
          Verified Technical Skills
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#5A5852] max-w-2xl leading-relaxed mb-10">
          Every tool, language, and framework listed below is directly backed by implementation code in public repositories—not speculative keywords or unverified course lists.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#EFECE6]/40 border border-[#E2DFD7] rounded-xs p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-[20px] font-medium text-[#191919] mb-2">
                  {cat.category}
                </h3>
                <p className="text-[13px] text-[#5A5852] leading-relaxed mb-5">
                  {cat.description}
                </p>

                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="border-t border-[#E2DFD7]/80 pt-2.5">
                      <span className="font-mono text-[13px] font-medium text-[#191919] block">
                        {skill.name}
                      </span>
                      <span className="text-[12px] text-[#7D7A73] leading-snug block mt-0.5">
                        {skill.context}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
