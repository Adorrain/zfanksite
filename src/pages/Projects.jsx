import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: "个人博客系统",
    description: "使用 React + Vite + Tailwind CSS 构建的现代化博客，支持 Markdown 渲染和 Bento Grid 布局。",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/Adorrain",
    demo: "https://zfanksite.com",
    stars: 45,
    icon: Github, // Using Github icon as placeholder since FolderGit2 was not used in the previous snippet correctly or just to be safe
    color: "from-blue-500 to-cyan-500"
  }
];

// Note: In the previous read, FolderGit2 was imported but used as project.icon. 
// I'll re-import FolderGit2 to be safe.
import { FolderGit2 } from 'lucide-react';
import { staggerContainer, fadeInUpItem } from '../utils/animations';

projects[0].icon = FolderGit2;

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-purple-50 to-transparent dark:from-purple-900/10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            项目展示
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            探索我近期构建的开源项目、实验性作品以及一些有趣的小工具。
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUpItem}
              className="group relative bg-white dark:bg-gray-900 rounded-[2rem] p-1 shadow-xl shadow-gray-200/50 dark:shadow-black/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-[2rem] transition-opacity duration-500`} />
              
              <div className="bg-white dark:bg-gray-900 rounded-[1.8rem] p-8 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                    <project.icon size={32} />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        title="查看代码"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                        title="在线预览"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span>{project.stars} Stars</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
