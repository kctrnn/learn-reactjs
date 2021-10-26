import Header from 'components/Header';
import NotFound from 'components/NotFound';
import TodoFeature from 'features/Todo';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Redirect exact from="/" to="/todos" />

        <Route path="/todos">
          <TodoFeature />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
