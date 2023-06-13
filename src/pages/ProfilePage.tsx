import React from 'react';
import { useParams } from 'react-router-dom';
import  Profile from '@/components/Profile';
import { useAuth } from '@/context/auth';
import { USERS } from '@/assets/usersDta';
import {ToastContainer, toast} from 'react-toastify';

const ProfilePage = (): React.ReactElement => {
  const { user } = useAuth();
  const { name } = useParams();

  toast.warn('usuario no encontrado')
  
  let dta = { };
      if (name && USERS.hasOwnProperty(name)) {
        dta = USERS[name];
      } else if (user && user.username === name) {
        dta = user;
      } else {
        return <ToastContainer />;
      }
  
    return (
      <Profile props={ dta } />
  );
};

export default ProfilePage;