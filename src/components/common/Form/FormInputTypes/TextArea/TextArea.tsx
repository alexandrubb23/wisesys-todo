import { FormInputType } from '@/components/common/Form/common';
import { InputTextProps } from '@/components/common/Form/common/models/types';

const TextArea = ({ label, name, ...rest }: InputTextProps) => {
  return (
    <FormInputType
      componentInputType='Textarea'
      label={label}
      name={name}
      {...rest}
    />
  );
};

export default TextArea;
