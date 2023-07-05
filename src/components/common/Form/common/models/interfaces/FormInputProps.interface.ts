import { Input, Select } from '@chakra-ui/react';

export const InputsTypes = {
  Select,
  Text: Input,
  Password: Input
};

export type TypeOfInputsTypes = keyof typeof InputsTypes;

interface FormInputTypeProps {
  children?: React.ReactNode;
  componentInputType: TypeOfInputsTypes;
  label?: string;
  name: string;
}

export default FormInputTypeProps;
