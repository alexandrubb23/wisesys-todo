import { FormInputType } from '@/components/common/Form/common';
import { InputTextProps } from '@/components/common/Form/common/models/types';

const Text = ({ label, name, ...rest }: InputTextProps) => {
  return (
    <FormInputType
      componentInputType="Text"
      label={label}
      name={name}
      {...rest}
    />
  );
};

export default Text;
