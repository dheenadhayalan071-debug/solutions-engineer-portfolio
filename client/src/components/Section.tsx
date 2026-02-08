import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
}

export function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  ...props 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24 border-b border-border last:border-0",
        className
      )}
      {...props}
    >
      <div className="container max-w-4xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-12">
            {title && (
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl text-balance">
                {subtitle}
              </h3>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
