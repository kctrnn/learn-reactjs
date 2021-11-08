import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { QueryParams } from 'models';

export interface FilterByPriceProps {
  onChange?: (newFilter: Partial<QueryParams>) => void;
}

export function FilterByPrice({ onChange }: FilterByPriceProps) {
  return (
    <Box p={2}>
      <Typography fontSize={14} fontWeight={600} sx={{ mb: 1, textTransform: 'uppercase' }}>
        Chọn khoảng giá
      </Typography>
    </Box>
  );
}
