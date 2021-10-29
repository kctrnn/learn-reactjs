import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StorageKeys } from 'constants/index';
import { Route, RouteProps } from 'react-router-dom';

function PrivateRoute({ children, ...rest }: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem(StorageKeys.TOKEN));

  //   return <Route {...rest} render={() => (isLoggedIn ? children : <Redirect to="/login" />)} />;
  return (
    <Route
      {...rest}
      render={() =>
        isLoggedIn ? (
          children
        ) : (
          <Box pt={4}>
            <Typography align="center">Ooops! You need to login to access 😬</Typography>
          </Box>
        )
      }
    />
  );
}

export default PrivateRoute;
