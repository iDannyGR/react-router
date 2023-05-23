import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { blogdata } from '@/assets/postData';

const Post = (): React.ReactElement => {

  const { post } = useParams();
  const navigate = useNavigate();
  const dta = blogdata.find((e) => e.slug == post);
  if (!dta) {return  <p>loading....</p> }

return(
    <section className="w-full mt-4 flex flex-col items-center space-y-3">
      <h1 className='font-bold text-3xl'>{dta.title}</h1>
      <h3 className='font-semibold text-lg text-gray-600'>{dta.author}</h3>
      <p className='text-lg'>{dta.content}</p>
      <button 
      className='w-24 h-10 rounded-lg bg-blue-800 text-white'
      onClick={()=> navigate(-1)}
      >regresar</button>
    </section>
)};
export default Post;
