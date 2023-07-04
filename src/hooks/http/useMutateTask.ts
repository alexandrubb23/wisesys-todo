import { useQueryClient, useMutation } from '@tanstack/react-query';

import useToast from '../useToast';
import { Task } from '../../components/common/models';
import taskClient from '../../services/task-service';
import { PartialTask } from '../../components/Tasks/models';

const useMutateTask = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const onSuccess = (task: Task) => {
    queryClient.invalidateQueries({
      queryKey: ['tasks'],
    });

    toast.success('Success', `Task ${task.title} was saved.`);
  };

  const onError = (error: Error, task: PartialTask) => {
    // A service can be used to log the error to a service like Sentry
    console.error(error);

    toast.error(`Error saving ${task.title}`, error.message);
  };

  const createTask = useMutation({
    mutationFn: (task: PartialTask) => taskClient.create(task),
    onSuccess,
    onError,
  });

  const editTask = useMutation({
    mutationFn: (task: Task) => taskClient.update(task.id, task),
    onSuccess,
    onError,
  });

  const create = (task: PartialTask) => {
    createTask.mutate(task);
  };

  const update = (task: Task) => {
    editTask.mutate(task);
  };

  return { create, update };
};

export default useMutateTask;
