import {
  BlogSection,
  ContactSection,
  HeroSection,
  MissionSection,
  StartupSchoolSection,
  TeamSection,
} from "@/components/sections";
import SectionWrapper from "@/components/shared/SectionWrapper";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SectionWrapper>
        <MissionSection />
        <TeamSection />
        <StartupSchoolSection />
        <BlogSection />
        <ContactSection />
      </SectionWrapper>
    </>
  );
};

export default HomePage;
