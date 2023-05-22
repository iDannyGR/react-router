import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '@/models/Post';

interface Props {
  post:Post
}

const BlogLink: React.FC<Props> = ({post}): React.ReactElement => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};

export default BlogLink