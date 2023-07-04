import APIClient from './api-client';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default new APIClient<User>('/users');
