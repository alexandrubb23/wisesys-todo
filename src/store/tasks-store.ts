import { create } from 'zustand';

interface TasksQuery {
  searchText?: string;
}

interface TasksQueryStore {
  tasksQuery: TasksQuery;
  setSearchText: (searchText: string) => void;
}

const useTasksQueryStore = create<TasksQueryStore>(set => ({
  tasksQuery: {},
  setSearchText: (searchText: string) =>
    set(() => ({ tasksQuery: { searchText } })),
}));

export const useTasksSearchTextStore = () =>
  useTasksQueryStore(s => s.tasksQuery.searchText);

export default useTasksQueryStore;
