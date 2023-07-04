import { createContext, createRef } from 'react';

type TaskDrawerContextType = {
  firstField: React.RefObject<HTMLInputElement>;
  onClose: () => void;
};

const TaskDrawerContext = createContext<TaskDrawerContextType>({
  firstField: createRef<HTMLInputElement>(),
  onClose: () => null,
});

export default TaskDrawerContext;
