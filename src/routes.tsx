import { createBrowserRouter } from 'react-router-dom';

import { AuthRoutes, PrivateRoutes } from './components/Routes';
import ErrorPage from './components/ErrorPage';
import Layout from './components/Layout';
import { LoginPage, RegisterPage, TasksPage } from './pages';

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: 'tasks',
        element: <TasksPage />,
      },
    ],
  },
  {
    element: <AuthRoutes />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <RegisterPage />,
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
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <RegisterPage />,
      },
      {
        path: 'tasks',
        element: <TasksPage />,
      },
    ],
  },
]);

export default router;
