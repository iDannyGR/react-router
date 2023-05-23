import LoginForm from '@/components/LoginForm';
import React from 'react';

const LoginPage = ():React.ReactElement =>  (
      <section className='w-full h-[100vh] flex flex-col items-center justify-center'>
        <LoginForm />
      </section>    
  )


export default LoginPage