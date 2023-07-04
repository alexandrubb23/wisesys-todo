import { Flex } from '@chakra-ui/react';

import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <Flex padding='10px' direction='row-reverse' mb={4}>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
