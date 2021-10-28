import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useAppSelector } from 'app/hooks';
import { selectFavoriteList } from 'features/Favorite/favoriteSlice';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)(() => ({
  color: '#fff',
}));

const BadgeStyled = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    transform: 'translate(100%, -50%)',
  },
}));

function Header() {
  const favoriteList = useAppSelector(selectFavoriteList);
  const favoriteLength = favoriteList.length;

  return (
    <Box>
      <AppBar position="static" sx={{ px: 1 }}>
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

          <LinkStyled to="/meetups">
            <Button color="inherit">Meetups</Button>
          </LinkStyled>

          <LinkStyled to="/favorites">
            <Button color="inherit">
              <BadgeStyled badgeContent={favoriteLength} color="warning">
                My Favorites
              </BadgeStyled>
            </Button>
          </LinkStyled>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
