import React from "react";

interface CaseStudyProps {
  title: string;
  role: string;
  children: React.ReactNode;
}

export function CaseStudy({ title, role, children }: CaseStudyProps) {
  return (
    <article className="mb-20 last:mb-0">
      <header className="mb-8 pb-6 border-b border-border/50">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
          Role: {role}
        </p>
      </header>
      <div className="space-y-8">
        {children}
      </div>
    </article>
  );
}

export function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-4 gap-4 md:gap-8">
      <h4 className="md:col-span-1 text-sm font-semibold text-foreground mt-1">
        {title}
      </h4>
      <div className="md:col-span-3 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
