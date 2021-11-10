import { Stack } from '@mui/material';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Wrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(4, 0),

  '& > a': {
    color: theme.palette.grey[700],
    textDecoration: 'none',
  },

  '& > a.active': {
    color: theme.palette.primary.main,
  },
}));

function ProductMenu() {
  const { url } = useRouteMatch();

  return (
    <Wrapper direction="row" spacing={2} justifyContent="center">
      <Link component={NavLink} to={url} exact>
        Description
      </Link>

      <Link component={NavLink} to={`${url}/additional`}>
        Additional Information
      </Link>

      <Link component={NavLink} to={`${url}/reviews`}>
        Reviews
      </Link>
    </Wrapper>
  );
}

export default ProductMenu;
