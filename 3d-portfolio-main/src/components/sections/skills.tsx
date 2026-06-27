"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="flex w-full min-h-[130vh] flex-col justify-center py-24 pointer-events-none md:min-h-[150dvh]"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="Tools I build with"
          className="static mb-12"
        />
        
        {/* The 2D grid of skill boxes has been removed so the 3D keyboard is fully visible */}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;