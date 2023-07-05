import { FormLabel } from '@chakra-ui/react';

interface FormInputLabelProps {
  label?: string;
  name: string;
}

const FormInputLabel = ({ label, name }: FormInputLabelProps) => {
  if (!label) return null;

  return (
    <FormLabel htmlFor={name} marginY={2}>
      {label}
    </FormLabel>
  );
};

export default FormInputLabel;
