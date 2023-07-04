import { createBrowserRouter } from 'react-router-dom';

import Login from './components/auth/Login';
import SignupCard from './components/auth/SignUp';
import Layout from './components/Layout';
import TasksTable from './components/Tasks/TasksTable';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignupCard />,
      },
      {
        path: 'tasks',
        element: <TasksTable />,
      },
    ],
  },
]);

export default router;
