import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import AuthCard from './common/AuthCard';
import useMutateUser from '@/hooks/mutation/useMutateUser';
import { User } from '@/services/user.service';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const user = useMutateUser();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = () => {
    console.log(formData);
    user.mutate(formData);
  };

  return (
    <AuthCard heading='Sign up' text='to enjoy all of our cool features ✌️'>
      <HStack>
        <Box>
          <FormLabel>First Name</FormLabel>
          <Input type='text' name='firstName' onChange={handleInputChange} />
        </Box>
        <Box>
          <FormLabel>Last Name</FormLabel>
          <Input type='text' name='lastName' onChange={handleInputChange} />
        </Box>
      </HStack>
      <FormLabel>Email address</FormLabel>
      <Input type='email' name='email' onChange={handleInputChange} />
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
          name='password'
          onChange={handleInputChange}
          type={showPassword ? 'text' : 'password'}
        />
        <InputRightElement h='full'>
          <Button
            variant='ghost'
            onClick={() => setShowPassword(showPassword => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Stack spacing={10} pt={2}>
        <Button
          loadingText='Submitting'
          size='lg'
          bg='blue.400'
          color='white'
          _hover={{
            bg: 'blue.500',
          }}
          onClick={handleSubmitForm}
          isLoading={user.isLoading}
        >
          Sign up
        </Button>
      </Stack>
      <Stack pt={6}>
        <Text align='center'>
          Already a user? <Link color='blue.400'>Login</Link>
        </Text>
      </Stack>
    </AuthCard>
  );
}
