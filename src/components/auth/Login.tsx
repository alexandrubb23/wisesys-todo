import { Box, Checkbox, Stack, useColorModeValue } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { InputTypes } from '@/components/common/Form';
import { Form } from '@/components/common/Form/common';
import { useToast } from '@/hooks';
import authService from '@/services/auth.service';
import userService from '@/services/user.service';
import AuthCard from './common/AuthCard';
import HorizontalLineText from '../common/HorizontalLineText';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
});

type FormData = Yup.InferType<typeof validationSchema>;

const initialValues: FormData = {
  email: '',
  password: '',
};

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: FormData) => {
    try {
      const user = await userService.login(email, password);

      authService.saveUser(user);

      toast.success(
        `Welcome, ${user.firstName}!`,
        'You have successfully logged in.'
      );

      navigate('/tasks');
    } catch (error) {
      if (error instanceof Error)
        toast.error('Invalid email or password.', error.message);
    }
  };

  return (
    <AuthCard
      heading='Sign in to your account'
      text='to enjoy all of our cool features ✌️'
    >
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        formOptions={{
          disableButtonWhenFormIsInvalid: true,
        }}
      >
        <InputTypes.Text name='email' label='Email' />
        <InputTypes.Password name='password' label='Password' />
        <Stack spacing={10}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            align='start'
            justify='space-between'
          >
            <Checkbox>Remember me</Checkbox>
          </Stack>
          <InputTypes.SubmitButton
            title='Sign in'
            bg='blue.400'
            color='white'
            _hover={{
              bg: 'blue.500',
            }}
          />
          <HorizontalLineText
            text='or'
            textBackgroundColor={useColorModeValue('white', 'gray.700')}
            textColor='gray.500'
          />
          <Box textAlign='center' color='blue.400'>
            <Link to='/signup'>Create an account</Link>
          </Box>
        </Stack>
      </Form>
    </AuthCard>
  );
};

export default Login;
