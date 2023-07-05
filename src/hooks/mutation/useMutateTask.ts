import { useQueryClient, useMutation } from '@tanstack/react-query';

import useToast from '@/hooks/useToast';
import { Task } from '@/components/common/models';
import taskClient from '@/services/task.service';
import { PartialTask } from '@/components/Tasks/models';

const useMutateTask = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: ['tasks'],
    });

    toast.success('Success action', 'The operation was succeeded.');
  };

  const onError = (error: Error) => {
    console.error(error);
    toast.error('Error action', error.message);
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

  const deleteTask = useMutation({
    mutationFn: (task: Task) => taskClient.remove(task.id),
    onSuccess,
    onError,
  });

  return { createTask, editTask, deleteTask };
};

export default useMutateTask;
