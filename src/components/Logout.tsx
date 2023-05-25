import React from 'react'
import { useAuth } from '@/context/auth' 
const Logout = () => {
    const { logout } = useAuth()
    const useLogout = (e)=>{
        e.preventDefault();
        logout();
    }

  return (
    <form onSubmit={useLogout}>
        <button 
        type='submit'
        className='absolute right-10 w-14 shadow-xl font-bold text-red-600'>
            Exit
        </button>
    </form>
  )
}

export default Logout