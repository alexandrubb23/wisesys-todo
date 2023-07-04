import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import Layout from './components/Layout';
import TasksTable from './components/Tasks/TasksTable';
import Login from './components/auth/Login';
import SignupCard from './components/auth/SignUp';
import PrivateRoutes from './components/PrivateRoutes';
import AuthRoute from './components/AuthRoute';

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: 'tasks',
        element: <TasksTable />,
      },
    ],
  },
  {
    element: <AuthRoute />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignupCard />,
      },
    ],
  },
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
