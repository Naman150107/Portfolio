import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E2DFD7] py-10 bg-[#EFECE6]/30 text-[13px] text-[#7D7A73]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-[#191919] font-medium font-serif text-[15px]">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-[12px] font-mono mt-0.5">
            Designed & coded with React, TypeScript, Vite & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-6 text-[12px] font-mono">
          <a
            href="#main-content"
            className="hover:text-[#191919] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D4E41]"
          >
            Back to top ↑
          </a>
          <span>·</span>
          <span>Verified factual portfolio</span>
        </div>
      </div>
    </footer>
  );
};
