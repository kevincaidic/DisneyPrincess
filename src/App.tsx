import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import VideoShowcaseSection from "./components/VideoShowcaseSection";
import ResumeSection from "./components/ResumeSection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Find offset position for elegant spacing below the sticky nav bar
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-[#050505] text-white font-sans min-h-screen selection:bg-cyan-400/30 selection:text-white font-sans">
      {/* Custom premium kinetic cursor */}
      <CustomCursor />

      {/* Dynamic Sticky Header Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Content Layout Modules */}
      <main>
        {/* Full Viewport 100vh Hero with floating Figma mockups */}
        <HeroSection onNavigate={handleNavigate} />

        {/* About Me Story Blocks with corporate statistics bento */}
        <AboutSection />

        {/* Highly Interactive Skills Matrix Inspection Hub */}
        <SkillsSection />

        {/* Pricing Level Consulting Solutions */}
        <ServicesSection />

        {/* Comprehensive Case Studies with Filtration and Depth Modality */}
        <ProjectsSection />

        {/* Verified elite certifications list */}
        <CertificatesSection />

        {/* Video Showcase - Projects in Motion */}
        <VideoShowcaseSection />

        {/* Printable & downloadable formal resume biography */}
        <ResumeSection />

        {/* Systematic 5-step Workflow interactive timeline */}
        <ProcessSection />

        {/* Strategic leads capture consultation brief */}
        <ContactSection />
      </main>

      {/* Footer credits and identity anchors */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
