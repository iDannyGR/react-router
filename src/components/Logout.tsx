import React from 'react'

const Logout = () => {

    const useLogout = (e)=>{
        e.preventDefault();
        console.log('hola mundo')
    }

  return (
    <form onSubmit={useLogout}>
        <label htmlFor="">
            LogOut
        </label>
        <button type='submit'>
            Exit
        </button>
    </form>
  )
}

export default Logout