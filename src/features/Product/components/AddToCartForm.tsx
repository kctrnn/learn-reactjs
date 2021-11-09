import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { QuantityField } from 'components/FormFields';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface AddToCartFormProps {
  onSubmit?: (values: AddToCartFormValues) => void;
}

export interface AddToCartFormValues {
  quantity: number;
}

const schema = yup.object().shape({
  quantity: yup
    .number()
    .required('Please enter quantity')
    .min(1, 'Minimum value is 1')
    .typeError('Please enter a number'),
});

function AddToCartForm({ onSubmit }: AddToCartFormProps) {
  const { control, handleSubmit, setValue } = useForm<AddToCartFormValues>({
    defaultValues: { quantity: 1 },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (values: AddToCartFormValues) => {
    if (!onSubmit) return;

    onSubmit(values);
  };

  return (
    <Box width="50%" p={2}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <QuantityField control={control} name="quantity" label="Quantity" setValue={setValue} />

        <Button type="submit" variant="contained" fullWidth size="large">
          Add to cart
        </Button>
      </form>
    </Box>
  );
}

export default AddToCartForm;
