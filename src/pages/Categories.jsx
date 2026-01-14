import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Hash } from 'lucide-react';
import posts from '../posts.json';
import { staggerContainer, scaleInItem } from '../utils/animations';

const categories = ['全部', ...new Set(posts.map(post => post.category))];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredPosts = activeCategory === '全部' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
          >
            知识库
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            按主题浏览所有文章
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-16 max-w-3xl mx-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 relative overflow-hidden ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105' 
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {category !== '全部' && <Hash size={14} className="opacity-50" />}
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-blue-600 z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          variants={staggerContainer(0.05)}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article 
                layout
                key={post.id}
                variants={scaleInItem}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs font-mono">{post.date}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 inline-flex items-center justify-between text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors"
                >
                  阅读文章 
                  <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            该分类下暂无文章
          </div>
        )}
      </div>
    </div>
  );
}
