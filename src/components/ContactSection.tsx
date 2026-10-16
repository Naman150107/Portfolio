import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-2 text-[12px] font-mono text-[#3D4E41] uppercase tracking-wider mb-2">
          <span>04 / Get In Touch</span>
        </div>
        <h2
          id="contact-heading"
          className="font-serif text-[28px] sm:text-[34px] font-medium text-[#191919] tracking-[-0.01em] mb-4"
        >
          Contact & Internship Inquiries
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#5A5852] max-w-2xl leading-relaxed mb-8">
          I am currently open to Software Engineering and Applied AI internship discussions. Whether you have an open role, questions regarding my projects, or want to discuss architecture, feel free to reach out.
        </p>

        <div className="bg-[#EFECE6]/50 border border-[#E2DFD7] rounded-xs p-6 sm:p-8 max-w-2xl">
          <div className="space-y-4">
            {/* Email with Copy */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2DFD7]">
              <div>
                <span className="text-[11px] font-mono text-[#7D7A73] uppercase tracking-wider block">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[15px] sm:text-[16px] font-mono text-[#191919] hover:text-[#3D4E41] transition-colors underline underline-offset-4"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1.5 text-[12px] font-mono text-[#3D4E41] bg-[#E9ECE8] hover:bg-[#DCE2DB] border border-[#CFD7CF] rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D4E41]"
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

            {/* GitHub Profile */}
            <div className="flex items-center justify-between py-2 border-b border-[#E2DFD7]">
              <div className="flex items-center gap-2.5">
                <GithubIcon size={17} className="text-[#5A5852]" />
                <span className="text-[14px] font-mono text-[#191919]">GitHub</span>
              </div>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] font-mono text-[#3D4E41] hover:text-[#191919] underline underline-offset-4"
              >
                <span>github.com/Naman150107</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>

            {/* LinkedIn Profile */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2.5">
                <LinkedinIcon size={17} className="text-[#5A5852]" />
                <span className="text-[14px] font-mono text-[#191919]">LinkedIn</span>
              </div>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] font-mono text-[#3D4E41] hover:text-[#191919] underline underline-offset-4"
              >
                <span>naman-agarwal-7b5155275</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
