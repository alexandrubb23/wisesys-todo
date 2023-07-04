import { useToast as useChakraToast } from '@chakra-ui/react';

const useToast = () => {
  const toast = useChakraToast();

  const error = (title: string, message: string) => {
    toast({
      title,
      description: message,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  };

  const success = (title: string, message: string) => {
    toast({
      title,
      description: message,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return { error, success };
};

export default useToast;
