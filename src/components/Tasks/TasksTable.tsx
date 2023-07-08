import { Spinner, VStack } from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { useMemo } from 'react';

import SearchInput from '@/components/SearchInput';
import AlertError from '@/components/common/AlertError';
import { Table } from '@/components/common/Table';
import useTasks from '@/hooks/useTasks';
import { useTableSortColumnStore } from '@/store/table-store';
import { useTasksSearchTextStore } from '@/store/tasks-store';
import AddTaskDrawer from './AddTaskDrawer';
import columns from './columns';

const TasksTable = () => {
  const sortColumn = useTableSortColumnStore();
  const searchQueryText = useTasksSearchTextStore();

  const { data: tasks, isLoading, error } = useTasks();

  const sortedTasks = orderBy(tasks, [sortColumn.path], [sortColumn.order]);

  const searchedTasks = useMemo(
    () =>
      sortedTasks.filter(task =>
        task.title?.toLowerCase().includes(searchQueryText?.toLowerCase() ?? '')
      ),
    [searchQueryText, sortedTasks]
  );

  if (isLoading) return <Spinner />;

  if (error) return <AlertError message={error.message} />;

  return (
    <>
      <VStack spacing={4} align='right' mb={4}>
        <SearchInput />
        <AddTaskDrawer />
      </VStack>
      {searchedTasks.length === 0 ? (
        <AlertError mt={4} message='No tasks found.' status='info' />
      ) : (
        <Table columns={columns} data={searchedTasks} />
      )}
    </>
  );
};

export default TasksTable;
