import React from 'react';
import { Post } from '@/models/Post';
import { } from '@/assets/postData';
import { useParams } from 'react-router-dom';
import { blogdata } from '@/assets/postData'
import { Post } from '@/models/Post'

interface slug {
    slug: Post['slug']
}

const Post = ():React.ReactElement =>{ 
const { slug } = useParams();
const dta = blogdata.find()
return(
    <section className=''>
        <h1>{post.title}</h1>
        <h3>{post.author}</h3>
        <p>{post.content}</p>
    </section>
    )
  }
export default Post

