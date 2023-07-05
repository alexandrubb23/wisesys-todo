import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import userClient, { User } from '@/services/user.service';
import useToast from '@/hooks/useToast';

const useMutateUser = (saveUser: (user: User) => void) => {
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (user: User) => userClient.create(user),
    onSuccess: (newUser: User) => {
      toast.success('User created', 'User created successfully.');

      saveUser(newUser);

      navigate('/tasks');
    },
    onError: (error: Error) => {
      console.error(error);
      toast.error('Error', 'Error creating user.');
    },
  });
};

export default useMutateUser;
