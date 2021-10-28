import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { InputHTMLAttributes, MouseEvent, useState } from 'react';
import { Control, useController } from 'react-hook-form';

export interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;

  label?: string;
}

export function PasswordField({ name, control, label, ...inputProps }: PasswordFieldProps) {
  const {
    field: { ref, ...rest },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...rest}
      inputRef={ref}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
      label={label}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={toggleShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
