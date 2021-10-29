import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { InputField, PasswordField } from 'components/FormFields';
import { LoginPayload } from 'models';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface LoginFormProps {
  onSubmit?: (formValues: LoginPayload) => void;
}

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Missing username')
    .min(4, 'Username should have at least 4 characters'),
  password: yup
    .string()
    .required('Missing password')
    .min(6, 'Password should have at least 6 characters'),
});

function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: LoginPayload) => {
    if (onSubmit) {
      await onSubmit(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField name="username" control={control} label="Username" placeholder="kctrnn" />
      <PasswordField name="password" control={control} label="Password" />

      <Button
        disabled={isSubmitting}
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        sx={{ mt: 2 }}
      >
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
