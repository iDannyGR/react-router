import React from 'react';
import { NavLink} from 'react-router-dom';
import Logout from './Logout';
import { useAuth } from '@/context/auth';

 type URL = {
  id:number,
  url:string,
  name:string,
  private:boolean
 };

const linkUrl: URL[] = [
  {
    id: 0,
    url: '/',
    name: 'home',
    private: false
  },
  {
    id: 1,
    url: '/blog',
    name: 'blog',
    private: false
  },
  {
    id: 2,
    url: '/profile',
    name: 'My Profile',
    private: true
  },
  {
    id: 3,
    url: '/login',
    name: 'Login',
    private: false
  }
];

const Menu = (): React.ReactElement => {
    const { user }= useAuth()
  return (
  <nav>
    <ul className="absolute flex items-center justify-center shadow w-full h-14">
      {/* {linkUrl.map((url) => (
        <li key={url.id} className="ml-5 font-semibold hover:text-blue-500">
          <Link to={url.url}> {url.name} </Link>
        </li>
      ))} */}
      { linkUrl.map( url  => {
        
        if((url.private && !user?.username) || 
        (url.url === '/login' && user?.username)) return null;

        return(
        <li 
          key={url.id} 
          className="ml-5 font-semibold"
          >
          <NavLink
            to={url.url}
            className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
          >
            {url.name}
          </NavLink>
        </li>)
        }
)}
    </ul>
      <Logout />
  </nav>
);
      }
export default Menu