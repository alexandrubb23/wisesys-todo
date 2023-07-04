import { UserAPIClient } from './user-api-client.service';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default new UserAPIClient('/users');
