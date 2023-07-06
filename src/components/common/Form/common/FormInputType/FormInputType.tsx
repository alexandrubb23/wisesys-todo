import { FormikValues, useFormikContext } from 'formik';
import React from 'react';

import { FormInputTypeProps } from '@/components/common/Form/common/models/interfaces';
import { ErrorMessage, FormInputLabel } from '@/components/common/Form/common';
import {
  InputsTypes,
  TypeOfInputsTypes,
} from '@/components/common/Form/common/models/interfaces/FormInputProps.interface';

const htmlElements = ['a', 'button'];

const FormInputType = React.forwardRef<HTMLInputElement, FormInputTypeProps>(
  (
    { children, componentInputType, label, name, ...rest }: FormInputTypeProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const { setFieldTouched, handleChange, values } =
      useFormikContext<FormikValues>();

    const markFieldNameTouched = (event: React.FocusEvent<HTMLElement>) => {
      const relatedTarget = event.relatedTarget?.localName;
      if (relatedTarget && htmlElements.includes(relatedTarget)) return;

      setFieldTouched(name);
    };

    const inputType = componentInputType as TypeOfInputsTypes;
    const InputType = InputsTypes[inputType];

    return (
      <>
        <FormInputLabel label={label} name={name} />
        <InputType
          id={name}
          name={name}
          onBlur={markFieldNameTouched}
          onChange={handleChange(name)}
          ref={ref}
          value={values[name]}
          {...rest}
        >
          {children}
        </InputType>
        <ErrorMessage name={name} />
      </>
    );
  }
);

export default FormInputType;
