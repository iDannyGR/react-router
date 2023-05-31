import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { blogdata } from '@/assets/postData';
import { useAuth } from '@/context/auth';
import { usePost } from '@/context/post';

export const usePostdta = () => {
  const { post } = useParams();
  const { deletePost } = usePost();
  const navigate = useNavigate();
  const { user } = useAuth();
  const dta = blogdata.find((e) => e.slug === post);
  const ifdelete = user?.admin || dta?.author === user?.username;
 
  const deleteHandler = (slug: string) => {
    deletePost(slug);
    navigate('/blog');
  };

  return { dta, ifdelete, deleteHandler }

};
