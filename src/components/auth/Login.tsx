import {
  Button,
  Checkbox,
  FormLabel,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import AuthCard from './common/AuthCard';

const Login = () => {
  return (
    <AuthCard
      heading='Sign in to your account'
      text='to enjoy all of our cool features ✌️'
    >
      <FormLabel>Email address</FormLabel>
      <Input type='email' />
      <FormLabel>Password</FormLabel>
      <Input type='password' />
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
        >
          Sign in
        </Button>
      </Stack>
    </AuthCard>
  );
};

export default Login;
