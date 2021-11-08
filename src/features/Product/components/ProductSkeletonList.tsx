import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';

export interface ProductSkeletonListProps {
  length: number;
}

function ProductSkeletonList({ length }: ProductSkeletonListProps) {
  return (
    <Grid container>
      {Array.from(new Array(length)).map((x, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Box p={2}>
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductSkeletonList;
