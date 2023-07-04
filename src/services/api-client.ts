import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173/api',
});

class APIClient<T> {
  constructor(private ebdpoint: string) {
    this.ebdpoint = ebdpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.ebdpoint, config).then(res => res.data);
  };

  getOne = (id: number | string) => {
    return axiosInstance.get<T>(`${this.ebdpoint}/${id}`).then(res => res.data);
  };
}

export default APIClient;
