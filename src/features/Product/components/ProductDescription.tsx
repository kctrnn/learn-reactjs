import { Box } from '@mui/system';
import DOMPurify from 'dompurify';
import { Product } from 'models';

export interface ProductDescriptionProps {
  product: Product;
}

function ProductDescription({ product }: ProductDescriptionProps) {
  const safeDescription = DOMPurify.sanitize(product.description);

  return <Box px={4} dangerouslySetInnerHTML={{ __html: safeDescription }} />;
}

export default ProductDescription;
