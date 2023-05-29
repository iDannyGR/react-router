interface Roles {
  admin: Role;
  editor: Role;
  visitor: Role;
}

interface Role {
  write: boolean;
  read: boolean;
  delete: boolean;
}

export const roles:Roles = {
  admin: {
    write: true,
    read: true,
    delete: true
  },
  editor: {
    write: true,
    read: true,
    delete: false
  },
  visitor: {
    write: false,
    read: true,
    delete: false
  }
};

