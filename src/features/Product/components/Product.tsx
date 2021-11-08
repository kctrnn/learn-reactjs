import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { Product as ProductModel } from 'models';
import { useHistory } from 'react-router-dom';
import { formatPrice } from 'utils';

export interface ProductProps {
  product: ProductModel;
}

function Product({ product }: ProductProps) {
  const history = useHistory();
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Box padding={1} onClick={handleClick}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>

      <Typography variant="body2">
        <Box component="span" fontSize="1rem" fontWeight="bold" mr={1}>
          {formatPrice(product.salePrice)}
        </Box>

        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
