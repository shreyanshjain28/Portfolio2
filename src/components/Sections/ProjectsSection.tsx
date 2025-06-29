import React, { useState } from 'react';
import ProjectCard from '../UI/ProjectCard';
import prompthub from '../../assets/prompthub.png';

// Project data
const projects = [
  {
    id: 1,
    title: 'JHS Vistor Management System',
    description: 'Developed a Visitor tracking and Data management application, visualization and reporting for stakeholders.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['web', 'fullstack', 'backend'],
    technologies: ['React', 'Node.js', 'MySQL','Chart.js'],
    link: 'https://github.com/shreyanshjain28/Visitor_tracking_system/tree/master'
  },
  {
    id: 2,
    title: 'Prompt Hub',
    description: ' A full-stack AI prompt-sharing application for sharing Prompts.',
    image: prompthub,
    categories: ['web', 'fullstack', 'Ui/U x'],
    technologies: ['Next.js', 'Mongo DB', 'NextAuth'],
    link: 'https://prompt-hub-azure.vercel.app/'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring with detailed forecasts and interactive maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['web', 'frontend', 'api'],
    technologies: ['JavaScript', 'CSS', 'WeatherAPI'],
    link: 'https://github.com/shreyanshjain28/Weather-app'
  },
  {
    id: 4,
    title: 'Courtyard Resturant Website',
    description: 'A website for restaurant for Booking table and online order for university project.',
    image: 'https://torontolife.mblycdn.com/tl/resized/2023/12/w1280/toronto-restaurants-andore-queen-west-wine-bar-cave-scaled.jpg',
    categories: ['web', 'fullstack', 'backend'],
    technologies: ['HTML', 'PHP', 'PostgreSQL'],
    link: 'https://github.com/shreyanshjain28/courtyard'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A custom portfolio website showcasing projects and skills.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['web', 'frontend'],
    technologies: ['React', 'JavaScript', 'Bolt'],
    link: 'https://github.com/shreyanshjain28/Portfolio2'
  },
  {
    id: 6,
    title: 'Home Hub - Figma Prototype',
    description: 'A prototype/UI for real estate management application using Figma.',
    image: 'https://logos-world.net/wp-content/uploads/2024/10/Figma-Logo-New.png',
    categories: ['web', 'frontend', 'Ui/Ux'],
    technologies: ['Figma','Agile',],
    link: 'https://www.figma.com/design/L7vyFTc1J9pb3gzzBa75O0/home-hub?node-id=0-1'
  }
];

// All unique categories from projects
const allCategories = ['all', ...new Set(projects.flatMap(project => project.categories))];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my latest work across various domains and technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;