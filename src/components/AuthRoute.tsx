import { Navigate } from 'react-router-dom';

import useAuth from '@/hooks/useAuth';
import Layout from './Layout';

const AuthRoute = () => {
  const user = useAuth();

  if (user) {
    return <Navigate to='/tasks' />;
  }

  return <Layout />;
};

export default AuthRoute;
