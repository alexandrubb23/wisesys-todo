import { Button, HStack, VStack } from '@chakra-ui/react';
import * as Yup from 'yup';

import { Form } from '@/components/common/Form/common';
import { InputTypes } from '@/components/common/Form';
import { Task } from '@/components/common/models';
import { useMutateTask } from '@/hooks/mutation';
import { useTaskDrawerContext } from './hooks';
import { FormikHelpers } from 'formik';

interface EditTaskFormProps {
  task: Task;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(75).label('Title'),
  description: Yup.string().required().min(3).label('Description'),
});

type FormData = Yup.InferType<typeof validationSchema>;

const EditTaskForm = ({ task }: EditTaskFormProps) => {
  const initialValues: FormData = {
    title: task.title,
    description: task.description,
  };

  const { editTask } = useMutateTask();
  const { firstField, onClose } = useTaskDrawerContext();

  const handleSubmit = async (
    editedTask: Pick<Task, 'title' | 'description'>,
    formik: FormikHelpers<FormData>
  ) => {
    editTask.mutate({
      ...editedTask,
      id: task.id,
      createDate: task.createDate,
    });

    formik.resetForm({
      values: {
        title: editedTask.title,
        description: editedTask.description,
      },
    });
  };

  return (
    <>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        formOptions={{
          disableButtonWhenFormIsInvalid: true,
        }}
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
              disabled={editTask.isLoading}
              isLoading={editTask.isLoading}
              title='Save'
            />
          </HStack>
        </VStack>
      </Form>
    </>
  );
};

export default EditTaskForm;
