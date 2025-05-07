import React from 'react';
import { Code, PenTool, Database, Globe, Layers, LineChart } from 'lucide-react';
import SkillCard from '../UI/SkillCard';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code size={32} />,
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3/SASS', level: 85 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React/Redux', level: 85 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Database size={32} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Express', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Casandra DB', level: 70 },
        { name: 'GraphQL', level: 75 },
        { name: 'RESTful APIs', level: 85 },
      ],
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: <PenTool size={32} />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Power App', level: 75 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Testing', level: 70 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Others',
      icon: <Layers size={32} />,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 75 },
        { name: 'Vercel', level: 75 },
        { name: 'Cursor/Bolt AI', level: 75 },
        { name: 'Agile/Scrum', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Skills & Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Leveraging modern technologies to build exceptional digital experiences.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {['React', 'Next', 'TypeScript', 'Node.js', 'MongoDB', 'GraphQL', 'Tailwind CSS', 'Redux', 'Express', 'PostgreSQL', 'Next.js', 'Docker', 'AWS'].map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                  {tech.includes('React') ? <Code size={24} /> :
                   tech.includes('Next') ? <Code size={24} /> :
                   tech.includes('Node') ? <Database size={24} /> :
                   tech.includes('CSS') ? <PenTool size={24} /> :
                   tech.includes('SQL') ? <Database size={24} /> :
                   tech.includes('AWS') ? <Globe size={24} /> :
                   tech.includes('Docker') ? <Layers size={24} /> :
                   <LineChart size={24} />}
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-center">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;