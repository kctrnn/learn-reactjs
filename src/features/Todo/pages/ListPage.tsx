import { Container, Typography } from '@mui/material';
import { TODO_LIST } from 'constants/index';
import TodoForm from 'features/Todo/components/TodoForm';
import TodoList from 'features/Todo/components/TodoList';
import { Todo, TodoFormValues } from 'models';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

type FilterStatus = 'all' | 'new' | 'completed';

function ListPage() {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState<Todo[]>(TODO_LIST);

  // const [filteredStatus, setFilteredStatus] = useState('all');
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  // trigger re-render if change URL
  // example: /todos/?status=completed -> setFilteredStatus('completed');
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  // const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  const handleTodoClick = (todoId: number) => {
    const newTodoList = [...todoList];
    const index = todoList.findIndex((todo) => todo.id === todoId);

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (todoId: number) => {
    const newTodoList = [...todoList];
    const index = todoList.findIndex((todo) => todo.id === todoId) - 1;

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (values: TodoFormValues) => {
    const newTodo: Todo = {
      id: todoList.length + 1,
      text: values.text,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];

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

  return (
    <div>
      <Container>
        <Typography variant="h6" component="h3">
          🤔 What to do
        </Typography>

        <TodoForm onSubmit={handleTodoFormSubmit} />

        <Typography variant="h6" component="h3" mt={4} mb={2}>
          TODO LIST
        </Typography>

        <TodoList
          todoList={renderedTodoList}
          onTodoClick={handleTodoClick}
          onDelete={handleDeleteTodo}
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

        {/* {modalIsOpen && <Modal onClose={handleCloseModal} onConfirm={handleCloseModal} />}
        {modalIsOpen && <Backdrop onCloseModal={handleCloseModal} />} */}
      </Container>
    </div>
  );
}

export default ListPage;
