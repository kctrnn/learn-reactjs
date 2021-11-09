import { Box, styled } from '@mui/system';
import { THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { Product } from 'models';

const Thumbnail = styled(Box)(({ theme }) => ({
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '.25rem',
  },
}));

export interface ProductThumbnailProps {
  product: Product;
}

function ProductThumbnail({ product }: ProductThumbnailProps) {
  const thumbnailUrl = product.images[0] || THUMBNAIL_PLACEHOLDER;

  return (
    <Thumbnail>
      <img src={thumbnailUrl} alt={product.name} />
    </Thumbnail>
  );
}

export default ProductThumbnail;
