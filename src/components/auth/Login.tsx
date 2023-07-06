import { Box, Checkbox, Stack, useColorModeValue } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';

import { Form } from '@/components/common/Form/common';
import { InputTypes } from '@/components/common/Form';
import { useToast } from '@/hooks';
import AuthCard from './common/AuthCard';
import authService from '@/services/auth.service';
import HorizontalLineText from '@/components/common/HorizontalLineText';
import userService from '@/services/user.service';

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

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ email, password }: FormData) => {
    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
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
        <InputTypes.Text
          label='Email'
          name='email'
          placeholder='Your email address...'
        />
        <InputTypes.Password
          name='password'
          label='Password'
          placeholder='Your password...'
        />
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
            isLoading={isLoading}
            disabled={isLoading}
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
