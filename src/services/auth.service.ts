import { User } from './user.service';

const key = 'user';

const loginUser = (user: User) => {
  localStorage.setItem(key, JSON.stringify(user));
};

const getUser = (): User | null => {
  const user = localStorage.getItem(key);
  return user ? JSON.parse(user) : null;
};

export default {
  getUser,
  loginUser,
};
