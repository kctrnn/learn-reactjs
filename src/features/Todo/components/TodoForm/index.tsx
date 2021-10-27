import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/FormFields';
import { TodoFormValues } from 'models';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface TodoFormProps {
  onSubmit?: (formValues: TodoFormValues) => void;
}

const schema = yup.object().shape({
  text: yup.string().required('Please enter todo').min(3, 'Todo is too short'),
});

function TodoForm({ onSubmit }: TodoFormProps) {
  const { control, handleSubmit, reset } = useForm<TodoFormValues>({
    defaultValues: {
      text: '',
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (formValues: TodoFormValues) => {
    if (!onSubmit) return;

    onSubmit(formValues);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField name="text" control={control} label="Todo" />
    </form>
  );
}

export default TodoForm;
