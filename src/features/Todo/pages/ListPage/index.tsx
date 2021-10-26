import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Backdrop from 'components/Backdrop';
import Modal from 'components/Modal';
import TodoList from 'features/Todo/components/TodoList';
import { Todo } from 'models';
import { useMemo, useState } from 'react';
import './styles.scss';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

function ListPage() {
  const initTodoList: Todo[] = [
    {
      id: 1,
      text: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      text: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      text: 'Code',
      status: 'new',
    },
  ];
  const location = useLocation();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [todoList, setTodoList] = useState<Todo[]>(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  return (
    <Box>
      <Container>
        <Typography variant="h6" component="h3" mb={1}>
          Todo List
        </Typography>

        <TodoList todoList={renderedTodoList} onDeleteClick={handleDelete} />

        {modalIsOpen && <Modal onClose={handleCloseModal} onConfirm={handleCloseModal} />}
        {modalIsOpen && <Backdrop onCloseModal={handleCloseModal} />}
      </Container>
    </Box>
  );
}

export default ListPage;
