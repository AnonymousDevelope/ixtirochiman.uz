import "./App.css";
import Header from "@components/shared/Header";
import SectionWrapper from "./components/shared/SectionWrapper";
import {
  BlogSection,
  ContactSection,
  Footer,
  HeroSection,
  MissionSection,
  TeamSection,
} from "./components/sections";
import { StartupSchoolSection } from "./components/sections";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <SectionWrapper>
        <MissionSection />
        <TeamSection />
        <StartupSchoolSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </SectionWrapper>
    </>
  );
}

export default App;
