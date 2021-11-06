import Header from 'components/Header';
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import FavoriteFeature from 'features/Favorite';
import MeetupFeature from 'features/Meetup';
import ProductFeature from 'features/Product';
import TodoFeature from 'features/Todo';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Redirect exact from="/" to="/todos" />

        <Route path="/todos">
          <TodoFeature />
        </Route>

        <PrivateRoute path="/meetups">
          <MeetupFeature />
        </PrivateRoute>

        <Route path="/favorites">
          <FavoriteFeature />
        </Route>

        <Route path="/products">
          <ProductFeature />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
