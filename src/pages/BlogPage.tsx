import React from 'react';
import { Outlet } from 'react-router-dom';
import BlogLink from '@/components/BlogLink';
import { usePost } from '@/context/post';
import { useAuth } from '@/context/auth';
import AddPost from '@/components/AddPost/AddPost';
import AddPostButton from '@/components/AddPostButton';

const BlogPage = () => {
  
  const { post, openModal } = usePost();
  const { user } = useAuth();
  return (
    <section className="w-full h-[100vh] flex flex-col items-center p-4">
      <h1 className="text-4xl mt-36 text-center">Post Recientes</h1>
      <ul className="m-6 flex items-center justify-center">
        {post.map((article) => (
          <BlogLink post={article} key={article.id} />
        ))}
      </ul>
      <Outlet />
      {openModal && user?.username && <AddPost />}
      <AddPostButton />
    </section>
  );
}

export default BlogPage

//Outlet use to create routes into other routes
//depend location of component rendering in the page
