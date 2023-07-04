import APIClient from './api-client.service';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default new APIClient<User>('/users');
