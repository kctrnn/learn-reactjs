import { Grid } from '@mui/material';
import { Todo } from 'models';
import TodoCard from '../TodoCard';

export interface TodoListProps {
  todoList: Todo[];
  onDeleteClick: () => void;
}

function TodoList({ todoList, onDeleteClick }: TodoListProps) {
  return (
    <Grid container spacing={4}>
      {todoList.map((todo) => (
        <Grid item key={todo.id} xs={12} md={6} lg={4}>
          <TodoCard text={todo.text} onDelete={onDeleteClick} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TodoList;
