import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Categories from './pages/Categories';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<div className="p-20 text-center text-xl text-gray-500">关于页面正在建设中...</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
