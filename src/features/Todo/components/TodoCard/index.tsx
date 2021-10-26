import './styles.scss';

export interface TodoCardProps {
  text: string;
  isDone?: boolean;
  onDelete: () => void;
}

function TodoCard({ text, isDone, onDelete }: TodoCardProps) {
  const handleDeleteClick = () => {
    if (!onDelete) return;

    onDelete();
  };

  return (
    <div className="todo-card">
      <h2>{text}</h2>

      <div className="actions">
        <button className="btn" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
