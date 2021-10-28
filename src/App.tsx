import Header from 'components/Header';
import NotFound from 'components/NotFound';
import FavoriteFeature from 'features/Favorite';
import MeetupFeature from 'features/Meetup';
import TodoFeature from 'features/Todo';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Redirect exact from="/" to="/meetups" />

        <Route path="/todos">
          <TodoFeature />
        </Route>

        <Route path="/meetups">
          <MeetupFeature />
        </Route>

        <Route path="/favorites">
          <FavoriteFeature />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
