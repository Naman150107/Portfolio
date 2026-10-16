import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-[#E2DFD7]" aria-labelledby="projects-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-[12px] font-mono text-[#3D4E41] uppercase tracking-wider mb-2">
            <span>01 / Selected Work</span>
          </div>
          <h2
            id="projects-heading"
            className="font-serif text-[28px] sm:text-[34px] font-medium text-[#191919] tracking-[-0.01em]"
          >
            Engineering Projects
          </h2>
          <p className="mt-2 text-[15px] sm:text-[16px] text-[#5A5852] max-w-2xl leading-relaxed">
            Every project represents working software designed to solve specific operational bottlenecks. Implemented logic and mock interfaces are transparently documented to provide technical clarity for engineering teams.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-10 sm:space-y-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
