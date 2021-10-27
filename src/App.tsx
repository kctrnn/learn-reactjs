import Header from 'components/Header';
import NotFound from 'components/NotFound';
import MeetupFeature from 'features/Meetup';
import TodoFeature from 'features/Todo';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Redirect exact from="/" to="/todos" />

        <Route path="/todos">
          <TodoFeature />
        </Route>

        <Route path="/meetups">
          <MeetupFeature />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
