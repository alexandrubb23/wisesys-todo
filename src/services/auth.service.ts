import { User } from './user.service';

const key = 'user';

const saveUser = (user: User) => {
  localStorage.setItem(key, JSON.stringify(user));
};

const getUser = (): User | null => {
  const user = localStorage.getItem(key);
  return user ? JSON.parse(user) : null;
};

const removeUser = () => {
  localStorage.removeItem(key);
};

export default {
  getUser,
  saveUser,
  removeUser,
};
