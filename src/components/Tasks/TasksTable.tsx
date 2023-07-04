import { useCallback, useState } from 'react';
import Table, { Column } from '../common/Table';
import { orderBy } from 'lodash';
import AddTaskDrawer from './AddTaskDrawer';
import EditTaskDrawer from './EditTaskDrawer';
import { Button, HStack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

type OrderDirection = 'asc' | 'desc';

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

export type SortColumn = {
  order: OrderDirection;
  path: string;
};

const TasksTable = ({ tasks }: TasksListProps) => {
  const [sortColumn, setSortColumn] = useState<SortColumn>({
    order: 'asc',
    path: 'id',
  });

  const handleSort = useCallback((sortColumn: SortColumn) => {
    setSortColumn({ ...sortColumn });
  }, []);

  const sortedTasks = orderBy(tasks, [sortColumn.path], [sortColumn.order]);

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
