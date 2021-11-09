import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { IconButton, Stack, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { InputHTMLAttributes } from 'react';
import { Control, useController, UseFormSetValue } from 'react-hook-form';

const Wrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
}));

export interface QuantityFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;

  label?: string;
  setValue: UseFormSetValue<any>;
}

export function QuantityField({
  name,
  control,
  label,
  setValue,
  ...inputProps
}: QuantityFieldProps) {
  const {
    field: { ref, value, ...rest },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  //   field: { name, value, onChange, onBlur, ref }

  return (
    <Wrapper>
      <IconButton onClick={() => setValue(name, Number(value) - 1)}>
        <RemoveCircleOutlineRoundedIcon />
      </IconButton>

      <TextField
        {...rest}
        inputRef={ref}
        value={value}
        variant="standard"
        autoComplete="off"
        fullWidth
        label={label}
        error={invalid}
        helperText={error?.message}
        inputProps={inputProps}
        color="primary"
        sx={{ mx: 2 }}
      />

      <IconButton onClick={() => setValue(name, Number(value) + 1)}>
        <AddCircleOutlineRoundedIcon />
      </IconButton>
    </Wrapper>
  );
}
