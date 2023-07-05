import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

interface AuthCardProps {
  children: React.ReactNode;
  heading: string;
  text: string;
}

const AuthCard = ({ children, heading, text }: AuthCardProps) => {
  return (
    <Flex minH='100vh' align='center' justify='center'>
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl' textAlign='center'>
            {heading}
          </Heading>
          <Text fontSize='lg' color='gray.600'>
            {text}
          </Text>
        </Stack>
        <Box
          rounded='lg'
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow='lg'
          p={8}
        >
          <Stack spacing={4}>{children}</Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AuthCard;
