import { FormOptions } from '@/components/common/Form/common/models/types';
import { FormOptionsContext } from './useFormOptionsContext';

interface FormOptionsProviderProps {
  formOptions: FormOptions;
  children: React.ReactNode;
}

const FormOptionsProvider = ({
  formOptions,
  children
}: FormOptionsProviderProps) => (
  <FormOptionsContext.Provider value={formOptions}>
    {children}
  </FormOptionsContext.Provider>
);

export default FormOptionsProvider;
