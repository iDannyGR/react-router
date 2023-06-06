export enum roles  {
  ADMIN = 'administrador',
  EDITOR = 'editor',
  USER = 'user'
}

export interface USER {
  username: string,
  password:string,
  role:roles
}

