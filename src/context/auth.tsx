import React from 'react';
import type { PropsWithChildren } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

type loginData ={
  username:string | null,
  password:string | null,
  admin?:boolean
}
interface Auth {
  user: loginData | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const adminList: string[] = ['Irisval', 'idany', 'dannete', 'Andrés Rodríguez'];


//start function to shared the context
const AuthContext = React.createContext({});

function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<loginData>({ username: null, password: null, admin:false });

  const login = (username:string, password:string) => {
   const isAdmin = adminList.includes(username);
   
    setUser({ ...user, username, password, admin: isAdmin });
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
//end to shared context and providers

/**
 * This is a TypeScript React function that checks if a user is authenticated and returns a navigation
 * component if they are not.
 * @param {ProtectedRouteProps} props - The props parameter is an object that contains the properties
 * passed to the ProtectedRoute component. These properties can be accessed using dot notation, for
 * example, props.children to access the child components passed to the ProtectedRoute component.
 * @returns The `ProtectedRoute` component is being returned, which either renders the children passed
 * to it or navigates to the home page if the user is not authenticated.
 */
function ProtectedRoute(props: ProtectedRouteProps): React.ReactElement {
  const { user } = useAuth();

  if (!user?.username) {
    return <Navigate to="/" />;
  }
  return <>{props.children}</>;
}

export { AuthProvider, useAuth, ProtectedRoute };
