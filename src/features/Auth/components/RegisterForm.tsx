import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import { InputField, PasswordField } from 'components/FormFields';
import { RegisterPayload } from 'models';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const Flex = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& > *:first-child': {
    marginRight: '1rem',
  },
});

export interface RegisterFormProps {
  onSubmit?: (formValues: RegisterPayload) => void;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Missing name')
    .test('should has at least two words', 'Please enter at least two words', (value) => {
      if (!value) return false;
      return value.split(' ').length >= 2;
    }),
  email: yup.string().required('Missing email').email('Please enter a valid email address'),

  username: yup
    .string()
    .required('Missing username')
    .min(4, 'Username should have at least 4 characters'),
  password: yup
    .string()
    .required('Missing password')
    .min(6, 'Password should have at least 6 characters'),
});

function RegisterForm({ onSubmit }: RegisterFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterPayload>({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      name: '',
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: RegisterPayload) => {
    if (onSubmit) {
      await onSubmit(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField name="username" control={control} label="Username" />

      <Flex>
        <InputField name="email" control={control} label="Email" />
        <InputField name="name" control={control} label="Full name" />
      </Flex>

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
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
