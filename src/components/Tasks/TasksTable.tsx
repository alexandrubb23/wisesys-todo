import { HStack, Spinner, VStack } from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { useCallback, useMemo, useState } from 'react';

import { Column, SortColumn, Task } from '../common/models';
import AddTaskDrawer from './AddTaskDrawer';
import AlertError from '../common/AlertError';
import Content from '../common/models/content.type';
import DeleteTaskButton from './DeleteTaskButton';
import EditTaskDrawer from './EditTaskDrawer';
import SearchInput from '../SearchInput';
import Table from '../common/Table';
import useTasks from '../../hooks/useTasks';

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
    content: (data: Content<Task>) => {
      const { item, onDelete } = data;
      return (
        <HStack spacing={4}>
          <EditTaskDrawer task={item} />
          <DeleteTaskButton task={item} onDelete={onDelete} />
        </HStack>
      );
    },
  },
];

const TasksTable = () => {
  const { data: tasks, isLoading, error } = useTasks();

  // This is just for demonstration purposes
  // In a real world application, we would use an API to delete the task
  const [deletedTask, setDeletedTask] = useState<number[]>([]);

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

  const handleDelete = (task: Task) => {
    const index = tasks?.indexOf(task);
    if (index === -1) return;

    setDeletedTask([...deletedTask, task.id]);
  };

  const sortedTasks = orderBy(tasks, [sortColumn.path], [sortColumn.order]);

  const searchedTasks = useMemo(
    () =>
      sortedTasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, sortedTasks]
  );

  if (isLoading) return <Spinner />;

  if (error) return <AlertError message={error.message} />;

  const filteredeTasks = searchedTasks.filter(
    task => !deletedTask.includes(task.id)
  );

  return (
    <>
      <VStack spacing={4} align='right' mb={4}>
        <SearchInput onSearch={handleSearch} />
        <AddTaskDrawer />
      </VStack>
      {filteredeTasks.length === 0 ? (
        <AlertError mt={4} message='No tasks found.' status='info' />
      ) : (
        <Table
          columns={columns}
          data={filteredeTasks}
          onDelete={handleDelete}
          onSort={handleSort}
          sortColumn={sortColumn}
        />
      )}
    </>
  );
};

export default TasksTable;
