import APIClient, { axiosInstance } from './api-client.service';
import { User } from './user.service';

export class UserAPIClient extends APIClient<User> {
  private uri = '/login';

  constructor(protected endpoint: string) {
    super(endpoint);
  }

  login = (email: string, password: string) => {
    return axiosInstance
      .post<User>(this.endpoint + this.uri, { email, password })
      .then(res => res.data);
  };
}
