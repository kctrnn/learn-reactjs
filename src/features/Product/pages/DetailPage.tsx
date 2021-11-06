import { useParams } from 'react-router-dom';

function DetailPage() {
  const { productId } = useParams<{ productId: string }>();

  console.log(productId);

  return <div>Product Detail Page</div>;
}

export default DetailPage;
