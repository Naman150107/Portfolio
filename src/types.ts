export interface IntegrityScope {
  implemented: string[];
  simulatedOrMocked: string[];
}

export interface ArchitectureDetail {
  flowSummary: string;
  keyRuleOrDecision: string;
  codeSnippetTitle: string;
  codeSnippet: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  secondaryTitle?: string;
  tagline: string;
  category: string;
  badge: string;
  problem: string;
  approach: string;
  technicalDecisions: string[];
  verifiedStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  demoStatus: {
    isAvailable: boolean;
    label: string;
    note: string;
  };
  integrityScope: IntegrityScope;
  architecture: ArchitectureDetail;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface SocialLink {
  label: string;
  url: string;
  type: 'github' | 'linkedin' | 'email';
}
