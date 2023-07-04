import { Task } from '../components/common/models';
import APIClient from './api-client';

const tasksClient = new APIClient<Task[]>('/tasks');

export default tasksClient;
