import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";

export default function Home({ }) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
}
