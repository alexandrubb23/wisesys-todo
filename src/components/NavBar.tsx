import { Flex } from '@chakra-ui/react';

import ColorModeSwitch from './ColorModeSwitch';
import Logo from './Logo';
import UserAccount from './UserAccount';

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
