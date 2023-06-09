import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import profile from '@/assets/profile-svgrepo-com.svg';
import { USERS } from '@/assets/usersDta';

const ProfilePage = (): React.ReactElement => {
  const { user } = useAuth();
  const { name } = useParams();
  const navigate =  useNavigate();
  if (!user || user.username !== name) {
    const userFromUsers = USERS.find((user) => user.username === name);

    if (!userFromUsers) {
      return <p>Usuario no Existe</p>;
    }

    return (
      <section className="w-full h-[100vh] flex flex-col items-center justify-center text-center">
        <div className="border border-blue-200 w-96 h-96 flex flex-col items-center justify-center space-y-8 rounded-xl shadow-inner shadow-blue-200">
          <img src={profile} alt="svg profile" className="w-24" />
          <h1 className="font-bold text-xl">USER NAME:</h1>
          <p className="rounded-md shadow shadow-blue-200 text-xl font-semibold text-blue-950 bg-slate-50 p-4">
            {userFromUsers.username}
          </p>
          <p className="rounded-md shadow shadow-blue-200 text-xl font-semibold text-blue-950 bg-slate-50 p-4">
            {userFromUsers.role}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full h-[100vh] flex flex-col items-center justify-center text-center">
      <div className="border border-blue-200 w-96 h-96 flex flex-col items-center justify-center space-y-8 rounded-xl shadow-inner shadow-blue-200">
        <img src={profile} alt="svg profile" className="w-24" />
        <h1 className="font-bold text-xl">USER NAME:</h1>
        <p className="rounded-md shadow shadow-blue-200 text-xl font-semibold text-blue-950 bg-slate-50 p-4">
          {user?.username}
        </p>
        <button className='rounded-2xl w-40 h-14 bg-blue-500 shadow-lg text-white hover:text-black'
        onClick={ ()=> navigate('/editprofile') }>editar perfil</button>
      </div>
    </section>
  );
};

export default ProfilePage;