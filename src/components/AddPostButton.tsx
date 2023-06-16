import React from 'react';
import { usePost } from '@/context/post';
import { useAuth } from '@/context/auth';

const AddPostButton = ():React.ReactElement => {
 const { openModal, setOpenModal}= usePost();
 const { user } = useAuth();

     const onclick=()=>{
            setOpenModal(!openModal)
        };

  return (
    <div className='absolute bottom-36 right-32'>
      {user?.username && (
        <button
          className=" w-16 h-16 bg-blue-900 text-white p-2 rounded-full shadow-lg shadow-zinc-500"
          onClick={onclick}
        >
          add
        </button>
      )}
    </div>
  );
}

export default AddPostButton;