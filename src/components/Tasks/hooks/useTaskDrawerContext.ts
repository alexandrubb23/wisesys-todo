import { useContext } from 'react';

import { TaskDrawerContext } from '../context';

const useTaskDrawerContext = () => useContext(TaskDrawerContext);

export default useTaskDrawerContext;
