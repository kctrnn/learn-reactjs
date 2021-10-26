import { Grid } from '@mui/material';
import { Todo } from 'models';
import TodoCard from '../TodoCard';

export interface TodoListProps {
  todoList: Todo[];
  onDeleteClick: () => void;
  onTodoClick: (todoId: number) => void;
}

function TodoList({ todoList, onDeleteClick, onTodoClick }: TodoListProps) {
  return (
    <Grid container spacing={4} mb={4}>
      {todoList.map((todo) => (
        <Grid item key={todo.id} xs={12} md={6} lg={4}>
          <TodoCard todo={todo} onClick={onTodoClick} onDelete={onDeleteClick} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TodoList;
