import { Task } from '../components/common/models';
import APIClient from './api-client';

const taskClient = new APIClient<Task>('/tasks');

export default taskClient;
