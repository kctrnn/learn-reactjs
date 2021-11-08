import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { QueryParams } from 'models';

export interface FilterByServiceProps {
  onChange?: (newFilter: Partial<QueryParams>) => void;
}

export function FilterByService({ onChange }: FilterByServiceProps) {
  return (
    <Box p={2}>
      <Typography fontSize={14} fontWeight={600} sx={{ mb: 1, textTransform: 'uppercase' }}>
        Dịch vụ
      </Typography>
    </Box>
  );
}
