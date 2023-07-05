import { createContext, useContext } from 'react';

import { FormOptions } from '@/components/common/Form/common/models/types';

export const DEFAULT_FORM_OPTIONS: FormOptions = {
  disableButtonWhenFormIsInvalid: false,
  disableValidationErrorMessage: false
};

export const FormOptionsContext =
  createContext<FormOptions>(DEFAULT_FORM_OPTIONS);

export const useFormOptionsContext = (): FormOptions =>
  useContext(FormOptionsContext);
