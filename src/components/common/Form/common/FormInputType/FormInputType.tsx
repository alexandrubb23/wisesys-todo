import { useFormikContext } from 'formik';

import { FormInputTypeProps } from '@/components/common/Form/common/models/interfaces';
import { ErrorMessage, FormInputLabel } from '@/components/common/Form/common';
import {
  InputsTypes,
  TypeOfInputsTypes,
} from '@/components/common/Form/common/models/interfaces/FormInputProps.interface';

const htmlElements = ['a'];

const FormInputType = ({
  children,
  componentInputType,
  label,
  name,
  ...rest
}: FormInputTypeProps) => {
  const { setFieldTouched, handleChange } = useFormikContext();

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
        {...rest}
      >
        {children}
      </InputType>
      <ErrorMessage name={name} />
    </>
  );
};

export default FormInputType;
