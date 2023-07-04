import { Flex } from '@chakra-ui/react';

import ColorModeSwitch from './ColorModeSwitch';
import Logo from './Logo';
import UserMenu from './UserMenu';

const NavBar = () => {
  return (
    <Flex padding='10px' mb={4}>
      <Logo />
      <UserMenu />
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
