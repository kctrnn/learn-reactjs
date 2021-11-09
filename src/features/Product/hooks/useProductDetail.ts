import { productApi } from 'api/productApi';
import { Product } from 'models';
import { useEffect, useState } from 'react';

function useProductDetail(productId: string) {
  const [product, setProduct] = useState<Product>({} as Product);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const product = await productApi.get(productId);
        setProduct(product);
      } catch (error) {
        console.log('Fetch product failed', error);
      }

      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}

export default useProductDetail;
