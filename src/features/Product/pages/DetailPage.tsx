import { CircularProgress, Container, Grid, Paper } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';

const Loading = styled(Box)(() => ({
  height: 'calc(100vh - 4rem)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

function DetailPage() {
  const { productId } = useParams<{ productId: string }>();

  const [product, loading] = useProductDetail(productId);

  if (!loading) {
    return (
      <Loading>
        <CircularProgress />
      </Loading>
    );
  }

  return (
    <Box>
      <Container>
        <Paper>
          <Grid container>
            <Grid item width={400}>
              Thumbnail
            </Grid>

            <Grid item flex={1}>
              Product info
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
