import EditTaskForm from './EditTaskForm';
import { EditIcon } from '@chakra-ui/icons';

import { TaskDrawer } from './common';
import { Task } from '@/components/common/models';

interface EditTaskDrawerProps {
  task: Task;
}

const EditTaskDrawer = ({ task }: EditTaskDrawerProps) => {
  // Usualy, I will not use "prop drilling" like this, but I want to keep this example simple.
  // In real world, I will use Zustand/Redux for managing global state.
  // So, let's inject the task into the EditTaskForm component.
  return (
    <TaskDrawer
      buttonColorScheme='blue'
      buttonIcon={EditIcon}
      buttonLabel='Edit'
      header={`Edit Task ${task.title}`}
    >
      <EditTaskForm task={task} />
    </TaskDrawer>
  );
};

export default EditTaskDrawer;
