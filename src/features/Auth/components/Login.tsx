import { LockOutlined } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch } from 'app/hooks';
import { LoginPayload } from 'models';
import { toast } from 'react-toastify';
import { login } from '../authSlice';
import LoginForm from './LoginForm';

export interface LoginProps {
  onCloseDialog?: () => void;
}

function Login({ onCloseDialog }: LoginProps) {
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: LoginPayload) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      if (onCloseDialog) {
        onCloseDialog();
      }

      toast.success('Login successfully', { icon: '🎉' });
    } catch (err) {
      toast.error('Failed to login');
    }
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
