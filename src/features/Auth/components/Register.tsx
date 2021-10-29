import { LockOutlined } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch } from 'app/hooks';
import { RegisterPayload } from 'models';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../authSlice';
import RegisterForm from './RegisterForm';

export interface RegisterProps {
  onCloseDialog?: () => void;
}

function Register({ onCloseDialog }: RegisterProps) {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleSubmit = async (values: RegisterPayload) => {
    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      if (onCloseDialog) {
        onCloseDialog();
      }

      toast.success('Register successfully', { icon: '🎉' });
      history.push('/meetups');
    } catch (err) {
      toast.error('Failed to register');
    }
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
