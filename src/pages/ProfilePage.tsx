import React from 'react';
import { useAuth } from '@/context/auth'

const ProfilePage = () => {

  const {user} = useAuth();

  return (
    <div className="w-full h-[100vh] flex flex-col items-center  justify-center text-center">
      { user?.username }
    </div>
  );
}

export default ProfilePage