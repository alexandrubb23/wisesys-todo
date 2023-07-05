import { useCallback } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { ErrorMessage as FormikErrorMessage } from 'formik';

import { useFormOptionsContext } from '@/components/common/Form/common/Context';

interface ErrorMessageProps extends BoxProps {
  name: string;
}

const ErrorMessage = ({ name, ...rest }: ErrorMessageProps) => {
  const { disableValidationErrorMessage } = useFormOptionsContext();

  const includesName = useCallback(
    (name: string) =>
      Array.isArray(disableValidationErrorMessage) &&
      disableValidationErrorMessage.includes(name),
    [disableValidationErrorMessage]
  );

  const itShouldBeDisabledForName = (name: string) =>
    includesName(name) || disableValidationErrorMessage === true;

  const errorMessageBox = (errorMessage: string) => {
    if (itShouldBeDisabledForName(name)) return null;

    return (
      <Box color='red' {...rest}>
        {errorMessage}
      </Box>
    );
  };

  return <FormikErrorMessage name={name} render={errorMessageBox} />;
};

export default ErrorMessage;
