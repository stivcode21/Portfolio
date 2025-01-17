import { EmailSection, Footer, HeroSection, Navbar } from "./components";
import LazySection from "./components/utils/LazySection";
import { ThemeProvider } from "./hooks/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex flex-col justify-center items-center min-h-screen w-full">
        <Navbar />
        <div>
          <HeroSection />
          <LazySection componentPath="AboutSection" />
          <LazySection componentPath="ProjectsSection" />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
