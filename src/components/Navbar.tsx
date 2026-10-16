import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F6F2]/95 backdrop-blur-xs border-b border-[#E2DFD7] transition-colors">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 z-50 bg-[#3D4E41] text-[#F7F6F2] px-4 py-2 text-sm font-medium rounded-xs shadow-xs focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Text-based Identity */}
        <a
          href="#"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D4E41] rounded-xs py-0.5"
          aria-label="Naman Agarwal - Home"
        >
          <span className="text-[17px] font-semibold tracking-tight text-[#191919] group-hover:text-[#3D4E41] transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-[12px] font-mono text-[#5A5852] tracking-wide">
            {PERSONAL_INFO.role}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#5A5852] hover:text-[#191919] transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D4E41] rounded-xs"
            >
              {link.label}
            </a>
          ))}
          <div className="h-3 w-px bg-[#E2DFD7] mx-1" aria-hidden="true" />
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-mono text-[#3D4E41] bg-[#E9ECE8] hover:bg-[#DCE2DB] px-2.5 py-1 rounded-xs border border-[#CFD7CF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D4E41]"
            aria-label="GitHub Profile (opens in new tab)"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[#5A5852] hover:text-[#191919] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D4E41] rounded-xs"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F6F2] border-b border-[#E2DFD7] px-6 py-4 animate-in fade-in duration-150">
          <nav className="flex flex-col gap-3 text-[15px]" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#5A5852] hover:text-[#191919] py-1 border-b border-[#E2DFD7]/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between text-[13px] font-mono">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D4E41] underline underline-offset-4"
              >
                GitHub Profile ↗
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D4E41] underline underline-offset-4"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
