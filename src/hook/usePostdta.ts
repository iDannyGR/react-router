import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { usePost } from '@/context/post';

export const usePostdta = () => {

  const { post } = useParams();
  const { user } = useAuth();
  const Post = usePost();
  const navigate = useNavigate();
  const dta = Post.post.find((e) => e.slug === post);
  const ifdelete = user?.admin || dta?.author === user?.username;
 
  const deleteHandler = (slug: string) => {
    Post.deletePost(slug);
    navigate('/blog');
  };

  return { dta, ifdelete, deleteHandler }

};
