import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Code2, Database, Terminal } from 'lucide-react';

const SkillPill = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
    <Icon size={16} className="text-blue-500" />
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
  </div>
);

const TimelineItem = ({ year, title, company, description }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:border-l-0 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-900" />
    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1 block">{year}</span>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{company}</div>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
               {/* Replace with actual avatar if available */}
               <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Z</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            喜欢探索新技术，并通过博客分享学习心得。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Skills */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <Terminal className="text-blue-500" /> 技术栈
            </h2>
            <div className="flex flex-wrap gap-3">
              <SkillPill icon={Code2} label="React / Next.js" />
              <SkillPill icon={Code2} label="javaScript" />
              <SkillPill icon={Database} label="Node.js" />
              <SkillPill icon={Database} label="PostgreSQL" />
              <SkillPill icon={Terminal} label="Git / CI/CD" />
              <SkillPill icon={Code2} label="go" />
              <SkillPill icon={Code2} label="docker" />            
              </div>
          </motion.div>
          {/* Contact */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
             className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">保持联系</h2>
            <p className="text-blue-100 mb-8">
              无论是项目合作、技术交流，还是交个朋友，都欢迎随时联系我。
            </p>
            <div className="space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                <Mail size={20} />
                <span>lh0115zyf@163.com</span>
              </a>
              <a href="https://github.com/Adorrain" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                <Github size={20} />
                <span>@Adorrain</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
