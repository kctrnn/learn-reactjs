import Backdrop from 'components/Backdrop';
import Modal from 'components/Modal';
import TodoCard from 'features/Todo/components/TodoCard';
import { useState } from 'react';
import './styles.scss';

function ListPage() {
  const todoList = [
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

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h3>Todo List</h3>

      {todoList.map((todo) => (
        <TodoCard key={todo.id} text={todo.text} onDelete={handleDelete} />
      ))}

      {modalIsOpen && <Modal onClose={handleCloseModal} onConfirm={handleCloseModal} />}
      {modalIsOpen && <Backdrop onCloseModal={handleCloseModal} />}
    </div>
  );
}

export default ListPage;
