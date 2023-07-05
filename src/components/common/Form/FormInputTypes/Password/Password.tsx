import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { FormInputType, FormInputLabel } from '@/components/common/Form/common';
import { InputTextProps } from '@/components/common/Form/common/models/types';
import ToggleEyeButton from '@/components/common/ToggleEyeButton';

const Password = ({ label, name, ...rest }: InputTextProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <>
      <Flex alignItems='center'>
        <Box flex={1}>
          <FormInputLabel label={label} name={name} />
        </Box>
        <Box color='owkin.blue'>
          <ToggleEyeButton
            title='Show'
            isOpenedEye={showPassword}
            onToggle={togglePasswordVisibility}
          />
        </Box>
      </Flex>
      <FormInputType
        componentInputType='Password'
        name={name}
        type={showPassword ? 'text' : 'password'}
        {...rest}
      />
    </>
  );
};

export default Password;
