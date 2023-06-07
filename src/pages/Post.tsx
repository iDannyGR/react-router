import React from 'react';
import { usePostdta } from '@/hook/usePostdta';
import { useNavigate } from 'react-router-dom';
import { usePost } from '@/context/post';
import { useAuth } from '@/context/auth';
const Post = (): React.ReactElement => {
  
const { user } = useAuth();
const {  dta, ifdelete, deleteHandler } = usePostdta()
const navigate = useNavigate();
 const { openModal, setOpenModal}= usePost();
  if (!dta) {
   return <p>loading....</p>;
 }
 const onclick=()=>{
  setOpenModal(!openModal)
 };

return (
  <section className="border w-full p-4 mt-10 flex flex-col justify-center space-y-3 rounded-xl shadow-lg md:w-[900px] md:h-[400px]">
    <h1 className="font-bold text-3xl">{dta.title}</h1>
    <h3 className="font-semibold text-lg text-gray-600">{dta.author}</h3>
    <p className="text-lg text-justify">{dta.content}</p>
    <div className="space-x-4">
      <button className="h-10 p-2 rounded-lg bg-blue-800 text-white" onClick={() => navigate(-1)}>
        regresar
      </button>
      {ifdelete && (
        <button
          className="h-10 p-2 rounded-lg bg-blue-800 text-white"
          onClick={() => deleteHandler(dta.slug)}
        >
          eliminar blog
        </button>
      )}
      { user?.username && <button 
      className=" w-20 bg-blue-900 text-white p-2 rounded-md shadow-lg shadow-zinc-500"
      onClick={onclick}>
        add Post
      </button>}
    </div>
      
  </section>
);};
export default Post;

//redirect in button logout
//  navigate('/', { replace: true });