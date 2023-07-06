import { Flex } from '@chakra-ui/react';

import useAuth from '@/hooks/useAuth';
import UserAvatar from './UserAvatar';
import UserMenu from './UserMenu';

const UserAccount = () => {
  const user = useAuth();
  if (!user) return null;

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Flex alignItems='center' ml={4}>
      <UserMenu fullName={fullName} />
      <UserAvatar
        alt={fullName}
        src='https://media.licdn.com/dms/image/C4D03AQGYrzakscupmg/profile-displayphoto-shrink_100_100/0/1555158639067?e=1694044800&v=beta&t=vPV7q6CRyU6dXBK3uC5bGKs4gtjXMqSofNC-b34BWVk'
      />
    </Flex>
  );
};

export default UserAccount;
