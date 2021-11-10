import { Chip, Stack } from '@mui/material';
import { FILTER_LIST } from 'constants/index';
import { QueryParams } from 'models';
import { useMemo } from 'react';

export interface FilterViewerProps {
  filter: Partial<QueryParams>;
  onChange: (newFilter: Partial<QueryParams>) => void;
}

function FilterViewer({ filter, onChange }: FilterViewerProps) {
  const visibleFilter = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filter));
  }, [filter]);

  return (
    <Stack direction="row" spacing={2} mt={2} p={2}>
      {visibleFilter.map((item, idx) => (
        <Chip
          key={idx}
          color="primary"
          variant={item.isActive(filter) ? 'filled' : 'outlined'}
          label={item.getLabel(filter)}
          onClick={
            !item.onToggle
              ? undefined
              : () => {
                  onChange(item.onToggle(filter));
                }
          }
          onDelete={
            !item.onRemove
              ? undefined
              : () => {
                  onChange(item.onRemove());
                }
          }
        />
      ))}
    </Stack>
  );
}

export default FilterViewer;
