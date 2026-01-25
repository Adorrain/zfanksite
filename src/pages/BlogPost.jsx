import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, List, Clock, Tag } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import matter from 'gray-matter';
import MarkdownRenderer from '../components/MarkdownRenderer';
import posts from '../posts.json';
import { generateId } from '../utils/slugify';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [frontmatter, setFrontmatter] = useState({});

  const meta = useMemo(() => posts.find(p => p.id === slug), [slug]);
  
  const postData = { ...meta, ...frontmatter };


  useEffect(() => {
    if (!meta) {
      navigate('/blog');
    }
  }, [meta, navigate]);


  useEffect(() => {
    if (!meta) return;
    const fetchPath = new URL(`/posts/${meta.filename}`, window.location.origin).href;
    fetch(fetchPath)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load post`);
        return res.text();
      })
      .then(text => {
        let rawContent = text;
        if (text.startsWith('---')) {
          try {
            const parsed = matter(text);
            rawContent = parsed.content;
            setFrontmatter(parsed.data);
          } catch (error) {
             console.warn("Frontmatter parsing failed, trying manual parsing", error);
             const parts = text.split('---');
             if (parts.length >= 3) {
                rawContent = parts.slice(2).join('---').trim();
                const fmLines = parts[1].split('\n');
                const manualData = {};
                fmLines.forEach(line => {
                    const match = line.match(/^\s*([a-zA-Z0-9_]+):\s*(.+)$/);
                    if (match) {
                        let key = match[1].trim();
                        let value = match[2].trim();
                        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                            value = value.slice(1, -1);
                        }
                        manualData[key] = value;
                    }
                });
                setFrontmatter(manualData);
             }
          }
        }
        setContent(rawContent);
        
        const headings = rawContent.match(/^(#{1,3})\s+(.+)$/gm) || [];
        const tocData = headings.map(heading => {
          const level = heading.match(/^(#+)/)[0].length;
          const text = heading.replace(/^#+\s+/, '').trim();
          const id = generateId(text) || 'section';
          return { level, text, id };
        });
        setToc(tocData);
        
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load markdown:", err);
        setLoading(false);
        setContent(`# 加载失败\n\n无法加载文章内容。`);
      });
  }, [meta]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    const headingElements = document.querySelectorAll('h1, h2, h3');
    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [content]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="animate-pulse text-xl text-gray-500">正在加载文章...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-12 pb-24 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 max-w-7xl mb-8">
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
        >
          <ArrowLeft size={20} /> 返回博客列表
        </button>
      </div>

      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 lg:col-start-1"
        >
          {postData && (
            <header className="mb-12 pb-8 border-b border-gray-100 dark:border-gray-800">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold">
                  {postData.category || '未分类'}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <time>{postData.date}</time>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                {postData.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {postData.description}
              </p>
            </header>
          )}

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
            <MarkdownRenderer content={content} />
          </div>
        </motion.article>

        <aside className="hidden lg:block lg:col-span-4 relative">
          <div className="sticky top-24">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-white/10 shadow-3d hover:shadow-2xl hover:shadow-zinc-300/60 dark:hover:shadow-black/70 transition-shadow duration-300">
              <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <List size={20} />
                <span>目录</span>
              </div>
              
              <nav className="flex flex-col gap-1 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                {toc.length > 0 ? toc.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-3 text-sm rounded-lg transition-all duration-200 border-l-2 ${
                      activeId === item.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-500 font-medium translate-x-1'
                        : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    style={{ marginLeft: `${(item.level - 1) * 12}px` }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      setActiveId(item.id);
                    }}
                  >
                    {item.text}
                  </a>
                )) : (
                  <p className="text-gray-400 text-sm italic">暂无目录</p>
                )}
              </nav>
            </div>

            {postData && (
              <div className="mt-6 bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-white/10 shadow-3d hover:shadow-2xl hover:shadow-zinc-300/60 dark:hover:shadow-black/70 transition-shadow duration-300">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Tag size={16} /> 标签
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(() => {
                    const tags = postData.tags 
                      ? (Array.isArray(postData.tags) 
                          ? postData.tags 
                          : String(postData.tags).split(/[,，]/).map(t => t.trim()).filter(Boolean))
                      : [];
                      
                    return tags.length > 0 ? tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                        #{tag}
                      </span>
                    )) : (
                      <span className="text-gray-400 text-xs">暂无标签</span>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
