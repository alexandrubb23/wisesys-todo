import { HStack } from '@chakra-ui/react';

import { Column, Task } from '@/components/common/models';
import DeleteTaskButton from './DeleteTaskButton';
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
    isTruncable: true,
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
          <DeleteTaskButton task={task} />
        </HStack>
      );
    },
  },
];

export default columns;
