import { Paper, Stack } from '@mui/material';
import { QueryParams } from 'models';
import { FilterByCategory } from './FilterByCategory';
import { FilterByPrice } from './FilterByPrice';
import { FilterByService } from './FilterByService';

export interface ProductFiltersProps {
  filter: Partial<QueryParams>;
  onFilterChange?: (newFilter: Partial<QueryParams>) => void;
}

function ProductFilters({ filter, onFilterChange }: ProductFiltersProps) {
  const handleChange = (newFilter: Partial<QueryParams>) => {
    if (!onFilterChange) return;
    onFilterChange(newFilter);
  };

  return (
    <Stack spacing={2}>
      <Paper elevation={0}>
        <FilterByCategory filter={filter} onChange={handleChange} />
      </Paper>

      <Paper elevation={0}>
        <FilterByPrice onChange={handleChange} />
      </Paper>

      <Paper elevation={0}>
        <FilterByService filter={filter} onChange={handleChange} />
      </Paper>
    </Stack>
  );
}

export default ProductFilters;
