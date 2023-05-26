import React from 'react';
import type { PropsWithChildren } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

type loginData ={
  username:string | null,
  password:string | null,
  admin:boolean
}
interface Auth {
  user: loginData | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const adminList:string[] = ['Irisval', 'idany','dannete'];

const AuthContext = React.createContext({});

function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<loginData>({ username: null, password: null });

  const login = (username:string, password:string) => {
   const isAdmin = adminList.find(admin => admin===username);
    setUser({ ...user, username, password, isAdmin });
    navigate('/profile');
  };

  const  logout = () => {
    setUser({username:null, password:null});
    navigate('/');
  }

  const auth: Auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const authContext = React.useContext(AuthContext) as Auth;
  return authContext;
}

function ProtectedRoute(props: ProtectedRouteProps): React.ReactElement {
  const { user } = useAuth();

  if (!user?.username) {
    return <Navigate to="/" />;
  }
  return <>{props.children}</>;
}

export { AuthProvider, useAuth, ProtectedRoute };
