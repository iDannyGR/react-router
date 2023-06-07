import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { usePost } from '@/context/post';
import { roles } from '@/models/authUser';

export const usePostdta = () => {

  const { post } = useParams();
  const { user } = useAuth();
  const Post = usePost();
  const navigate = useNavigate();
  const dta = Post.post.find((e) => e.slug === post);
  const ifdelete =
    user?.role === roles.ADMIN || user?.role === roles.EDITOR || dta?.author === user?.username;
 
  const deleteHandler = (slug: string) => {
    Post.deletePost(slug);
    navigate('/blog');
  };

  return { dta, ifdelete, deleteHandler }

};
