import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { Task } from '../components/common/models';
import tasksClient from '../services/tasks-service';

const useTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: tasksClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useTasks;
