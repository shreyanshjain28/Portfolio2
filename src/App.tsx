import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Header from './components/Layout/Header';
import HeroSection from './components/Sections/HeroSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import SkillsSection from './components/Sections/SkillsSection';
import AboutSection from './components/Sections/AboutSection';
import ContactSection from './components/Sections/ContactSection';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;