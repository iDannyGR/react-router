import React from 'react';
import BlogLink from '@/components/BlogLink';
import { blogdata } from '@/assets/postData'

const BlogPage = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col items-center  justify-center text-center">
      <h1>blog Page</h1>
      {blogdata.map((article) => (
        <BlogLink post={article} />
      ))}
    </section>
  );
}

export default BlogPage