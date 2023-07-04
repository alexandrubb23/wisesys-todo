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

interface EditTaskFormProps {
  task: Task;
}

const EditTaskForm = ({ task }: EditTaskFormProps) => {
  const { firstField, onClose } = useTaskDrawerContext();

  return (
    <>
      <VStack align='left' spacing={4} alignContent='left'>
        <FormLabel alignContent='left'>Title</FormLabel>
        <Input
          ref={firstField}
          placeholder='Task title...'
          value={task.title}
        />

        <FormLabel>Description</FormLabel>
        <Textarea placeholder='Task description...' value={task.description} />
      </VStack>
      <HStack mt={4} spacing={2}>
        <Button variant='outline' onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme='blue'>Save</Button>
      </HStack>
    </>
  );
};

export default EditTaskForm;
