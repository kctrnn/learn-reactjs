import { LockOutlined } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LoginPayload } from 'models';
import LoginForm from './LoginForm';

function Login() {
  const handleSubmit = (values: LoginPayload) => {
    console.log(values);
  };

  return (
    <Box>
      <Avatar sx={{ margin: '0 auto', bgcolor: 'warning.main' }}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" align="center" my={2}>
        Sign In
      </Typography>

      <LoginForm onSubmit={handleSubmit} />
    </Box>
  );
}

export default Login;
