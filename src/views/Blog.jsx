import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import HeaderBlog from '../components/HeaderBlog';
import BlogContent from '../components/Blog';
import Rss from '../components/Rss';
import './style.css';

const Blog = () => {
  return (
    <div className="main-content">
      <Rss />
      <HeaderBlog />
      <LazyLoadComponent>
        <BlogContent />
      </LazyLoadComponent>
    </div>
  )
};

export default Blog;
