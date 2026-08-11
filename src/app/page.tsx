import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WashBackground, GrainOverlay } from "@/components/WashBackground";

export default function Home() {
  return (
    <>
      <WashBackground />
      <GrainOverlay />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
