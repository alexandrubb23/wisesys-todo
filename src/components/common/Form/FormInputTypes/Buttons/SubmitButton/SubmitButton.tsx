import { useFormikContext } from 'formik';
import { Button, useMultiStyleConfig } from '@chakra-ui/react';

import { ButtonProps } from '@/components/common/Form/FormInputTypes/Buttons/models';
import { useFormOptionsContext } from '@/components/common/Form/common/Context';

const SubmitButton = ({ title, variant, ...rest }: ButtonProps) => {
  const style = useMultiStyleConfig('Button', { variant });
  const { submitForm, isValid, dirty } = useFormikContext();
  const { disableButtonWhenFormIsInvalid } = useFormOptionsContext();

  let validForm = true;
  if (disableButtonWhenFormIsInvalid) {
    validForm = isValid && dirty;
  }

  return (
    <Button
      __css={style}
      isDisabled={!validForm}
      onClick={submitForm}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
