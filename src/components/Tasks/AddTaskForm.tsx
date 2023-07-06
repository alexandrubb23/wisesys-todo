import { Button, HStack, VStack } from '@chakra-ui/react';
import * as Yup from 'yup';

import { Form } from '@/components/common/Form/common';
import { FormikHelpers } from 'formik';
import { InputTypes } from '@/components/common/Form';
import { Task } from '@/components/common/models';
import { useMutateTask } from '@/hooks/mutation';
import { useTaskDrawerContext } from './hooks';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(75).label('Title'),
  description: Yup.string().required().min(3).label('Description'),
});

type FormData = Yup.InferType<typeof validationSchema>;

const initialValues: FormData = {
  title: '',
  description: '',
};

const AddTaskForm = () => {
  const { createTask } = useMutateTask();
  const { firstField, onClose } = useTaskDrawerContext();

  const handleSubmit = async (
    newTask: Pick<Task, 'title' | 'description'>,
    formik: FormikHelpers<FormData>
  ) => {
    createTask.mutate(newTask);

    formik.resetForm();
  };

  return (
    <>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <VStack align='left' spacing={4} alignContent='left'>
          <InputTypes.Text name='title' label='Title' ref={firstField} />
          <InputTypes.TextArea name='description' label='Description' />
          <HStack mt={4} spacing={2}>
            <Button variant='outline' onClick={onClose}>
              Cancel
            </Button>
            <InputTypes.SubmitButton
              colorScheme='blue'
              disabled={createTask.isLoading}
              isLoading={createTask.isLoading}
              title='Save'
            />
          </HStack>
        </VStack>
      </Form>
    </>
  );
};

export default AddTaskForm;
