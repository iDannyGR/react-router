import React from 'react';
import { Link } from 'react-router-dom';
import { PostDta } from '@/models/PostDta';

interface Props {
  post: PostDta;
}

const BlogLink: React.FC<Props> = ({ post }): React.ReactElement => {
  return (
    <li className='ml-2 p-2 text-lg hover:text-blue-800 hover:font-semibold bg-slate-100 rounded-md shadow-md shadow-blue-200'>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};

export default BlogLink;
