import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/',
});

class APIClient<T> {
  constructor(private endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then(res => res.data);
  };

  getOne = (id: number | string) => {
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data);
  };

  create = (data: Partial<T>) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  };

  update = (id: number, data: T) => {
    console.log(`${this.endpoint}/${id}`);
    return axiosInstance
      .put<T>(`${this.endpoint}/${id}`, data)
      .then(res => res.data);
  };
}

export default APIClient;
