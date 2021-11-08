import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { fetchProductList, selectProductFilter, selectProductList } from '../productSlice';

function ListPage() {
  const dispatch = useAppDispatch();

  const productList = useAppSelector(selectProductList);
  const filter = useAppSelector(selectProductFilter);

  useEffect(() => {
    dispatch(fetchProductList(filter));
  }, [filter, dispatch]);

  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item width={250}>
            <Paper elevation={0}>FILTERS</Paper>
          </Grid>

          <Grid item flex={1}>
            <Paper elevation={0}>
              <ProductList productList={productList} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
