import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Backdrop from 'components/Backdrop';
import Modal from 'components/Modal';
import TodoList from 'features/Todo/components/TodoList';
import { Todo } from 'models';
import { useState } from 'react';
import './styles.scss';

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [todoList, setTodoList] = useState<Todo[]>(initTodoList);

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Box>
      <Container>
        <Typography variant="h6" component="h3" mb={1}>
          Todo List
        </Typography>

        <TodoList todoList={todoList} onDeleteClick={handleDelete} />

        {modalIsOpen && <Modal onClose={handleCloseModal} onConfirm={handleCloseModal} />}
        {modalIsOpen && <Backdrop onCloseModal={handleCloseModal} />}
      </Container>
    </Box>
  );
}

export default ListPage;
