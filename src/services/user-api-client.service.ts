import APIClient, { axiosInstance } from './api-client.service';
import { User } from './user.service';

export class UserAPIClient extends APIClient<User> {
  private loginUri = '/login';

  constructor(protected endpoint: string) {
    super(endpoint);
  }

  login = (email: string, password: string): Promise<User> => {
    return axiosInstance
      .post<User>(this.endpoint + this.loginUri, { email, password })
      .then(res => res.data);
  };
}
