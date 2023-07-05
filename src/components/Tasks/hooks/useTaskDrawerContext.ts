import { useContext } from 'react';

import { TaskDrawerContext } from '@/components/Tasks/context';

const useTaskDrawerContext = () => useContext(TaskDrawerContext);

export default useTaskDrawerContext;
