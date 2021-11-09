import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { formatPrice } from 'utils';
import { CartItem } from '../cartSlice';
import CartQuantity from './CartQuantity';

export interface CartTableProps {
  items: CartItem[];
  onRemoveClick: (id: string) => void;
}

function CartTable({ items, onRemoveClick }: CartTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Thumbnail</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {item.product.name}
              </TableCell>

              <TableCell align="center">
                <img
                  src={item.product.images[0]}
                  alt=""
                  height={100}
                  style={{ borderRadius: 4, width: '100%', objectFit: 'cover' }}
                />
              </TableCell>

              <TableCell align="center">{formatPrice(item.product.salePrice)}</TableCell>

              <TableCell align="center">
                <CartQuantity cartItem={item} />
              </TableCell>

              <TableCell align="center">
                <Button size="small" onClick={() => onRemoveClick(item.id)} color="error">
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartTable;
