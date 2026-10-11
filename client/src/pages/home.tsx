import { Hero } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { EducationSection } from '@/components/sections/education'
import { SkillsSection } from '@/components/sections/skills'
import { JourneySection } from '@/components/sections/journey'
import { ProjectsSection } from '@/components/sections/projects'
import { InnovationHubSection } from '@/components/sections/innovation-hub'
import { ContactSection } from '@/components/sections/contact-section'

export function HomePage() {
  return (
    <main id="content" className="relative space-y-0">
      {/* 01: HERO MODULE */}
      <Hero />

      {/* 02: ABOUT INTELLIGENCE DASHBOARD */}
      <AboutSection />

      {/* 03: EDUCATION TIMELINE */}
      <EducationSection />

      {/* 04: SKILLS INTELLIGENCE MATRIX */}
      <SkillsSection />

      {/* 05: TECH JOURNEY & PROGRESSION */}
      <JourneySection />

      {/* 06: PROJECTS UNIVERSE */}
      <ProjectsSection />

      {/* 07: INNOVATION HUB */}
      <InnovationHubSection />

      {/* 08: LET'S CONNECT SECTION */}
      <ContactSection />
    </main>
  )
}
