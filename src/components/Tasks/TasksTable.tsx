import { Spinner, VStack } from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { useCallback, useMemo, useState } from 'react';

import useTasks from '../../hooks/useTasks';
import SearchInput from '../SearchInput';
import AlertError from '../common/AlertError';
import Table from '../common/Table';
import { SortColumn } from '../common/models';
import AddTaskDrawer from './AddTaskDrawer';
import columns from './columns';

const TasksTable = () => {
  const { data: tasks, isLoading, error } = useTasks();

  const [sortColumn, setSortColumn] = useState<SortColumn>({
    order: 'desc',
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
