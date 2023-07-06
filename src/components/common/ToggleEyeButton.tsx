import { Button, ButtonProps } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface ToggleButtonProps extends ButtonProps {
  onToggle: () => void;
  isOpenedEye: boolean;
  title: string;
}

const ToggleEyeButton = ({
  onToggle,
  isOpenedEye,
  title,
  ...rest
}: ToggleButtonProps) => {
  const eyeIcon = isOpenedEye ? <FaEye /> : <FaEyeSlash />;

  return (
    <Button
      aria-label={`Toggle ${isOpenedEye ? 'hide' : 'show'} text`}
      backgroundColor='transparent'
      data-testid={`toggle-button-${title.toLowerCase()}`}
      fontFamily='owkin.inter.light'
      leftIcon={eyeIcon}
      onClick={onToggle}
      padding={0}
      height={0}
      tabIndex={-1}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default ToggleEyeButton;
