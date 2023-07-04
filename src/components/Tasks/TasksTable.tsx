import { DeleteIcon } from '@chakra-ui/icons';
import { Button, HStack, VStack } from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { useCallback, useMemo, useState } from 'react';

import Table from '../common/Table';
import { Column, SortColumn } from '../common/models';
import AddTaskDrawer from './AddTaskDrawer';
import EditTaskDrawer from './EditTaskDrawer';
import SearchInput from '../SearchInput';

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

  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = useCallback((sortColumn: SortColumn) => {
    setSortColumn({ ...sortColumn });
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const sortedTasks = orderBy(tasks, [sortColumn.path], [sortColumn.order]);

  const searchedTasks = useMemo(
    () =>
      sortedTasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, sortedTasks]
  );

  return (
    <>
      <VStack spacing={4} p={4} align='right'>
        <SearchInput onSearch={handleSearch} />
        <AddTaskDrawer />
      </VStack>

      <Table
        columns={columns}
        data={searchedTasks}
        onSort={handleSort}
        sortColumn={sortColumn}
      />
    </>
  );
};

export default TasksTable;
