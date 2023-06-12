import React from 'react';
import type { PropsWithChildren } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { USERS } from '@/assets/usersDta';
import { USER, roles } from '@/models/authUser';

interface Auth {
  user: USER | null;
  login: (username: string, password: string) => void;
  edit: (username: string) => void;
  logout: () => void;
}

interface ProtectedRouteProps {
  children: React.ReactNode;
}

//start function to shared the context
const AuthContext = React.createContext({});

function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<USER>({username:'', password: '', role:roles.USER});

const login = (username: string, password: string) => {
  const validateUser = USERS.find((user) => user.username === username && user.password === password);

  if (validateUser) {
    setUser(validateUser);
  } else {
    const newUser = {
      username: username,
      password: password,
      role: roles.USER
    };
    setUser(newUser);
  }

  navigate(`/profile/${username}`);
};

  const edit = (username :string) => {
      setUser({...user, username });
      navigate(`/profile/${username}`);
  };

  const logout = () => {
    setUser({ username: '', password: '', role: roles.USER });
    navigate('/');
  };

  const auth: Auth = { user, login, edit, logout };

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
