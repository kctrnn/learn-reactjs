import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function TodoFeature() {
  const match = useRouteMatch();

  return (
    <div>
      {/* TODO SHARE UI */}

      <Switch>
        <Route exact path={match.path}>
          <ListPage />
        </Route>

        <Route path={`${match.path}/:todoId`}>
          <DetailPage />
        </Route>
      </Switch>
    </div>
  );
}

export default TodoFeature;
