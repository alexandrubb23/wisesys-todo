import { useQueryClient, useMutation } from '@tanstack/react-query';

import useToast from '../useToast';
import { Task } from '../../components/common/models';
import taskClient from '../../services/task-service';
import { PartialTask } from '../../components/Tasks/models';

const useMutateTask = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const addNewTask = useMutation({
    mutationFn: (task: PartialTask) => taskClient.create(task),
    onSuccess: (savedTask: Task) => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });

      toast.success('New task added', `Task ${savedTask.title} was added`);
    },
    onError: (error: Error, newTodo: PartialTask) => {
      // A service can be used to log the error to a service like Sentry
      console.error(error);
      toast.error(`Error adding ${newTodo.title}`, error.message);
    },
  });

  const create = (task: PartialTask) => {
    addNewTask.mutate(task);
  };

  return { create };
};

export default useMutateTask;
