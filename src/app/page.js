import { EmailSection, Footer, HeroSection, Navbar } from "./components";
import dynamic from "next/dynamic";
import { RingLoader } from "react-spinners"; //spinner

// Cargar componentes dinámicamente
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"), {
  loading: () => (
    <div className="absolute z-30 inset-0 flex justify-center items-center">
      <RingLoader color="#fff" size={60} /> {/* Spinner central */}
    </div>
  ),
  ssr: false, // Cargar solo en el cliente
});

const AboutSection = dynamic(() => import("./components/AboutSection"), {
  loading: () => (
    <div className="absolute z-30 inset-0 flex justify-center items-center">
      <RingLoader color="#fff" size={60} />
    </div>
  ),
  ssr: false,
});

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
