import React from 'react';
import {Link, NavLink} from 'react-router-dom';
 type URL = {
  id:number,
  url:string,
  name:string
 };

const linkUrl:URL[] = [
  {
    id: 0,
    url: '/',
    name: 'home'
  },
  {
    id: 1,
    url: '/blog',
    name: 'blog'
  }, 
  {
  id:2,
  url:'/profile',
  name:'My Profile'
  }
];

const Menu = (): React.ReactElement => (
  <nav>
    <ul className="flex items-center justify-center shadow w-full h-14">
      {linkUrl.map((url) => (
        <li key={url.id} className="ml-5 font-semibold hover:text-blue-500">
          <Link to={url.url}> {url.name} </Link>
        </li>
      ))}
      {linkUrl.map((url) => (
        <li key={url.id} className="ml-5 font-semibold">
          <NavLink
            to={url.url}
            className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
          >
            {url.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu