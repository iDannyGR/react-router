import React from 'react';
import { useCreatePost } from './hook/useCreatePost';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const AddPost = ():React.ReactElement => {

 const { setTitle, setContent, create, handleCreatePost  } = useCreatePost();


  return (
    <form 
    className="border w-full p-4 mt-10 space-y-9 flex flex-col justify-center rounded-xl shadow-lg md:w-[500px] md:h-[400px] "
    onSubmit={handleCreatePost}>
      <h3 className="font-semibold text-2xl text-center">Agregar Post</h3>
      <label className="">
        Titulo:
        <input
          value={''}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="titulo del post"
          className="w-96 h-12 rounded-md p-2 ml-4 bg-slate-50 text-gray-800 shadow-md shadow-blue-200 focus:outline-blue-700"
        />
      </label>
      <label className="flex items-center">
        Contenido:
        <textarea
          value={''}
          onChange={(e) => setContent(e.target.value)}
          placeholder="titulo del post"
          rows={4}
          cols={40}
          className="rounded-md p-2 bg-slate-50 ml-3 text-gray-800 shadow-md shadow-blue-200 focus:outline-blue-700"
        />
      </label>
      <div className='flex justify-center space-x-6'>
        <button 
          className="rounded-2xl w-32 h-10 bg-blue-500 shadow-lg text-white hover:text-black"
        >
          Guardar
        </button>
        <button 
          className="rounded-2xl w-32 h-10 bg-red-500 shadow-lg text-white hover:text-black"
          onClick={()=> navigate('/blog') }
          >
          salir
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default AddPost