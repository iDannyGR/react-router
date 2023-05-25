import React, { useContext, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

type loginData ={
  username:string | null,
  password:string | null
}
interface Auth {
  user: loginData | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext({});

function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [user, setUser] = useState<loginData>({ username: null, password: null });

  const login = (username:string, password:string) => {
    setUser({ ...user, username: username, password });
    navigate('/profile');
    console.log(user);
  };

  const  logout = () => {
    setUser({username:null, password:null});
    navigate('/');
  }

  const auth: Auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const authContext = useContext(AuthContext) as Auth;
  return authContext;
}

export { AuthProvider, useAuth };
