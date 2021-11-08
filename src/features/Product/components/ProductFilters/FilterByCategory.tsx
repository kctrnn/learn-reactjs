import { List, ListItem, ListItemButton, ListItemText, Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import categoryApi from 'api/categoryApi';
import { Category, QueryParams } from 'models';
import { useEffect, useState } from 'react';

export interface FilterByCategoryProps {
  filter: Partial<QueryParams>;
  onChange?: (newFilter: Partial<QueryParams>) => void;
}

export function FilterByCategory({ onChange, filter }: FilterByCategoryProps) {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const currentCategoryId = filter?.categoryId || '';

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const categories = await categoryApi.getAll();
        setCategoryList(categories);
      } catch (error) {
        console.log('Fetch category list failed', error);
      }

      setLoading(false);
    };

    fetchCategoryList();
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    if (!onChange) return;

    const newFilter = {
      categoryId,
      _page: 1,
    };

    onChange(newFilter);
  };

  return (
    <Box p={2}>
      <Typography fontSize={14} fontWeight={500} sx={{ mb: 1 }}>
        DANH MỤC SẢN PHẨM
      </Typography>

      {loading &&
        Array.from(new Array(6)).map((x, idx) => (
          <Box key={idx} sx={{ pt: 1, span: { borderRadius: 1 } }}>
            <Skeleton variant="rectangular" height={40} width="100%" />
          </Box>
        ))}

      <List disablePadding>
        {categoryList.length > 0 &&
          categoryList.map((category) => (
            <ListItem
              key={category.id}
              disablePadding
              onClick={() => handleCategoryChange(category.id)}
            >
              <ListItemButton sx={{ borderRadius: 1 }}>
                <ListItemText
                  primary={category.name}
                  sx={{
                    span: {
                      fontSize: 14,
                      color: category.id === currentCategoryId ? '#ED6C02' : 'text.primary',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
}
