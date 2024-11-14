import {
  AboutSection,
  EmailSection,
  Footer,
  HeroSection,
  Navbar,
  ProjectsSection,
} from "./components";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full">
      <Navbar />
      <div>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
