import EditTaskForm from './EditTaskForm';
import { EditIcon } from '@chakra-ui/icons';

import { TaskDrawer } from './common';

const EditTaskDrawer = () => {
  return (
    <TaskDrawer
      buttonColorScheme='blue'
      buttonIcon={EditIcon}
      buttonLabel='Edit'
      header='Edit task'
    >
      <EditTaskForm />
    </TaskDrawer>
  );
};

export default EditTaskDrawer;
