import React from 'react';
import { useParams } from 'react-router-dom';
import  Profile from '@/components/Profile';
import { useAuth } from '@/context/auth';
import { USERS } from '@/assets/usersDta';
import {ToastContainer, toast} from 'react-toastify';

const ProfilePage = (): React.ReactElement => {
  const { user } = useAuth();
  const { name } = useParams();

  
  let dta = { };

  if (!user || user.username !== name ) {
    
    dta = USERS.find(user => user.username === name);

  } else if (user && user.username === name) {
    dta = user;
  } else {
        toast.warn('usuario no encontrado')
        return <ToastContainer />;
      }
  
    return (
      <Profile props ={ dta } />
  );
};

export default ProfilePage;