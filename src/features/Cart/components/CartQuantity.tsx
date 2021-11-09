import { OutlinedInput } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch } from 'app/hooks';
import { ChangeEvent } from 'react';
import { CartItem, changeQuantity } from '../cartSlice';

export interface CartQuantityProps {
  cartItem: CartItem;
}

function CartQuantity({ cartItem }: CartQuantityProps) {
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCartItem: CartItem = {
      ...cartItem,
      quantity: Number(event.target.value),
    };

    dispatch(changeQuantity(newCartItem));
  };

  return (
    <Box width="50%" margin="0 auto">
      <OutlinedInput size="small" value={cartItem.quantity} type="number" onChange={handleChange} />
    </Box>
  );
}

export default CartQuantity;
