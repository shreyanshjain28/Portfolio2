import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-4 shadow-lg border border-white/20 dark:border-gray-800">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Shreyansh Jain working at desk" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg">
                Hello! I'm Shreyansh Jain, a passionate full stack developer and designer with over 2 years of experience 
                creating scalable, data driven, functional, and user-centered digital experiences.
              </p>
              
              <p>
                I believe that design is about more than just making things look pretty – it's about solving problems and 
                creating intuitive, enjoyable experiences for users. Whether I'm working on a website, mobile app, or 
                other digital product, I bring my commitment to design excellence and user-centered thinking to 
                every project.
              </p>
              
              <p>
                When I'm not coding or pushing pixels, you'll find me exploring new technologies, 
                contributing to open source projects, or enjoying sports.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">2+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Toronto, Canada</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Current Role</h3>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">Undergraduate CS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;