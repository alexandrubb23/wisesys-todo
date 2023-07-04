import { DeleteIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertIcon,
  Button,
  HStack,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { useCallback, useMemo, useState } from 'react';

import useTasks from '../../hooks/useTasks';
import SearchInput from '../SearchInput';
import Table from '../common/Table';
import { Column, SortColumn, Task } from '../common/models';
import AddTaskDrawer from './AddTaskDrawer';
import EditTaskDrawer from './EditTaskDrawer';

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
          <EditTaskDrawer task={task} />
          <Button colorScheme='red' leftIcon={<DeleteIcon />}>
            Delete
          </Button>
        </HStack>
      );
    },
  },
];

const TasksTable = () => {
  const { data: tasks, isLoading, error } = useTasks();

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

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <Alert status='error'>
        <AlertIcon />
        {error.message}
      </Alert>
    );

  return (
    <>
      <VStack spacing={4} align='right' mb={4}>
        <SearchInput onSearch={handleSearch} />
        <AddTaskDrawer />
      </VStack>
      {searchedTasks.length === 0 ? (
        <Alert status='info' mt={4}>
          <AlertIcon />
          To task found.
        </Alert>
      ) : (
        <Table
          columns={columns}
          data={searchedTasks}
          onSort={handleSort}
          sortColumn={sortColumn}
        />
      )}
    </>
  );
};

export default TasksTable;
