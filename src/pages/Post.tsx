import React from 'react';
import { usePostdta } from '@/hook/usePostdta';
import { useNavigate } from 'react-router-dom';

const Post = (): React.ReactElement => {

const {  dta, ifdelete, deleteHandler } = usePostdta()
const navigate = useNavigate();
 
  if (!dta) {
   return <p>loading....</p>;
 }


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
    </div>
  </section>
);};
export default Post;

//redirect in button logout
//  navigate('/', { replace: true });