import { Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import { SyntheticEvent } from 'react';

export interface ProductSortProps {
  currentSort: string;
  onChange?: (newSortValue: string) => void;
}

function ProductSort({ currentSort, onChange }: ProductSortProps) {
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    if (!onChange) return;

    onChange(newValue);
  };

  return (
    <Box>
      <Tabs value={currentSort} onChange={handleChange}>
        <Tab label="Giá thấp tới cao" value="salePrice:asc" />
        <Tab label="Giá cao xuống thấp" value="salePrice:desc" />
      </Tabs>
    </Box>
  );
}

export default ProductSort;
