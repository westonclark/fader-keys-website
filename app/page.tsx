import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about";

export default function Home({}) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
}
