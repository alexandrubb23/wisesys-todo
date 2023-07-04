import { Alert, AlertIcon, AlertProps } from '@chakra-ui/react';

interface AlertError extends AlertProps {
  message: string;
}

const AlertError = ({ status = 'error', message }: AlertError) => (
  <Alert status={status}>
    <AlertIcon />
    {message}
  </Alert>
);

export default AlertError;
