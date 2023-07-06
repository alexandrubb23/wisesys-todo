import { Navigate } from 'react-router-dom';

import useAuth from '@/hooks/useAuth';
import { Layout } from '@/components/Layout';

const PrivateRoutes = () => {
  const user = useAuth();

  if (!user) return <Navigate to='/' />;

  return <Layout />;
};

export default PrivateRoutes;
