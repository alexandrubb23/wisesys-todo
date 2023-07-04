import { useToast as useChakraToast } from '@chakra-ui/react';

const useToast = () => {
  const toast = useChakraToast();

  const success = (title: string, message: string) => {
    toast({
      title,
      description: message,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return { success };
};

export default useToast;
