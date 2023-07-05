import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  title: string;
  disableWhenInvalid?: boolean;
  variant?: 'link' | 'solid' | 'ghost' | 'outline' | 'unstyled' | 'none';
}

export default ButtonProps;
