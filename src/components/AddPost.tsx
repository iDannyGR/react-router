import React from 'react'

const AddPost = () => {
  return (
    <form className="border w-full p-4 mt-10 space-y-9 flex flex-col justify-center rounded-xl shadow-lg md:w-[500px] md:h-[400px] ">
      <h3 className="font-semibold text-2xl text-center">Agregar Post</h3>
      <label className="">
        Titulo:
        <input
          type="text"
          placeholder="titulo del post"
          className="w-96 h-12 rounded-md p-2 ml-4 bg-slate-50 text-gray-800 shadow-md shadow-blue-200 focus:outline-blue-700"
        />
      </label>
      <label className="flex items-center">
        Contenido:
        <textarea
          placeholder="titulo del post"
          rows={4}
          cols={40}
          className="rounded-md p-2 bg-slate-50 ml-3 text-gray-800 shadow-md shadow-blue-200 focus:outline-blue-700"
        />
      </label>
    </form>
  );
}

export default AddPost