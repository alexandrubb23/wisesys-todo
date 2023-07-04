import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import APIClient from '../services/api-client';
import { Task } from '../components/common/models';

const apiClient = new APIClient<Task[]>('/tasks.json');

const useTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useTasks;
