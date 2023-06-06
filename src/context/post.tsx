import React from 'react';
import type { PropsWithChildren } from 'react';
import { PostDta } from '@/models/PostDta';
import { blogdata } from '@/assets/postData'

interface Post {
  post: PostDta[],
  openModal: boolean,
  createPost: ({id, title, slug, content, author}:PostDta) => void,
  deletePost: (slug:PostDta['slug']) => void
  setOpenModal: (isOpen:boolean) => void
}

//start post provider
const PostContext = React.createContext({});

function PostProvider({ children }: PropsWithChildren) {
  
    const [post, setPost] = React.useState<PostDta[]>(blogdata);
    const [openModal, setOpenModal] = React.useState<boolean>(false);
      
    const createPost = ({id, title, slug, content, author}:PostDta) => {
        setPost([...post,{id, title, slug, content, author}]);
};
    const deletePost = (slug) =>{
      const result = post.filter(item => item.slug != slug); 
      setPost(result);
    } 

  const dtaPost:Post = { post, openModal, setOpenModal, createPost, deletePost };

  return <PostContext.Provider value={dtaPost}>{children}</PostContext.Provider>;
}

function usePost() {
  const postContext = React.useContext(PostContext) as Post;
  return postContext;
}

export {PostProvider, usePost}
//end AuthProvider
