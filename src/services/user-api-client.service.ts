import APIClient, { axiosInstance } from './api-client.service';
import { User } from './user.service';

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
