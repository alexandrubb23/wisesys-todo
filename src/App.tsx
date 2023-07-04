import TasksList from './components/Tasks/TasksList';

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    createDate: '2021-01-01',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
    createDate: '2021-01-02',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
    createDate: '2021-01-03',
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'Description 4',
    createDate: '2021-01-04',
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'Description 5',
    createDate: '2021-01-05',
  },
];

const App = () => {
  return <TasksList tasks={tasks} />;
};

export default App;
