import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import AddTaskDrawer from './AddTaskDrawer';
import EditTaskDrawer from './EditTaskDrawer';

type Task = {
  id: number;
  title: string;
  description: string;
  createDate: string;
};

interface TasksListProps {
  tasks: Task[];
}

const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <Table variant='simple'>
      <Thead>
        <Th>ID</Th>
        <Th>Title</Th>
        <Th>Description</Th>
        <Th>Create Date</Th>
        <Th>Actions</Th>
      </Thead>
      <Tbody>
        {tasks.map(task => (
          <Tr key={task.id}>
            <Td width='10%'>{task.id}</Td>
            <Td width='20%'>{task.title}</Td>
            <Td width='30%'>{task.description}</Td>
            <Td width='40%'>{task.createDate}</Td>
            <Td width='100%'>
              <HStack spacing={4}>
                <AddTaskDrawer />
                <EditTaskDrawer />
                <Button colorScheme='red' leftIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TasksList;
