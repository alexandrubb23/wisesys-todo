import {
  Button,
  FormLabel,
  HStack,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useTaskDrawerContext } from './hooks';
import { Task } from '../common/models';
import { useMutateTask } from '../../hooks/http';
import { useState } from 'react';

interface EditTaskFormProps {
  task: Task;
}

const EditTaskForm = ({ task }: EditTaskFormProps) => {
  const { editTask } = useMutateTask();

  const { firstField, onClose } = useTaskDrawerContext();

  const [editedTask, setEditedTask] = useState<Task>({
    id: task.id,
    title: task.title,
    createDate: task.createDate,
    description: task.description,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    editTask.mutate(editedTask);
  };

  return (
    <>
      <VStack align='left' spacing={4} alignContent='left'>
        <FormLabel alignContent='left'>Title</FormLabel>
        <Input
          ref={firstField}
          placeholder='Task title...'
          value={editedTask.title}
          onChange={handleChange}
          name='title'
        />

        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder='Task description...'
          value={editedTask.description}
          onChange={handleChange}
          name='description'
        />
      </VStack>
      <HStack mt={4} spacing={2}>
        <Button variant='outline' onClick={onClose}>
          Cancel
        </Button>
        <Button
          colorScheme='blue'
          isLoading={editTask.isLoading}
          onClick={handleFormSubmit}
        >
          Save
        </Button>
      </HStack>
    </>
  );
};

export default EditTaskForm;
