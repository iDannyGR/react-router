import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';

const EditProfile = ():React.ReactElement => {
    const navigate =  useNavigate();
    const { edit }= useAuth();
    const [updateName, setUpdateName] = React.useState<string>('');

    const updateUserName = (e)=>{
      e.preventDefault();
      updateName ? edit(updateName) : null;
    }

  return (
    <section className="w-full h-[100vh] flex flex-col items-center justify-center">
      <form
        className="border w-[400px] h-[500px] flex flex-col items-center justify-center space-y-7 rounded-xl shadow-lg"
        onSubmit={ updateUserName }
      >
        <label className="font-semibold">Cambiar nombre</label>
        <input
          type="text"
          value={updateName}
          className="shadow-lg rounded-2xl border w-46 bg-gray-50 text-gray-900 pl-10 p-2.5 focus:outline-blue-700"
          onChange={ e => setUpdateName(e.target.value)}
        />
        <div className="space-x-5">
          <button className="rounded-2xl w-40 h-14 bg-blue-500 shadow-lg text-white hover:text-black">
            guardar Cambios
          </button>
          <button
            className="rounded-2xl w-40 h-14 bg-blue-500 shadow-lg text-white hover:text-black"
            onClick={() => navigate(-1)}
          >
            regesar
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditProfile