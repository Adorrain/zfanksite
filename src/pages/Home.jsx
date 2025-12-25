import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe, Zap, Github, Twitter, MapPin, Coffee, Mail, Star, FolderGit2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoItem = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const TechIcon = ({ icon: Icon, color, label }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className={`p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 ${color} group-hover:scale-110 transition-transform duration-300`}>
      <Icon size={24} />
    </div>
    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{label}</span>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50/50 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. Hero Card - Large (Top Left) */}
          <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                你好, 我是 Zfank.
                <br />
                <span className="text-blue-200">全栈开发者.</span>
              </h1>
              <p className="text-blue-100 text-lg max-w-md">
                用代码、热情和一点魔法打造数字体验。
              </p>
            </div>
            
            <div className="flex gap-4 mt-8 relative z-10">
              <Link to="/about" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                关于我
              </Link>
              <Link to="/blog" className="px-6 py-3 bg-blue-700/50 text-white rounded-xl font-bold hover:bg-blue-700/70 transition-colors backdrop-blur-sm flex items-center gap-2">
                阅读博客 <ArrowRight size={18} />
              </Link>
            </div>
          </BentoItem>

          {/* 2. Map / Location (Top Right 1) */}
          <BentoItem className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center text-center gap-4 bg-emerald-50 dark:bg-emerald-900/10" delay={0.1}>
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">坐标</h3>
              <p className="text-gray-500 dark:text-gray-400">中国 西安</p>
            </div>
          </BentoItem>

          {/* 3. Tech Stack Grid (Top Right 2) */}
          <BentoItem className="md:col-span-1 md:row-span-1" delay={0.2}>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">技术栈</h3>
            <div className="grid grid-cols-2 gap-4">
              <TechIcon icon={Code} color="text-blue-500" label="React" />
              <TechIcon icon={Zap} color="text-yellow-500" label="Vite" />
              <TechIcon icon={Globe} color="text-cyan-500" label="Tailwind" />
              <TechIcon icon={Cpu} color="text-green-500" label="Node" />
            </div>
          </BentoItem>

          {/* 4. Github Stats (Middle Right 1) */}
          <BentoItem className="md:col-span-1 md:row-span-1 flex flex-col justify-between bg-gray-900 text-white border-gray-800" delay={0.3}>
            <div className="flex justify-between items-start">
              <Github size={32} className="text-gray-400" />
              <ArrowRight className="transform -rotate-45 text-gray-500" />
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">2.5k+</div>
              <div className="text-gray-400 text-sm">年度提交</div>
            </div>
            <a href="https://github.com/Adorrain" target="_blank" rel="noreferrer" className="absolute inset-0" />
          </BentoItem>

          {/* 5. Social / Contact (Middle Right 2) */}
          <BentoItem className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center gap-6" delay={0.4}>
            <h3 className="font-bold text-gray-900 dark:text-white">保持联系</h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-100 hover:text-purple-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-orange-100 hover:text-orange-600 transition-colors">
                <Coffee size={20} />
              </a>
            </div>
          </BentoItem>

          {/* 6. Latest Post (Bottom Left - Wide) */}
          <BentoItem className="md:col-span-2 md:row-span-1 flex flex-col justify-center relative overflow-hidden group" delay={0.5}>
             <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-rose-50 dark:from-orange-900/10 dark:to-rose-900/10 opacity-50" />
             <div className="relative z-10">
               <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-2 font-medium">
                 <Star size={16} fill="currentColor" /> 精选文章
               </div>
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
                 Markdown 语法指南与演示
               </h3>
               <p className="text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                 本文全面演示了本博客的 Markdown 渲染能力，包括代码高亮、表格、引用等各种语法效果。
               </p>
               <Link to="/blog/hello-world" className="text-sm font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1 hover:gap-2 transition-all">
                 阅读文章 <ArrowRight size={16} />
               </Link>
             </div>
          </BentoItem>

          {/* 7. Project Showcase (Bottom Right - Wide) */}
          <BentoItem className="md:col-span-2 md:row-span-1 flex flex-row items-center gap-6 bg-indigo-50 dark:bg-indigo-900/10" delay={0.6}>
            <div className="w-24 h-24 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
              <FolderGit2 size={40} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2 font-medium">
                 <Cpu size={16} /> 精选项目
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                个人博客系统
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                使用 React + Vite + Tailwind CSS 构建的现代化博客。
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded-md bg-white dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700">React</span>
                <span className="px-2 py-1 rounded-md bg-white dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700">Vite</span>
              </div>
            </div>
            <Link to="/projects" className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-sm text-indigo-600 group-hover:scale-110 transition-transform">
               <ArrowRight size={20} />
            </Link>
          </BentoItem>

          {/* 8. Quote / Inspiration (Bottom - Optional Extra Row) */}
           <BentoItem className="md:col-span-4 md:row-span-1 flex items-center justify-center bg-gray-900 text-white text-center py-8" delay={0.7}>
              <div className="max-w-2xl">
                <Quote size={32} className="text-gray-600 mx-auto mb-4" />
                <p className="text-xl md:text-2xl font-serif italic text-gray-300 mb-4">
                  "做伟大工作的唯一途径就是热爱你所做的事。"
                </p>
                <p className="text-sm text-gray-500 font-medium tracking-widest uppercase">史蒂夫·乔布斯</p>
              </div>
           </BentoItem>

        </div>
      </div>
    </div>
  );
}
