import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { Task } from '@/components/common/models';
import tasksClient from '@/services/tasks.service';

export const TASKS_QUERY_KEY = 'tasks';

const useTasks = () =>
  useQuery<Task[], Error>({
    queryKey: [TASKS_QUERY_KEY],
    queryFn: tasksClient.getAll,
    staleTime: ms('24h'),
  });

export default useTasks;
