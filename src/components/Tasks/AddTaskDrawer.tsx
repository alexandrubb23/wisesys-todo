import { AddIcon } from '@chakra-ui/icons';
import AddTaskForm from './AddTaskForm';
import { TaskDrawer } from './common';

const AddTaskDrawer = () => {
  return (
    <TaskDrawer
      buttonColorScheme='green'
      buttonIcon={AddIcon}
      buttonLabel='Add'
      header='Add new task'
    >
      <AddTaskForm />
    </TaskDrawer>
  );
};

export default AddTaskDrawer;
