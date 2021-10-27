import { FilterStatus } from 'models';

export interface TodoFilterProps {
  onFilterStatusClick?: (filterStatus: FilterStatus) => void;
}

function TodoFilter({ onFilterStatusClick }: TodoFilterProps) {
  const handleClick = (filterStatus: FilterStatus) => {
    if (!onFilterStatusClick) return;
    onFilterStatusClick(filterStatus);
  };

  return (
    <div>
      <button className="btn btn--alt btn--small" onClick={() => handleClick('all')}>
        Show All
      </button>

      <button className="btn btn--alt btn--small" onClick={() => handleClick('completed')}>
        Show Completed
      </button>

      <button className="btn btn--alt btn--small" onClick={() => handleClick('new')}>
        Show New
      </button>
    </div>
  );
}

export default TodoFilter;
