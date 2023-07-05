import { Input, Textarea } from '@chakra-ui/react';

export const InputsTypes = {
  Text: Input,
  Password: Input,
  Textarea: Textarea,
};

export type TypeOfInputsTypes = keyof typeof InputsTypes;

interface FormInputTypeProps {
  children?: React.ReactNode;
  componentInputType: TypeOfInputsTypes;
  label?: string;
  name: string;
}

export default FormInputTypeProps;
