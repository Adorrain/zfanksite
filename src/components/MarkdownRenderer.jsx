import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

const generateId = (children) => {
  if (!children) return '';
  const text = Array.isArray(children) 
    ? children.map(child => (typeof child === 'string' ? child : '')).join('') 
    : (typeof children === 'string' ? children : '');
    
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') 
    .replace(/\s+/g, '-')   
    .replace(/^-+|-+$/g, ''); 
};

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
      title="复制代码"
    >
      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
    </button>
  );
};

export default function MarkdownRenderer({ content }) {
  if (!content) return null;

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkUnwrapImages]}
      components={{
        code({  inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          const codeString = String(children).replace(/\n$/, '');

          return !inline && match ? (
            <div className="relative group rounded-xl overflow-hidden my-4 shadow-2xl bg-[#1e1e1e]">
              {/* Mac-style Window Header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#252526] flex items-center px-4 border-b border-[#333] z-10 select-none justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                </div>
                <div className="font-mono text-xs text-gray-400 absolute left-1/2 transform -translate-x-1/2">
                  {match[1]}
                </div>
                <CopyButton text={codeString} />
              </div>

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
                    backgroundColor: 'transparent',
                  }}
                  lineNumberStyle={{
                    minWidth: '2.5em',
                    paddingRight: '1em',
                    color: '#6e7681',
                    textAlign: 'right'
                  }}
                  {...props}
                >
                  {codeString}
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
        h1: ({ children, ...props}) => {
          const getText = (node) => {
             if (typeof node === 'string') return node;
             if (Array.isArray(node)) return node.map(getText).join('');
             if (node?.props?.children) return getText(node.props.children);
             return '';
          };
          const text = getText(children);
          return <h1 id={generateId(text)} className="scroll-mt-24" {...props}>{children}</h1>;
        },
        h2: ({ children, ...props}) => {
          const getText = (node) => {
             if (typeof node === 'string') return node;
             if (Array.isArray(node)) return node.map(getText).join('');
             if (node?.props?.children) return getText(node.props.children);
             return '';
          };
          const text = getText(children);
          return <h2 id={generateId(text)} className="scroll-mt-24" {...props}>{children}</h2>;
        },
        h3: ({ children, ...props}) => {
          const getText = (node) => {
             if (typeof node === 'string') return node;
             if (Array.isArray(node)) return node.map(getText).join('');
             if (node?.props?.children) return getText(node.props.children);
             return '';
          };
          const text = getText(children);
          return <h3 id={generateId(text)} className="scroll-mt-24" {...props}>{children}</h3>;
        },

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

        a: ({ ...props}) => (
          <a 
            className="text-blue-600 dark:text-blue-400 hover:underline decoration-2 underline-offset-2 font-medium transition-colors" 
            {...props} 
            target="_blank" 
            rel="noopener noreferrer" 
          />
        ),

        blockquote: ({...props}) => (
          <blockquote 
            className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-6 py-3 my-4 rounded-r-lg italic text-gray-700 dark:text-gray-300 not-italic" 
            {...props} 
          />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
