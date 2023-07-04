import { Flex } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <Flex padding='10px' direction='row-reverse' mb={4}>
      {/* <Link to='/'>
        <Image src={logo} boxSize='60px' objectFit='cover' />
      </Link> */}
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
