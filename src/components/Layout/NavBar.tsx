import { Flex } from '@chakra-ui/react';

import { UserAccount } from '@/components/User';
import ColorModeSwitch from './ColorModeSwitch';
import Logo from '../Logo';

const NavBar = () => {
  return (
    <Flex padding='10px' mb={4}>
      <Logo />
      <UserAccount />
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
