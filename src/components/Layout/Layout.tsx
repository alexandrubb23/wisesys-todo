import { Box, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

const Layout = () => {
  return (
    <Box padding={5} bg={useColorModeValue('gray.50', 'gray.800')}>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
