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

import { orderBy } from 'lodash';
import { useCallback, useState } from 'react';
import AddTaskDrawer from './AddTaskDrawer';
import EditTaskDrawer from './EditTaskDrawer';

type Task = {
  id: number;
  title: string;
  description: string;
  createDate: string;
};

type OrderDirection = 'asc' | 'desc';

interface TasksListProps {
  tasks: Task[];
}

const TasksList = ({ tasks }: TasksListProps) => {
  const [data, setData] = useState<Task[]>(tasks);
  const [orderDirection, setOrderDirection] = useState<OrderDirection>('asc');

  const handleSort = useCallback(
    (field: string) => {
      const direction = orderDirection === 'asc' ? 'desc' : 'asc';
      const ordered = orderBy(data, [field], [direction]);

      setData(ordered);
      setOrderDirection(direction);
    },
    [data, orderDirection]
  );

  return (
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th onClick={() => handleSort('id')} cursor='pointer'>
            ID
          </Th>
          <Th onClick={() => handleSort('title')} cursor='pointer'>
            Title
          </Th>
          <Th>Description</Th>
          <Th onClick={() => handleSort('createDate')} cursor='pointer'>
            Create Date
          </Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map(task => (
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
