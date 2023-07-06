import { Navigate } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import useAuth from '@/hooks/useAuth';

const AuthRoute = () => {
  const user = useAuth();

  if (user) {
    return <Navigate to='/tasks' />;
  }

  return <Layout />;
};

export default AuthRoute;
