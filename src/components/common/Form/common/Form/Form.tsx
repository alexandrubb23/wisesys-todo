import { Formik, FormikValues } from 'formik';

import {
  FormOptions,
  FormValuesSchema
} from '@/components/common/Form/common/models/types';
import {
  DEFAULT_FORM_OPTIONS,
  FormOptionsProvider
} from '@/components/common/Form/common/Context';

interface FormikFormProps<FormValues> {
  children: React.ReactNode;
  formOptions?: FormOptions;
  initialValues: FormValues;
  onSubmit: (values: FormValues) => Promise<void>;
  validateOnBlur?: boolean;
  validationSchema: FormValuesSchema<FormValues>;
}

const Form = <FormValues extends FormikValues>({
  children,
  initialValues,
  onSubmit,
  validateOnBlur = true,
  validationSchema,
  formOptions = DEFAULT_FORM_OPTIONS
}: FormikFormProps<FormValues>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur={validateOnBlur}
      validationSchema={validationSchema}
    >
      {() => (
        <FormOptionsProvider formOptions={formOptions}>
          {children}
        </FormOptionsProvider>
      )}
    </Formik>
  );
};

export default Form;
