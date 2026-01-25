import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Github, Mail, Terminal, ArrowUpRight, Sparkles, Layers, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import posts from '../posts.json';

const BentoItem = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
    className={`group relative bg-white dark:bg-[#0A0A0A] rounded-3xl p-6 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${className}`}
  >
    {children}
  </motion.div>
);

const TechStack = () => (
  <div className="flex flex-wrap gap-2">
    {['React', 'Node.js', 'Go', 'Python', 'Tailwind', 'Next.js', 'Docker', 'Linux'].map((tech) => (
      <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-default hover:scale-105 transform duration-200 shadow-sm">
        {tech}
      </span>
    ))}
  </div>
);

export default function Home() {
  const pinnedPost = posts.find(p => p.id === 'hello-world') || posts[0];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-zinc-50 dark:bg-black selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

          <BentoItem className="md:col-span-3 md:row-span-2 flex flex-col justify-center relative bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <div className="relative z-10 p-4 md:p-8">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8 }}
               >
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-blue-500/20 shadow-sm">
                   <Sparkles size={14} /> 
                   <span>独立开发者</span>
                 </div>
                 <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight drop-shadow-sm">
                   将创意转化为 <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">数字现实。</span>
                 </h1>
                 <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mb-8 leading-relaxed">
                   你好，我是 Zfank；
                   热衷于开源项目和现代技术栈探索。
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                   <Link to="/projects" className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-zinc-500/30">
                     查看项目 <ArrowRight size={18} />
                   </Link>
                   <Link to="/blog" className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm hover:shadow-md">
                     阅读博客
                   </Link>
                 </div>
               </motion.div>
             </div>
          </BentoItem>

          <div className="md:col-span-1 md:row-span-2 flex flex-col gap-4">
             <BentoItem className="flex-1 flex flex-col items-start justify-between bg-zinc-900 text-white border-none relative overflow-hidden shadow-3d">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px] shadow-lg shadow-blue-500/30">
                      <div className="w-full h-full rounded-[14px] bg-zinc-900 overflow-hidden relative group cursor-pointer">
                         <img src="/logo.svg" alt="Profile" className="w-full h-full object-cover p-2 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Zfank</h3>
                      <p className="text-zinc-400 text-xs">全栈开发</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <a href="https://github.com/Adorrain" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/link w-full border border-white/5 hover:border-white/10">
                      <div className="flex items-center gap-3">
                        <Github size={18} />
                        <span className="text-sm font-medium">GitHub</span>
                      </div>
                      <ArrowUpRight size={14} className="text-zinc-500 group-hover/link:text-white transition-colors" />
                    </a>
                    
                    <a href="#" className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/link w-full border border-white/5 hover:border-white/10">
                      <div className="flex items-center gap-3">
                        <Mail size={18} />
                        <span className="text-sm font-medium">邮箱</span>
                      </div>
                      <ArrowUpRight size={14} className="text-zinc-500 group-hover/link:text-white transition-colors" />
                    </a>
                  </div>
                </div>
             </BentoItem>

             <BentoItem className="flex-1" delay={0.2}>
                <div className="flex items-center gap-2 mb-4 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                  <Layers size={14} /> 技术栈
                </div>
                <TechStack />
             </BentoItem>
          </div>

          <BentoItem className="md:col-span-2 md:row-span-1 group cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/50" delay={0.3}>
            <Link to={`/blog/${pinnedPost.id}`} className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold shadow-sm">置顶文章</span>
                  <span className="text-zinc-400 text-xs font-medium">{pinnedPost.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                  {pinnedPost.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {pinnedPost.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-bold text-purple-600 dark:text-purple-400">
                阅读全文 <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </BentoItem>

          <BentoItem className="md:col-span-1 md:row-span-1" delay={0.4}>
            <div className="flex items-center gap-2 mb-4 text-zinc-500 text-xs font-bold uppercase tracking-wider">
               <Zap size={14} /> 近期作品
            </div>
            <div className="space-y-3">
              <Link to="/projects" className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group/item shadow-sm hover:shadow-md border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 group-hover/item:scale-110 transition-transform shadow-sm">
                  <Terminal size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-white">近期没有啥作品</div>
                  <div className="text-xs text-zinc-500">...</div>
                </div>
              </Link>
            </div>
          </BentoItem>

          <BentoItem className="md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" delay={0.5}>
            <div className="h-full flex flex-col justify-between">
               <div>
                 <div className="flex items-center gap-2 mb-4 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                    <Globe size={14} /> 友情链接
                 </div>
                 <h3 className="text-lg font-bold mb-1 text-zinc-900 dark:text-white">嵌入式学习空间</h3>
                 <p className="text-zinc-500 dark:text-zinc-400 text-sm">树莓派与机器人开发资源库。</p>
               </div>
               <a href="https://www.haolin.online" target="_blank" rel="noreferrer" className="flex items-center justify-between mt-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm font-medium hover:text-blue-600 transition-colors group/link shadow-sm hover:shadow-md border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                 <span>访问站点</span>
                 <ArrowUpRight size={16} className="text-zinc-400 group-hover/link:text-blue-600" />
               </a>
            </div>
          </BentoItem>

        </div>
      </div>
    </div>
  );
}
