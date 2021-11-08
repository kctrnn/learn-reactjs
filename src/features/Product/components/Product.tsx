import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { Product as ProductModel } from 'models';
import { useHistory } from 'react-router-dom';
import { formatPrice } from 'utils';

const Thumbnail = styled(Box)(({ theme }) => ({
  height: 200,
  marginBottom: theme.spacing(1),

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '.25rem',
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  transition: 'transform 200ms ease-in-out',

  '&:hover': {
    cursor: 'pointer',
    transform: 'translateY(-4px)',
  },
}));

export interface ProductProps {
  product: ProductModel;
}

function Product({ product }: ProductProps) {
  const history = useHistory();
  const thumbnailUrl = product.images[0] || THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Thumbnail>
        <img src={thumbnailUrl} alt={product.name} />
      </Thumbnail>

      <Typography variant="body2">{product.name}</Typography>

      <Typography variant="body2">
        <Box component="span" fontSize="1rem" fontWeight="bold" mr={2}>
          {formatPrice(product.salePrice)}
        </Box>

        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Wrapper>
  );
}

export default Product;
