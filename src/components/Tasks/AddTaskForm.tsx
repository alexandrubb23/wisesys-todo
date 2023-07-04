import {
  Button,
  FormLabel,
  HStack,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { useMutateTask } from '../../hooks/http';
import { Task } from '../common/models';
import { useTaskDrawerContext } from './hooks';

const AddTaskForm = () => {
  const mutateTask = useMutateTask();

  const { firstField, onClose } = useTaskDrawerContext();
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: '',
    description: '',
  });

  const handleSubmit = () => {
    mutateTask.create(newTask);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  return (
    <>
      <VStack align='left' spacing={4} alignContent='left'>
        <FormLabel alignContent='left'>Title</FormLabel>
        <Input
          ref={firstField}
          placeholder='Task title...'
          onChange={handleChange}
          name='title'
        />

        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder='Task description...'
          onChange={handleChange}
          name='description'
        />
      </VStack>
      <HStack mt={4} spacing={2}>
        <Button variant='outline' onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme='blue' onClick={handleSubmit}>
          Save
        </Button>
      </HStack>
    </>
  );
};

export default AddTaskForm;
