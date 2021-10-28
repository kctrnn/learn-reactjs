import { Button, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { removeToFavorite, selectFavoriteList } from './favoriteSlice';

function FavoriteFeature() {
  const dispatch = useAppDispatch();
  const favoriteList = useAppSelector(selectFavoriteList);

  const handleRemoveClick = (meetupId: string) => {
    dispatch(removeToFavorite(meetupId));
  };

  return (
    <Container maxWidth="md" sx={{ pt: 4 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {favoriteList.map((favorite) => (
              <TableRow
                key={favorite.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {favorite.title}
                </TableCell>
                <TableCell>{favorite.description}</TableCell>
                <TableCell>{favorite.address}</TableCell>
                <TableCell>
                  <Button size="small" onClick={() => handleRemoveClick(favorite.id || '')}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default FavoriteFeature;
