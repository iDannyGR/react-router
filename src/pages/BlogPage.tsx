import React from 'react';
import { Outlet } from 'react-router-dom';
import BlogLink from '@/components/BlogLink';
import { blogdata } from '@/assets/postData'

const BlogPage = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col">
      <h1 className='text-4xl mt-16 text-center'>Que tecnologia te interesa mas?</h1>
      <ul className='m-6'>
      {blogdata.map((article) => (
        <BlogLink post={article} key={article.id} />
      ))}
      </ul>
      <Outlet />
    </section>
  );
}

export default BlogPage

//Outlet use to create routes into other routes
//depend location of component rendering in the page
