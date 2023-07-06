import { Flex } from '@chakra-ui/react';
import { FcTodoList } from 'react-icons/fc';

const Logo = () => {
  return (
    <Flex flex={1} alignItems='center' justifyContent='flex-start'>
      <FcTodoList size={30} color='red' />
    </Flex>
  );
};

export default Logo;
