import { Spinner, VStack } from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { useCallback, useMemo, useState } from 'react';

import SearchInput from '@/components/SearchInput';
import AlertError from '@/components/common/AlertError';
import { Table } from '@/components/common/Table';
import useTasks from '@/hooks/useTasks';
import useTableStore from '@/store/table-store';
import AddTaskDrawer from './AddTaskDrawer';
import columns from './columns';

const TasksTable = () => {
  const sortColumn = useTableStore(s => s.tableQuery.sortColumn);

  const { data: tasks, isLoading, error } = useTasks();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const sortedTasks = orderBy(tasks, [sortColumn.path], [sortColumn.order]);

  const searchedTasks = useMemo(
    () =>
      sortedTasks.filter(task =>
        task.title?.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, sortedTasks]
  );

  if (isLoading) return <Spinner />;

  if (error) return <AlertError message={error.message} />;

  return (
    <>
      <VStack spacing={4} align='right' mb={4}>
        <SearchInput onSearch={handleSearch} />
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
