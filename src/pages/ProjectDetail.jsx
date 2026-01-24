import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Star } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-12 pb-24 relative">
      <div className="container mx-auto px-4 max-w-4xl mb-8">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
        >
          <ArrowLeft size={20} /> 返回项目列表
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 max-w-4xl"
      >
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-white/10 shadow-3d hover:shadow-2xl hover:shadow-zinc-300/60 dark:hover:shadow-black/70 transition-shadow duration-300 p-8 md:p-10">
          <header className="mb-10 pb-8 border-b border-gray-100 dark:border-gray-800">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color || 'from-blue-500 to-cyan-500'} text-white shadow-lg`}>
                <Star size={24} /> 
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium shadow-3d"
                >
                  <Github size={20} />
                  查看源码
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-3d"
                >
                  <ExternalLink size={20} />
                  在线预览
                </a>
              )}
            </div>
          </header>

          <div className="prose prose-sm md:prose-base dark:prose-invert prose-blue max-w-none 
              prose-headings:scroll-mt-24 
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-2xl prose-h1:mb-4
              prose-h2:text-xl prose-h2:mt-6 prose-h2:mb-3
              prose-h3:text-lg prose-h3:mt-4 prose-h3:mb-2
              prose-p:leading-relaxed prose-p:my-2 prose-p:text-gray-600 dark:prose-p:text-gray-300
              prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-li:my-0.5
              prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-pre:border-0 prose-pre:shadow-none
              prose-img:my-4 prose-hr:my-6">
            <MarkdownRenderer content={project.content} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
