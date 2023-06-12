import React from 'react';
import {toast} from 'react-toastify'; 
import { usePost } from '@/context/post';
import { useAuth } from '@/context/auth';
import { generarId } from '@/components/AddPost/hook/useRamdomID';
import { useNavigate } from 'react-router-dom';

export const useCreatePost = () => {
   
   const { createPost,setOpenModal, openModal } = usePost();
       const [title, setTitle] = React.useState('');
       const [content, setContent] = React.useState('');
       const { user } = useAuth();
       const navigate = useNavigate();
      
       const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         const id = generarId(8);
         const author = user?.username;
         const slug = title.replaceAll(' ', '-');
         if (title.trim() !== '' && content.trim() !== '' && author !== undefined && author !== null) {
           createPost({ id, slug, title, content, author });
           navigate('/blog');
           setOpenModal(!openModal);
           toast.success('data create');
         } else {
           toast.warn('bad data', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           });
         }
       };
         
    return { setTitle, setContent, handleCreatePost, title, content };        
  
        }

