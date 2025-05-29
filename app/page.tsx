import Services from "@/components/services";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Projects />
    </>
  );
}
