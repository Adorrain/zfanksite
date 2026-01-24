import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeInUpItem } from '../utils/animations';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-black py-20 relative overflow-hidden">
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
          {projects.map((project, index) => {
            const Icon = FolderGit2; 
            
            return (
              <Link 
                to={`/projects/${project.id}`}
                key={index}
                className="block h-full" 
              >
                <motion.div
                  variants={fadeInUpItem}
                  className="group relative bg-white dark:bg-zinc-900 rounded-[2rem] p-1 shadow-3d hover:shadow-2xl hover:shadow-zinc-300/60 dark:hover:shadow-black/70 transition-all duration-500 hover:-translate-y-2 h-full border border-zinc-100 dark:border-white/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-[2rem] transition-opacity duration-500`} />
                  
                  <div className="bg-white dark:bg-zinc-900 rounded-[1.8rem] p-8 h-full flex flex-col relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                        <Icon size={32} />
                      </div>
                      <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            title="查看代码"
                            onClick={(e) => e.stopPropagation()} 
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
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
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

                      <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-2">
                          <Star size={16} className="text-yellow-400 fill-yellow-400" />
                          <span>{project.stars} Stars</span>
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          查看详情 →
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
