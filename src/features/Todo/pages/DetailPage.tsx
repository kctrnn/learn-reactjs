import { useParams } from 'react-router-dom';

function DetailPage() {
  const { todoId } = useParams<{ todoId: string }>();
  console.log(todoId);

  return <div>Todo Detail Page</div>;
}

export default DetailPage;
