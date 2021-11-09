import { CircularProgress, Container, Grid, Paper } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useAppDispatch } from 'app/hooks';
import { addToCart, CartItem } from 'features/Cart/cartSlice';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddToCartForm, { AddToCartFormValues } from '../components/AddToCartForm';
import ProductInfo from '../components/ProductInfo';
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
    <Box pt={2}>
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
      </Container>
    </Box>
  );
}

export default DetailPage;
