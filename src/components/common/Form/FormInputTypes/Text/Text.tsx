import { FormInputType } from '@/components/common/Form/common';
import { InputTextProps } from '@/components/common/Form/common/models/types';
import React from 'react';

const Text = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    { label, name, ...rest }: InputTextProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <FormInputType
        componentInputType='Text'
        label={label}
        name={name}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Text;
