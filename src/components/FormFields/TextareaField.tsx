import { TextField } from '@mui/material';
import { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface TextareaFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  rows: number;

  label?: string;
}

export function TextareaField({ name, control, label, rows, ...inputProps }: TextareaFieldProps) {
  const {
    field: { ref, ...rest },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

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
      multiline
      rows={rows}
    />
  );
}
