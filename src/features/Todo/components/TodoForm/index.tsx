import { InputField } from 'components/FormFields';
import { useForm } from 'react-hook-form';

export interface TodoFormValues {
  text: string;
}

function TodoForm() {
  const { control, handleSubmit } = useForm<TodoFormValues>({
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = (formValues: TodoFormValues) => console.log(formValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="text" control={control} label="Todo" />
    </form>
  );
}

export default TodoForm;
