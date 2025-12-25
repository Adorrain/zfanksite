import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Helper to generate IDs from heading text
const generateId = (children) => {
  if (!children) return '';
  // Flatten children if array, though usually strings for headings
  const text = Array.isArray(children) 
    ? children.map(child => (typeof child === 'string' ? child : '')).join('') 
    : (typeof children === 'string' ? children : '');
    
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/^-+|-+$/g, ''); // Trim hyphens
};

export default function MarkdownRenderer({ content }) {
  if (!content) return null;

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkUnwrapImages]}
      components={{
        code({  inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <div className="relative group rounded-xl overflow-hidden my-8 shadow-2xl bg-[#1e1e1e]">
              {/* Mac-style Window Header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#252526] flex items-center px-4 border-b border-[#333] z-10 select-none">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                </div>
                <div className="flex-1 text-center mr-14 font-mono text-xs text-gray-400">
                  {match[1]}
                </div>
              </div>
              
              {/* Code Content */}
              <div className="pt-10 overflow-x-auto">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  showLineNumbers={true}
                  wrapLines={true}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    fontSize: '0.9em',
                    lineHeight: '1.6',
                    backgroundColor: 'transparent', // Make transparent to avoid double background
                  }}
                  lineNumberStyle={{
                    minWidth: '2.5em',
                    paddingRight: '1em',
                    color: '#6e7681',
                    textAlign: 'right'
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            </div>
          ) : (
            <code 
              className="bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded font-mono text-sm border border-gray-200 dark:border-gray-700" 
              {...props}
            >
              {children}
            </code>
          );
        },
        // Custom Headings with IDs for TOC
        h1: ({ ...props}) => <h1 id={generateId(props.children)} className="scroll-mt-24" {...props} />,
        h2: ({ ...props}) => <h2 id={generateId(props.children)} className="scroll-mt-24" {...props} />,
        h3: ({ ...props}) => <h3 id={generateId(props.children)} className="scroll-mt-24" {...props} />,
        
        // Styled Images
        img: ({ ...props}) => (
          <figure className="my-10">
            <img 
              className="rounded-2xl shadow-lg w-full object-cover max-h-[600px]" 
              {...props} 
              alt={props.alt || ''} 
            />
            {props.alt && (
              <figcaption className="text-center text-gray-500 text-sm mt-3 italic">
                {props.alt}
              </figcaption>
            )}
          </figure>
        ),
        
        // Styled Links
        a: ({ ...props}) => (
          <a 
            className="text-blue-600 dark:text-blue-400 hover:underline decoration-2 underline-offset-2 font-medium transition-colors" 
            {...props} 
            target="_blank" 
            rel="noopener noreferrer" 
          />
        ),
        
        // Styled Blockquotes
        blockquote: ({...props}) => (
          <blockquote 
            className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-6 py-4 my-8 rounded-r-lg italic text-gray-700 dark:text-gray-300 not-italic" 
            {...props} 
          />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
