import React from 'react'
import { useAuth } from '@/context/auth' 
const Logout = () => {
    const { logout, user } = useAuth();
    const useLogout = (e)=>{
        e.preventDefault();
        logout();
    }

  return (
    <form onSubmit={useLogout}
    className='absolute right-20 mt-4'>
        <button 
        type='submit'
        className={(!user?.username) ? 'text-gray-500' : 'text-red-500 font-bold'}
        disabled={(!user?.username)?true:false}>
            Exit
        </button>
    </form>
  )
}

export default Logout