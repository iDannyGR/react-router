import { USER, roles } from '@/models/authUser';


export const USERS: USER[] = [
  {
    username: 'idany',
    password: 'admin',
    role: roles.ADMIN
  },
  {
    username: 'dannette',
    password: 'dana',
    role: roles.EDITOR
  },
  {
    username: 'ramiro',
    password: 'ramiro',
    role: roles.USER
  }
];
