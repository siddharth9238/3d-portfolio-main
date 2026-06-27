"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { EDUCATION } from "@/data/constants";
import { cn } from "@/lib/utils";

const EducationSection = () => {
  return (
    <SectionWrapper id="education" className="py-24">
      <div className="mx-auto w-full max-w-4xl px-4">
        <SectionHeader
          id="education"
          title="Education"
          desc="My academic background"
          className="mb-12"
        />

        <div className="flex flex-col gap-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className={cn(
                "relative flex flex-col gap-3 p-6 rounded-xl",
                "border border-border/60 bg-background/50 backdrop-blur-md",
                "transition-all duration-300 hover:-translate-y-1 hover:bg-background/80 hover:border-primary/50 hover:shadow-[0_4px_20px_-10px_var(--primary)]"
              )}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-foreground/90">
                  {edu.degree}
                </h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-foreground/80">
                {edu.institution}
              </h4>
              
              <ul className="mt-2 flex flex-col gap-2">
                {edu.description.map((desc, i) => (
                  <li key={i} className="text-sm md:text-base text-foreground/70">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;