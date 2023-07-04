import APIClient, { axiosInstance } from './api-client.service';
import { User } from './user.service';

const key = 'user';

const saveUser = (user: User) => {
  localStorage.setItem(key, JSON.stringify(user));
};

const getUser = (): User | null => {
  const user = localStorage.getItem(key);
  return user ? JSON.parse(user) : null;
};

export class UserAPIClient extends APIClient<User> {
  constructor(protected endpoint: string) {
    super(endpoint);
  }

  login = (email: string, password: string) => {
    return axiosInstance
      .post<User>(this.endpoint + '/login', { email, password })
      .then(res => res.data);
  };
}

export default {
  getUser,
  saveUser,
};
