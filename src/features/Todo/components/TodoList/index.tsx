import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import classNames from 'classnames';
import { Todo } from 'models';
import { MouseEvent, useState } from 'react';
import './styles.scss';

const ModalInner = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: 400,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,

  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
}));

export interface TodoListProps {
  todoList: Todo[];
  onTodoClick: (todoId: number) => void;
  onDelete: (todoId: number) => void;
}

function TodoList({ todoList, onTodoClick, onDelete }: TodoListProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (todoId: number) => {
    if (!onTodoClick) return;
    onTodoClick(todoId);
  };

  const handleDeleteClick = (e: MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleConfirm = (todoId: number) => {
    if (!onDelete) return;

    onDelete(todoId);
    setOpen(false);
  };

  return (
    <Grid container spacing={4} mb={4}>
      {todoList.map((todo) => (
        <Grid item key={todo.id} xs={12} md={6} lg={4}>
          <div
            className={classNames('todo-item', {
              completed: todo.status === 'completed',
            })}
            onClick={() => handleClick(todo.id)}
          >
            <h2>{todo.text}</h2>

            <div>
              <p>{`Status: ${todo.status}`}</p>
              <button className="btn" onClick={handleDeleteClick}>
                Delete
              </button>
            </div>
          </div>

          <Modal open={open} onClose={handleClose}>
            <ModalInner>
              <Typography mb={2}>Are you sure?</Typography>

              <button className="btn btn--alt" onClick={handleClose}>
                Cancel
              </button>

              <button className="btn" onClick={() => handleConfirm(todo.id)}>
                Confirm
              </button>
            </ModalInner>
          </Modal>
        </Grid>
      ))}
    </Grid>
  );
}

export default TodoList;
