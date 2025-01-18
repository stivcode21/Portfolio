"use client"
import { EmailSection, Footer, HeroSection, Navbar } from "./components";
import LazySection from "./components/utils/LazySection";
import { useTheme } from "./hooks/ThemeContext";

const App = () => {
    const { isDarkMode } = useTheme();

    return (
        <main className={` ${isDarkMode ? "bg-light-bg text-light-text" : "bg-dark-bg text-dark-text"}
        flex flex-col justify-center items-center min-h-screen w-full`}>
            <Navbar />
            <div>
                <HeroSection />
                <LazySection componentPath="AboutSection" />
                <LazySection componentPath="ProjectsSection" />
                <EmailSection />
            </div>
            <Footer />
        </main>
    )
}

export default App