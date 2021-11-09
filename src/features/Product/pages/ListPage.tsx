import { Container, Grid, Paper } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Box, styled } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { QueryParams } from 'models';
import { ChangeEvent, useEffect } from 'react';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import {
  fetchProductList,
  selectProductFilter,
  selectProductList,
  selectProductLoading,
  selectProductPagination,
  setFilter,
} from '../productSlice';

const PaginationStyled = styled(Pagination)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',

  marginTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

function ListPage() {
  const dispatch = useAppDispatch();

  const productList = useAppSelector(selectProductList);
  const loading = useAppSelector(selectProductLoading);
  const filter = useAppSelector(selectProductFilter);
  const pagination = useAppSelector(selectProductPagination);

  useEffect(() => {
    dispatch(fetchProductList(filter));
  }, [filter, dispatch]);

  // pagination
  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    const newFilter = {
      ...filter,
      _page: page,
    };

    dispatch(setFilter(newFilter));
  };

  // filter
  const handleFilterChange = (newFilter: Partial<QueryParams>) => {
    dispatch(
      setFilter({
        ...filter,
        ...newFilter,
      })
    );
  };

  // sort
  const handleSortChange = (newSortValue: string) => {
    // salePrice:desc -> sortBy: salePrice, orderBy: desc
    const [sortBy, orderBy] = newSortValue.split(':');

    dispatch(
      setFilter({
        ...filter,
        _sort: sortBy,
        _order: orderBy as 'asc' | 'desc',
      })
    );
  };

  return (
    <Box pt={2}>
      <Container>
        <Grid container spacing={2}>
          <Grid item width={250}>
            <ProductFilters filter={filter} onFilterChange={handleFilterChange} />
          </Grid>

          <Grid item flex={1}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={`${filter._sort}:${filter._order}`}
                onChange={handleSortChange}
              />

              {/* Filter viewer */}

              {loading ? (
                <ProductSkeletonList length={10} />
              ) : (
                <ProductList productList={productList} />
              )}

              <PaginationStyled
                shape="rounded"
                variant="outlined"
                color="primary"
                count={Math.ceil(pagination._totalRows / pagination._limit)}
                page={pagination._page}
                onChange={handlePageChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
