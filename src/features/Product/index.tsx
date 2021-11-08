import { Box } from '@mui/system';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function ProductFeature() {
  const match = useRouteMatch();

  return (
    <Box pt={2} bgcolor="#f4f4f4">
      <Switch>
        <Route exact path={match.url}>
          <ListPage />
        </Route>

        <Route path={`${match.url}/:productId`}>
          <DetailPage />
        </Route>
      </Switch>
    </Box>
  );
}

export default ProductFeature;
