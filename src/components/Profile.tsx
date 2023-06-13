import React from 'react';
import { USER } from '@/models/authUser';
import { useNavigate } from 'react-router-dom';
import profile from '@/assets/profile-svgrepo-com.svg';


const Profile: React.FC<USER> = ({props}):React.ReactElement => {

    const navigate = useNavigate();
    return (
      <section className="w-full h-[100vh] flex flex-col items-center justify-center text-center">
          <div className="border border-blue-200 w-96 h-[500px] flex flex-col items-center justify-center space-y-5 rounded-xl shadow-inner shadow-blue-200">
            <img src={profile} alt="svg profile" className="w-24" />
            <h1 className="font-bold text-xl">USER NAME:</h1>
            <p className="rounded-md shadow shadow-blue-200 text-xl font-semibold text-blue-950 bg-slate-50 p-4">
              {props.username}
            </p>
            <p className="rounded-md shadow shadow-blue-200 text-xl font-semibold text-blue-950 bg-slate-50 p-4">
              {props.role}
            </p>
            {
              <button
                className="rounded-2xl w-40 h-14 bg-blue-500 shadow-lg text-white hover:text-black"
                onClick={() => navigate('/editprofile')}
              >
                editar perfil
              </button>
            }
          </div>
      </section>
    );
}

export default Profile