import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

import { Task } from '../common/models';
import { useMutateTask } from '../../hooks/http';

interface DeleteTaskButtonProps {
  task: Task;
}

const DeleteTaskButton = ({ task }: DeleteTaskButtonProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const mutateTask = useMutateTask();

  const handleDelete = () => {
    onClose();

    mutateTask.remove(task);
  };

  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
        Delete
      </Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Delete task?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete{' '}
            <Box as='span' color='dodgerblue' fontWeight='bold'>
              {task.title}
            </Box>
            ? You can't undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' ml={3} onClick={handleDelete}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteTaskButton;
