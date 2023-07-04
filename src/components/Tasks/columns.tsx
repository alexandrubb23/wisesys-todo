import { HStack } from '@chakra-ui/react';

import { Column, Task } from '../common/models';
import Content from '../common/models/content.type';
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

export default columns;
