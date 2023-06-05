import React from 'react';
import {toast} from 'react-toastify';
import { usePost } from '@/context/post';
import { useAuth } from '@/context/auth';
import { generarId } from '@/components/AddPost/hook/useRamdomID';
import { useNavigate } from 'react-router-dom';

export const useCreatePost = () => {
   let create:boolean= false;
   
   const { createPost } = usePost();
       const [title, setTitle] = React.useState('');
       const [content, setContent] = React.useState('');
       const { user } = useAuth();
       const navigate = useNavigate();
      
       const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         const id = generarId(8);
         const author = user?.username;
         const slug = title.replaceAll(' ', '-');
         if (
           title !== undefined &&
           slug !== undefined &&
           content !== undefined &&
           author !== undefined &&
           slug !== null &&
           title !== null &&
           content !== null &&
           author !== null
         ) {
           createPost({ id, slug, title, content, author });
           navigate('/home');
           create = true;
           toast.success('data create')
         }
         else{
          toast.warn('bad data')
         }
       };
         
    return { setTitle, setContent, create, handleCreatePost };        
  
        }

