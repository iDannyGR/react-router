import { PostDta } from '@/models/PostDta';
import { usePost } from '@/context/post';
import { useAuth } from '@/context/auth';
import { generarId } from '@/components/AddPost/hook/useRamdomID';
import { useNavigate } from 'react-router-dom';

export const useCreatePost = (post: PostDta) => {
   let create:boolean= false;
   
   const { createPost } = usePost();
       const [title, setTitle] = React.useState('');
       const [content, setContent] = React.useState('');
       const { user } = useAuth();
       const navigate = useNavigate();
      
       const handleCreatePost = (e) =>{
         e.preventDefault();
         const id = generarId(8);
         const author = user?.username;
         const slug = title.replaceAll(' ', '-');
        createPost({id, slug, title, content, author });
     }
          if (
            post.id !== undefined &&
            post.slug !== undefined &&
            post.title !== undefined &&
            post.content !== undefined &&
            post.author !== undefined &&
            post.id !== null &&
            post.slug !== null &&
            post.title !== null &&
            post.content !== null &&
            post.author !== null
          ) {
            createPost(post);
             create = true;
          } else {
            console.log('Error: Los campos no pueden estar vacíos');
          }
        }

}