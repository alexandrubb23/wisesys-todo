import { useCallback, useState } from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { orderBy } from 'lodash';

import Table from '../common/Table';
import AddTaskDrawer from './AddTaskDrawer';
import EditTaskDrawer from './EditTaskDrawer';
import { Column, OrderDirection, SortColumn } from '../common/models';

type Task = {
  id: number;
  title: string;
  description: string;
  createDate: string;
};

interface TasksListProps {
  tasks: Task[];
}

const columns: Column<Task>[] = [
  {
    path: 'id',
    label: 'ID',
    isSortable: true,
  },
  {
    path: 'title',
    label: 'Title',
    isSortable: true,
  },
  {
    path: 'description',
    label: 'Description',
  },
  {
    path: 'createDate',
    label: 'Create Date',
    isSortable: true,
  },
  {
    path: 'actions',
    label: 'Actions',
    content: (task: Task) => {
      return (
        <HStack spacing={4}>
          <AddTaskDrawer />
          <EditTaskDrawer />
          <Button colorScheme='red' leftIcon={<DeleteIcon />}>
            Delete
          </Button>
        </HStack>
      );
    },
  },
];

const TasksTable = ({ tasks }: TasksListProps) => {
  const [sortColumn, setSortColumn] = useState<SortColumn>({
    order: 'asc',
    path: 'id',
  });

  const handleSort = useCallback((sortColumn: SortColumn) => {
    setSortColumn({ ...sortColumn });
  }, []);

  const { path, order } = sortColumn;

  const sortedTasks = orderBy(tasks, [path], [order]);

  return (
    <Table
      columns={columns}
      data={sortedTasks}
      onSort={handleSort}
      sortColumn={sortColumn}
    />
  );
};

export default TasksTable;
