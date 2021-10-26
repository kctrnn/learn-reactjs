import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)(() => ({
  color: '#fff',
}));

function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LinkStyled to="/">24H DEV</LinkStyled>
          </Typography>

          <LinkStyled to="/todos">
            <Button color="inherit">Todos</Button>
          </LinkStyled>

          <LinkStyled to="/">
            <Button color="inherit">Foods</Button>
          </LinkStyled>

          <LinkStyled to="/">
            <Button color="inherit">Login</Button>
          </LinkStyled>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
