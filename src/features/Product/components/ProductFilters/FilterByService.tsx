import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { QueryParams } from 'models';

export interface FilterByServiceProps {
  onChange?: (newFilter: Partial<QueryParams>) => void;
}

export function FilterByService({ onChange }: FilterByServiceProps) {
  return (
    <Box p={2}>
      <Typography fontSize={14} fontWeight={500} mb={1}>
        DỊCH VỤ
      </Typography>
    </Box>
  );
}
