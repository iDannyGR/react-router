import React from 'react';
import { Outlet } from 'react-router-dom';
import BlogLink from '@/components/BlogLink';
import { usePost } from '@/context/post';
const BlogPage = () => {
  
  const { post } = usePost();
  
  return (
    <section className="w-full h-[100vh] flex flex-col items-center p-4">
      <button className='absolute right-6 top-40 bg-blue-900 text-white p-2 rounded-md shadow-lg shadow-zinc-500 md:right-46 lg:96'>add Post</button>
      <h1 className='text-4xl mt-36 text-center'>Post Recientes</h1>
      <ul className='m-6 flex items-center justify-center'>
      {post.map((article) => (
        <BlogLink post={article} key={article.slug} />
      ))}
      </ul>
      <Outlet />
    </section>
  );
}

export default BlogPage

//Outlet use to create routes into other routes
//depend location of component rendering in the page
