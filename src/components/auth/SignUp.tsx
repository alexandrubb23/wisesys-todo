import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Form } from '@/components/common/Form/common';
import { InputTypes } from '@/components/common/Form';
import AuthCard from './common/AuthCard';
import authService from '@/services/auth.service';
import useMutateUser from '@/hooks/mutation/useMutateUser';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label('First Name'),
  lastName: Yup.string().required().label('Last Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
});

type FormData = Yup.InferType<typeof validationSchema>;

const initialValues: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const { isLoading, mutate } = useMutateUser(authService.saveUser);

  const handleSubmit = async (newUser: FormData) => {
    mutate(newUser);
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      formOptions={{
        disableButtonWhenFormIsInvalid: true,
      }}
    >
      <AuthCard heading='Sign up' text='to enjoy all of our cool features ✌️'>
        <HStack alignItems='baseline'>
          <Box>
            <InputTypes.Text
              name='firstName'
              label='First Name'
              placeholder='Your first name...'
            />
          </Box>
          <Box>
            <InputTypes.Text
              name='lastName'
              label='Last Name'
              placeholder='Your last name...'
            />
          </Box>
        </HStack>
        <InputTypes.Text
          name='email'
          label='Email'
          placeholder='Your email...'
        />
        <InputTypes.Password
          name='password'
          label='Password'
          placeholder='Your password...'
        />
        <Stack spacing={10} pt={2}>
          <InputTypes.SubmitButton
            loadingText='Submitting'
            size='lg'
            bg='blue.400'
            color='white'
            _hover={{
              bg: 'blue.500',
            }}
            isLoading={isLoading}
            disabled={isLoading}
            title='Sign up'
          />
        </Stack>
        <Stack pt={6}>
          <Text align='center'>
            Already a user?
            <Box as='span' color='blue.400' ml={1}>
              <Link to='/'>Login</Link>
            </Box>
          </Text>
        </Stack>
      </AuthCard>
    </Form>
  );
};

export default SignUp;
