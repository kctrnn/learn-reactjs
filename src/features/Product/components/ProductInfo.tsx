import { Divider, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Product } from 'models';
import { formatPrice } from 'utils';

export interface ProductInfoProps {
  product: Product;
}

const PriceBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.grey[100],

  display: 'flex',
  alignItems: 'center',
}));

const SalePrice = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(4),
  fontSize: '2rem',
  fontWeight: 'bold',
}));

const OriginalPrice = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  textDecoration: 'line-through',
}));

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <Box p={2}>
      <Typography variant="h5" component="h1">
        {product.name}
      </Typography>

      <Typography mt={2} mb={4} color="text.secondary">
        {product.shortDescription}
      </Typography>

      <PriceBox>
        <SalePrice component="span">{formatPrice(product.salePrice)}</SalePrice>

        {product.promotionPercent > 0 && (
          <Box>
            <OriginalPrice component="span">{formatPrice(product.originalPrice)}</OriginalPrice>
            <Box component="span">{`-${product.promotionPercent}%`}</Box>
          </Box>
        )}
      </PriceBox>

      <Divider />
    </Box>
  );
}

export default ProductInfo;
