import './styles.scss';

export interface TodoCardProps {
  text: string;
  isDone?: boolean;
}

function TodoCard({ text, isDone }: TodoCardProps) {
  return (
    <div className="todo-card">
      <h2>{text}</h2>

      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default TodoCard;
