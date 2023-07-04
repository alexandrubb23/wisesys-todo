import TasksTable from './components/Tasks/TasksTable';
import Login from './components/auth/Login';
import SignupCard from './components/auth/SignUp';

const tasks = [
  {
    id: 1,
    title: 'Complete Project Proposal',
    description: 'Description 1',
    createDate: '2021-01-01',
  },
  {
    id: 2,
    title: 'Review Codebase',
    description: 'Description 2',
    createDate: '2021-01-02',
  },
  {
    id: 3,
    title: 'Prepare Presentation',
    description: 'Description 3',
    createDate: '2021-01-03',
  },
  {
    id: 4,
    title: 'Debug Application',
    description: 'Description 4',
    createDate: '2021-01-04',
  },
  {
    id: 5,
    title: 'Write Documentation',
    description: 'Description 5',
    createDate: '2021-01-05',
  },
  {
    id: 6,
    title: 'Optimize Performance',
    description: 'Description 6',
    createDate: '2021-01-06',
  },
  {
    id: 7,
    title: 'Implement New Feature',
    description: 'Description 7',
    createDate: '2021-01-07',
  },
  {
    id: 8,
    title: 'Test Application',
    description: 'Description 8',
    createDate: '2021-01-08',
  },
  {
    id: 9,
    title: 'Deploy to Production',
    description: 'Description 9',
    createDate: '2021-01-09',
  },
  {
    id: 10,
    title: 'Fix Bug in Login System',
    description: 'Description 10',
    createDate: '2021-01-10',
  },
];

const App = () => {
  // return <SignupCard />;
  // return <Login />;
  return <TasksTable tasks={tasks} />;
};

export default App;
