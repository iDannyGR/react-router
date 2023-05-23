import React from 'react';
import { Link } from 'react-router-dom';
import { PostDta } from '@/models/PostDta';

interface Props {
  post: PostDta;
}

const BlogLink: React.FC<Props> = ({ post }): React.ReactElement => {
  return (
    <li className='mb-2 text-lg hover:text-blue-800 hover:font-semibold'>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};

export default BlogLink;
