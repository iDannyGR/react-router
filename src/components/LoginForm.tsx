import { useAuth } from '@/context/auth';
import React from 'react';




const LoginForm = ():React.ReactElement => {
   const [user, setUser] = React.useState<string>('');
   const [password, setPassword] = React.useState<string>('');
   const auth = useAuth();   
   const useLogin = (e)=>{
    e.preventDefault()
     auth.login(user, password);
    };
    
    return (
      <form
        className="border w-[400px] h-[500px] flex flex-col items-center justify-center space-y-7 rounded-xl shadow-lg"
        onSubmit={useLogin}
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <label htmlFor="">Usuario</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="shadow-lg rounded-2xl border w-46 bg-gray-50 text-gray-900 pl-10 p-2.5 focus:outline-blue-700"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow-lg rounded-2xl border w-46 bg-gray-50 text-gray-900 pl-10 p-2.5 focus:outline-blue-700"
        />
        <button
          className="rounded-2xl w-40 h-14 bg-blue-500 shadow-lg text-white hover:text-black"
          type="submit"
        >
          Start Session
        </button>
      </form>
    );
   };

export default LoginForm