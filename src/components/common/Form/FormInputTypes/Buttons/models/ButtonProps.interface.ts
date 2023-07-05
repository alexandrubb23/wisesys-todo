import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

import { ButtonStyleVariants } from '@/components/Styles/ButtonStyle/ButtonStyleVariants.type';

interface ButtonProps extends ChakraButtonProps {
  title: string;
  disableWhenInvalid?: boolean;
  variant?:
    | ButtonStyleVariants
    | 'link'
    | 'solid'
    | 'ghost'
    | 'outline'
    | 'unstyled'
    | 'none';
}

export default ButtonProps;
