import { Divider } from '@mui/material';
import { Box } from '@mui/system';
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
    <Box>
      <FilterByCategory filter={filter} onChange={handleChange} />
      <Divider />

      <FilterByPrice onChange={handleChange} />
      <Divider />

      <FilterByService filter={filter} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
