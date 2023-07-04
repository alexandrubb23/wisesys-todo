import {
  Button,
  Checkbox,
  FormLabel,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import AuthCard from './common/AuthCard';
import { useState } from 'react';
import userService from '../../services/user.service';
import authService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useToast } from '../../hooks';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const toast = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { email, password } = formData;

    try {
      const user = await userService.login(email, password);

      authService.saveUser(user);

      toast.success(
        `Welcome, ${user.firstName}!`,
        'You have successfully logged in.'
      );

      navigate('/tasks');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('Invalid email or password.', error.response?.data);
      }
    }
  };

  return (
    <AuthCard
      heading='Sign in to your account'
      text='to enjoy all of our cool features ✌️'
    >
      <FormLabel>Email address</FormLabel>
      <Input type='email' name='email' onChange={handleInputChange} />
      <FormLabel>Password</FormLabel>
      <Input type='password' name='password' onChange={handleInputChange} />
      <Stack spacing={10}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align='start'
          justify='space-between'
        >
          <Checkbox>Remember me</Checkbox>
          <Link color='blue.400'>Forgot password?</Link>
        </Stack>
        <Button
          bg='blue.400'
          color='white'
          _hover={{
            bg: 'blue.500',
          }}
          onClick={handleSubmit}
        >
          Sign in
        </Button>
      </Stack>
    </AuthCard>
  );
};

export default Login;
