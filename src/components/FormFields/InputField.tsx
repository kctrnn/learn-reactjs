import { TextField } from '@mui/material';
import { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;

  label?: string;
  isSmall?: boolean;
}

export function InputField({
  name,
  control,
  label,
  isSmall = false,
  ...inputProps
}: InputFieldProps) {
  const {
    field: { ref, ...rest },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  //   field: { name, value, onChange, onBlur, ref }

  return (
    <TextField
      {...rest}
      inputRef={ref}
      margin={isSmall ? 'dense' : 'normal'}
      variant="outlined"
      autoComplete="off"
      fullWidth
      label={label}
      size={isSmall ? 'small' : 'medium'}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
}
