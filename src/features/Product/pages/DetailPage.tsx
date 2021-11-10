import { CircularProgress, Container, Grid, Paper } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useAppDispatch } from 'app/hooks';
import { addToCart, CartItem } from 'features/Cart/cartSlice';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddToCartForm, { AddToCartFormValues } from '../components/AddToCartForm';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReview from '../components/ProductReview';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const Loading = styled(Box)(() => ({
  height: 'calc(100vh - 4rem)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Left = styled(Grid)(({ theme }) => ({
  width: 400,
  borderRight: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
}));

const Right = styled(Grid)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
}));

function DetailPage() {
  const dispatch = useAppDispatch();
  const { productId } = useParams<{ productId: string }>();
  const { url } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Loading>
        <CircularProgress />
      </Loading>
    );
  }

  const handleAddToCartFormSubmit = (values: AddToCartFormValues) => {
    const { quantity } = values;
    const cartItem: CartItem = {
      id: productId,
      product,
      quantity,
    };

    dispatch(addToCart(cartItem));
    toast.success('Add product to cart successfully', { icon: '🤗' });
  };

  return (
    <Box py={4}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Left item>
              <ProductThumbnail product={product} />
            </Left>

            <Right item>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartFormSubmit} />
            </Right>
          </Grid>
        </Paper>

        <ProductMenu />

        <Paper elevation={0} sx={{ p: 2, minHeight: 350 }}>
          <Switch>
            <Route exact path={url}>
              <ProductDescription product={product} />
            </Route>

            <Route path={`${url}/additional`}>
              <ProductAdditional />
            </Route>

            <Route path={`${url}/reviews`}>
              <ProductReview />
            </Route>
          </Switch>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
