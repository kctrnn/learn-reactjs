import { LockOutlined } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RegisterPayload } from 'models';
import RegisterForm from './RegisterForm';

function Register() {
  const handleSubmit = (values: RegisterPayload) => {
    console.log(values);
  };

  return (
    <Box>
      <Avatar sx={{ margin: '0 auto', bgcolor: 'warning.main' }}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" align="center" my={2}>
        Create An Account
      </Typography>

      <RegisterForm onSubmit={handleSubmit} />
    </Box>
  );
}

export default Register;
