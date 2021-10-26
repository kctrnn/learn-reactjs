import Backdrop from 'components/Backdrop';
import Modal from 'components/Modal';
import TodoCard from 'features/Todo/components/TodoCard';
import { useState } from 'react';

function ListPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <TodoCard text="Learn HTML/CSS" />
      <TodoCard text="Learn Javascript" />
      <TodoCard text="Learn ReactJS" />

      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </div>
  );
}

export default ListPage;
