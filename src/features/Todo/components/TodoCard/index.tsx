import classNames from 'classnames';
import { Todo } from 'models';
import './styles.scss';

export interface TodoCardProps {
  todo: Todo;
  onDelete: () => void;
  onClick: (todoId: number) => void;
}

function TodoCard({ todo, onClick, onDelete }: TodoCardProps) {
  const handleDeleteClick = () => {
    if (!onDelete) return;

    onDelete();
  };

  const handleClick = (todoId: number) => {
    if (!onClick) return;

    onClick(todoId);
  };

  return (
    <div
      className={classNames('todo-card', {
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
  );
}

export default TodoCard;
