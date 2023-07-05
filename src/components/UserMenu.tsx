import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import authService from '@/services/auth.service';
import { useToast } from '@/hooks';

const UserMenu = ({ fullName }: { fullName: string }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    authService.removeUser();

    toast.success('Logout Success', 'You have been logged out.');

    navigate('/');
  };

  return (
    <Menu>
      <MenuButton as={Button} colorScheme='teal'>
        {fullName}
      </MenuButton>
      <MenuList>
        <MenuGroup title='Profile'>
          <MenuItem>My Account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title='Help'>
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
