import { Button, Chip, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Link } from 'react-router-dom';
import { formatPrice } from 'utils';
import { cartTotalSelector } from './cartSelector';
import { removeFromCart, selectCartItems } from './cartSlice';
import CartTable from './components/CartTable';

function CartFeature() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(cartTotalSelector);

  const handleRemoveClick = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container maxWidth="md" sx={{ pt: 4 }}>
      {cartItems.length === 0 && (
        <Box textAlign="center">
          <Typography mb={2}>You got no item yet. Start adding some? 🛒</Typography>

          <Link to="/products">
            <Button variant="contained" size="small" color="warning">
              All products
            </Button>
          </Link>
        </Box>
      )}

      {cartItems.length > 0 && <CartTable items={cartItems} onRemoveClick={handleRemoveClick} />}

      {cartTotal > 0 && (
        <Stack mt={4} direction="row" alignItems="center" justifyContent="flex-end">
          <Chip color="warning" label="TOTAL" clickable />

          <Typography component="span" variant="h6" minWidth={100} ml={2}>
            {formatPrice(cartTotal)}
          </Typography>
        </Stack>
      )}
    </Container>
  );
}

export default CartFeature;
