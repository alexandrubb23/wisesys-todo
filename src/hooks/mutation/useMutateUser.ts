import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import useToast from '@/hooks/useToast';
import ApiError from '@/services/api-error.service';
import userClient, { User } from '@/services/user.service';

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
    onError: (error: ApiError) => {
      console.error(error);

      toast.error('Error', error.response?.data as string);
    },
  });
};

export default useMutateUser;
