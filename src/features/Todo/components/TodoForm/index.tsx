import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/FormFields';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface TodoFormValues {
  text: string;
}

const schema = yup.object().shape({
  text: yup.string().required('Please enter todo').min(5, 'Todo is too short'),
});

function TodoForm() {
  const { control, handleSubmit } = useForm<TodoFormValues>({
    defaultValues: {
      text: '',
    },

    resolver: yupResolver(schema),
  });

  const onSubmit = (formValues: TodoFormValues) => console.log(formValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="text" control={control} label="Todo" />
    </form>
  );
}

export default TodoForm;
