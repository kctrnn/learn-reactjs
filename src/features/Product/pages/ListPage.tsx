import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { productApi } from 'api/productApi';
import { Product } from 'models';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

function ListPage() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const { data } = await productApi.getAll({
          _page: 1,
          _limit: 10,
        });

        setProductList(data);
      } catch (error) {
        console.log('Fetch product list failed', error);
      }
    };

    fetchProductList();
  }, []);

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
