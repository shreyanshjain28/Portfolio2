import React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  category: {
    id: string;
    title: string;
    icon: React.ReactNode;
    skills: Skill[];
  };
}

const SkillCard: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;