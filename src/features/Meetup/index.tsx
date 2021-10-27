import { Box } from '@mui/system';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

function MeetupFeature() {
  const match = useRouteMatch();

  return (
    <Box>
      <Switch>
        <Route exact path={match.path}>
          <ListPage />
        </Route>

        <Route path={`${match.path}/add`}>
          <AddEditPage />
        </Route>

        <Route path={`${match.path}/:meetupId`}>
          <AddEditPage />
        </Route>
      </Switch>
    </Box>
  );
}

export default MeetupFeature;
