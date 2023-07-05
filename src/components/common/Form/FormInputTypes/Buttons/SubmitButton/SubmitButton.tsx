import { Button } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

import { ButtonProps } from '@/components/common/Form/FormInputTypes/Buttons/models';
import { useFormOptionsContext } from '@/components/common/Form/common/Context';

const SubmitButton = ({ title, variant, ...rest }: ButtonProps) => {
  const { submitForm, isValid, dirty } = useFormikContext();
  const { disableButtonWhenFormIsInvalid } = useFormOptionsContext();

  let validForm = true;
  if (disableButtonWhenFormIsInvalid) {
    validForm = isValid && dirty;
  }

  return (
    <Button
      isDisabled={!validForm}
      onClick={submitForm}
      variant={variant}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
