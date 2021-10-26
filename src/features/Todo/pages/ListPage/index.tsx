import { Container, Typography } from '@mui/material';
import Backdrop from 'components/Backdrop';
import Modal from 'components/Modal';
import TodoList from 'features/Todo/components/TodoList';
import { Todo } from 'models';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import './styles.scss';

type FilterStatus = 'all' | 'new' | 'completed';

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
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [todoList, setTodoList] = useState<Todo[]>(initTodoList);

  // const [filteredStatus, setFilteredStatus] = useState('all');
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  // trigger re-render if change URL
  // example: /todos/?status=completed -> setFilteredStatus('completed');
  useEffect(() => {
    console.log(21);
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleTodoClick = (todoId: number) => {
    const newTodoList = [...todoList];
    const index = todoList.findIndex((todo) => todo.id === todoId);

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
  };

  const handleFilterStatusClick = (newFilterStatus: FilterStatus) => {
    // setFilteredStatus(newFilterStatus);

    const queryParams = { status: newFilterStatus };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  // const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  return (
    <div>
      <Container>
        <Typography variant="h6" component="h3" mb={2}>
          TODO LIST
        </Typography>

        <TodoList
          todoList={renderedTodoList}
          onTodoClick={handleTodoClick}
          onDeleteClick={handleDelete}
        />

        {/* Filter */}
        <div>
          <button
            className="btn btn--alt btn--small"
            onClick={() => handleFilterStatusClick('all')}
          >
            Show All
          </button>
          <button
            className="btn btn--alt btn--small"
            onClick={() => handleFilterStatusClick('completed')}
          >
            Show Completed
          </button>
          <button
            className="btn btn--alt btn--small"
            onClick={() => handleFilterStatusClick('new')}
          >
            Show New
          </button>
        </div>

        {modalIsOpen && <Modal onClose={handleCloseModal} onConfirm={handleCloseModal} />}
        {modalIsOpen && <Backdrop onCloseModal={handleCloseModal} />}
      </Container>
    </div>
  );
}

export default ListPage;
