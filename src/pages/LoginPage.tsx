import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/context/auth';
import React from 'react';
import { Navigate } from 'react-router-dom';

const LoginPage = ():React.ReactElement => {
    
  const { user } = useAuth();
  if(user?.username) {return <Navigate to={"/"}/>};
  
  return (
      <section className='w-full h-[100vh] flex flex-col items-center justify-center'>
        <LoginForm />
      </section>    
  )
}

export default LoginPage