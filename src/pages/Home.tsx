import React from 'react';
import { USERS } from '@/assets/usersDta';

const Home = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col items-center  justify-center text-center space-y-10">
      <h1 className="text-3xl font-bold">Proyecto React Router DOM</h1>
      <div className="border rounded-lg w-[450px] h-96 shadow-lg p-4 space-y-10">
        <p>puedes usar los siguientes usuarios para ingresar</p>
        <table className="min-w-full">
          <thead>
            <tr className="h-10 border bg-black text-white">
              <th>Nombre</th>
              <th>Password</th>
              <th>nivel</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-10 border-b">
              <td>{USERS[0].username}</td>
              <td>{USERS[0].password}</td>
              <td>{USERS[0].role}</td>
            </tr>
            <tr className="h-10 border-b">
              <td>{USERS[1].username}</td>
              <td>{USERS[1].password}</td>
              <td>{USERS[1].role}</td>
            </tr>
            <tr className="h-10 border-b">
              <td>{USERS[2].username}</td>
              <td>{USERS[2].password}</td>
              <td>{USERS[2].role}</td>
            </tr>
          </tbody>
        </table>
        <p>puedes ingresar con cualquier usuario/password que se te ocurra pero sera por defecto USER</p>
      </div>
    </section>
  );
};

export default Home;
