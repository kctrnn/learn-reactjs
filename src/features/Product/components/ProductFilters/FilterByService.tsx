import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { QueryParams } from 'models';
import { ChangeEvent } from 'react';

export interface FilterByServiceProps {
  filter: Partial<QueryParams>;
  onChange?: (newFilter: Partial<QueryParams>) => void;
}

export function FilterByService({ onChange, filter }: FilterByServiceProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    const { checked, name } = event.target;
    const newFilter = {
      [name]: name === 'isPromotion' ? Number(checked) : checked,
      _page: 1,
    };

    onChange(newFilter);
  };

  return (
    <Box p={2}>
      <Typography fontSize={14} fontWeight={500} mb={1}>
        DỊCH VỤ
      </Typography>

      <FormGroup>
        <FormControlLabel
          sx={{ span: { fontSize: 14 } }}
          control={
            <Checkbox
              name="isPromotion"
              onChange={handleChange}
              checked={Boolean(filter.isPromotion)}
            />
          }
          label="Có khuyến mãi"
        />

        <FormControlLabel
          sx={{ span: { fontSize: 14 } }}
          control={
            <Checkbox
              name="isFreeShip"
              onChange={handleChange}
              checked={Boolean(filter.isFreeShip)}
            />
          }
          label="Vận chuyển miễn phí"
        />
      </FormGroup>
    </Box>
  );
}
