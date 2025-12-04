import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaFigma, 
         FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs, 
         SiTypescript, SiExpress, SiAdobexd, SiGraphql, SiRedux, 
         SiJest, SiWebpack, SiVercel } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500 text-3xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-3xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400 text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-3xl" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-600 text-3xl" /> },
      ]
    },
    {
      title: "Backend & Database",
      color: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-800 text-3xl" /> },
        { name: "Python", icon: <FaPython className="text-yellow-600 text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-3xl" /> },
        { name: "REST APIs", icon: <FaDatabase className="text-blue-500 text-3xl" /> },
      ]
    },
    {
      title: "Tools & Design",
      color: "from-green-50 to-green-100",
      border: "border-green-200",
      skills: [
        { name: "Figma", icon: <FaFigma className="text-purple-600 text-3xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" /> },
        { name: "Webpack", icon: <SiWebpack className="text-blue-400 text-3xl" /> },
        { name: "Vercel", icon: <SiVercel className="text-black text-3xl" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Technologies and tools I work with to build exceptional web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-b ${category.color} rounded-2xl p-6 border ${category.border} hover:shadow-xl transition-all duration-300`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-8 text-center pb-4 border-b border-gray-300">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-3">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Additional Capabilities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "UI/UX Design", color: "bg-gradient-to-r from-pink-100 to-rose-100", text: "text-pink-600" },
              { name: "Responsive Design", color: "bg-gradient-to-r from-blue-100 to-cyan-100", text: "text-blue-600" },
              { name: "API Development", color: "bg-gradient-to-r from-green-100 to-emerald-100", text: "text-green-600" },
              { name: "DevOps", color: "bg-gradient-to-r from-orange-100 to-amber-100", text: "text-orange-600" },
              { name: "Testing", color: "bg-gradient-to-r from-red-100 to-pink-100", text: "text-red-600" },
              { name: "Performance", color: "bg-gradient-to-r from-purple-100 to-violet-100", text: "text-purple-600" },
              { name: "Security", color: "bg-gradient-to-r from-indigo-100 to-blue-100", text: "text-indigo-600" },
              { name: "Deployment", color: "bg-gradient-to-r from-teal-100 to-emerald-100", text: "text-teal-600" },
            ].map((skill, index) => (
              <div 
                key={index} 
                className={`${skill.color} p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300`}
              >
                <span className={`font-semibold ${skill.text}`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;