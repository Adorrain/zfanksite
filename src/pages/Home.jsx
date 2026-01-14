import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe, Zap, Github, Twitter, Calendar, Coffee, Mail, Star, Pin } from 'lucide-react';
import { Link } from 'react-router-dom';
import posts from '../posts.json';
import { HorizontalClock } from '../components/clock';

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

const MiniCalendar = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeks = ['日','一','二','三','四','五','六'];
  const days = Array.from({ length: firstDay }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Calendar size={22} />
          </div>
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">当前月份</div>
            <div className="font-bold text-gray-900 dark:text-white">{year}年{month + 1}月</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {weeks.map((w) => (
          <div key={w} className="text-xs font-medium text-gray-500 dark:text-gray-400">{w}</div>
        ))}
        {days.map((d, idx) => {
          const isToday = d === today;
          return (
            <div
              key={idx}
              className={`h-8 flex items-center justify-center rounded-lg text-sm ${
                d === null
                  ? 'opacity-0'
                  : isToday
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              {d ?? ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Home() {
  const pinnedPost = posts.find(p => p.id === 'hello-world') || posts[0];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50/50 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">

          <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                <br />
                Zfank
                <br />
                <br />
                只是一个分享知识的
              </h1>
            </div>
            
            <div className="flex gap-4 mt-8 relative z-10">
              <Link to={`/blog/${pinnedPost.id}`} className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                关于站点
              </Link>
              <Link to="/blog" className="px-6 py-3 bg-blue-700/50 text-white rounded-xl font-bold hover:bg-blue-700/70 transition-colors backdrop-blur-sm flex items-center gap-2">
                阅读博客 <ArrowRight size={18} />
              </Link>
            </div>
          </BentoItem>

          <BentoItem className="md:col-span-1 md:row-span-1" delay={0.1}>
            <MiniCalendar />
          </BentoItem>

        <BentoItem className="md:col-span-1 md:row-span-1 flex items-center justify-center">
          <HorizontalClock />
        </BentoItem>

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

          <BentoItem
              className="md:col-span-2 md:row-span-1 relative overflow-hidden group p-0"
              delay={0.5}
            >
              <Link to={`/blog/${pinnedPost.id}`} className="flex flex-col justify-center h-full px-6 py-6 w-full relative z-10">
                 <div className="absolute top-4 right-4 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <Pin className="text-blue-500 transform rotate-45" size={20} fill="currentColor" />
                 </div>
                 <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                 
                 <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">
                      置顶
                    </span>
                    <span className="text-xs text-gray-500">{pinnedPost.date}</span>
                 </div>

                 <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                   {pinnedPost.title}
                 </h3>
                 
                 <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                   {pinnedPost.description}
                 </p>
                 
                 <div className="flex items-center text-blue-600 text-sm font-bold mt-auto">
                   阅读文章 <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                 </div>
               </Link>
            </BentoItem>

          <BentoItem className="md:col-span-2 md:row-span-1 flex flex-col justify-center bg-indigo-50 dark:bg-indigo-900/10" delay={0.6}>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-4 font-medium">
               <Globe size={16} /> 精选链接
            </div>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.haolin.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors group/link"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">嵌入式学习空间</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">树莓派博客 · 机器人项目</div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-gray-400 group-hover/link:text-indigo-600 group-hover/link:translate-x-1 transition-all" />
              </a>
                            <a 
                href="https://adorrain.github.io/go-study/#/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors group/link"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Code size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">Go 后端学习文档</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">从零开始 · 简洁 & 高效</div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-gray-400 group-hover/link:text-indigo-600 group-hover/link:translate-x-1 transition-all" />
              </a>
            </div>
          </BentoItem>

        </div>
      </div>
    </div>
  );
}
