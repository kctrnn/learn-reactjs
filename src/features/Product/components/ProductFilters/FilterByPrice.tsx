import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { InputField } from 'components/FormFields';
import { QueryParams } from 'models';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface FilterByPriceProps {
  onChange?: (newFilter: Partial<QueryParams>) => void;
}

export interface PricePayload {
  min: number;
  max: number;
}

export function FilterByPrice({ onChange }: FilterByPriceProps) {
  const { control, handleSubmit } = useForm<PricePayload>({
    defaultValues: {
      min: 0,
      max: 0,
    },
    // resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: PricePayload) => {
    const newFilter = {
      salePrice_gte: Number(formValues.min) || undefined,
      salePrice_lte: Number(formValues.max) || undefined,
      _page: 1,
    };

    if (onChange) {
      onChange(newFilter);
    }
  };

  return (
    <Box p={2}>
      <Typography fontSize={14} fontWeight={500} mb={1}>
        CHỌN KHOẢNG GIÁ
      </Typography>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField type="number" name="min" control={control} isSmall label="min" step={10000} />
        <InputField type="number" name="max" control={control} isSmall label="max" step={10000} />

        <Box mt={1}>
          <Button size="small" variant="outlined" type="submit">
            Áp dụng
          </Button>
        </Box>
      </form>
    </Box>
  );
}
