import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { InputField } from 'components/FormFields';
import { QueryParams } from 'models';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  min: yup.number().min(0, 'Giá trị nhỏ nhất là 0'),
  max: yup.number().test('invalid', 'Giá trị lớn nhất không hợp lệ', (value, context) => {
    if (!value) return false;
    return value >= context.parent.min;
  }),
});

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

    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: PricePayload) => {
    const newFilter = {
      salePrice_gte: Number(formValues.min),
      salePrice_lte: Number(formValues.max),
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
