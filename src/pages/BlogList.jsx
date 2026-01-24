import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, Search, Pin } from 'lucide-react';
import posts from '../posts.json';
import { staggerContainer, fadeInUpItem } from '../utils/animations';

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return posts
      .filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.date) - new Date(a.date);
      });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-black py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            最新文章
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            分享技术心得、开发经验与生活随笔
          </p>

          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={20} />
            </div>
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-3d hover:shadow-2xl text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>
        </div>
        
        <motion.div 
          key={searchQuery} 
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={fadeInUpItem}
              className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-3d border border-zinc-100 dark:border-white/10 hover:shadow-2xl hover:shadow-zinc-300/60 dark:hover:shadow-black/70 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  {post.pinned && (
                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold mr-2">
                      <Pin size={14} fill="currentColor" />
                      <span>置顶</span>
                    </div>
                  )}
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full font-bold text-xs tracking-wide uppercase">
                    {post.category || '博客'}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <time>{post.date}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>预计 5 分钟</span>
                  </div>
                </div>

                <Link to={`/blog/${post.id}`} className="block group-hover:text-blue-600 transition-colors">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-bold group/btn"
                  >
                    阅读全文 
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))
          ) : (
            <div className="text-center py-20 text-gray-500">
              没有找到相关文章
            </div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/categories" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-zinc-900 text-gray-900 dark:text-white font-bold shadow-3d hover:shadow-2xl hover:-translate-y-1 transition-all border border-zinc-100 dark:border-white/10">
            查看所有分类文章 <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
