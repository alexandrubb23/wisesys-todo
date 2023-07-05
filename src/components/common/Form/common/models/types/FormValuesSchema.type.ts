import * as Yup from 'yup';

type FormValuesSchema<FormValues> = Yup.ObjectSchema<
  FormValues extends Yup.AnyObject ? FormValues : Yup.AnyObject
>;

export default FormValuesSchema;
