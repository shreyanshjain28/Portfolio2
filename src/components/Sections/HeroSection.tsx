import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../UI/Button';
import Scene from '../3D/Scene';


const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4 animate-fadeIn">
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide">
                HELLO, MY NAME IS
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="block">Shreyansh Jain</span>
                <span className="block mt-2">
                Full Stack<span className="text-blue-600 dark:text-blue-400"> Developer</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                I build exceptional digital experiences that are fast, accessible, 
                and visually appealing. Transforming ideas into reality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects} 
                primary
              >
                View My Work <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                secondary
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Available for work</span>
              </div>
              <div>
                <span>Based in Toronto, ON, CA</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative h-[400px]">
            
            <Scene />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;