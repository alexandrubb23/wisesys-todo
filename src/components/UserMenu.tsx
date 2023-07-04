import { Box, Flex, Image } from '@chakra-ui/react';

import useAuth from '../hooks/useAuth';

const UserMenu = () => {
  const user = useAuth();
  if (!user) return null;

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Flex alignItems='center' ml={4}>
      <Box as='span'>{fullName}</Box>
      <Image
        borderRadius='full'
        boxSize='30px'
        src='https://media.licdn.com/dms/image/C4D03AQGYrzakscupmg/profile-displayphoto-shrink_100_100/0/1555158639067?e=1694044800&v=beta&t=vPV7q6CRyU6dXBK3uC5bGKs4gtjXMqSofNC-b34BWVk'
        alt={fullName}
        ml={2}
      />
    </Flex>
  );
};

export default UserMenu;
