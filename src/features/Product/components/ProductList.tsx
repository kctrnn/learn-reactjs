import { Grid, Typography } from '@mui/material';
import { Product as ProductModel } from 'models';
import Product from './Product';

export interface ProductListProps {
  productList: ProductModel[];
}

function ProductList({ productList }: ProductListProps) {
  if (productList.length === 0) {
    return <Typography align="center">No products were found 😢</Typography>;
  }

  return (
    <Grid container>
      {productList.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
