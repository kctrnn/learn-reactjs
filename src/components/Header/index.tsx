import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { Dialog, DialogActions, DialogContent, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { StorageKeys } from 'constants/index';
import { logout, selectCurrentUser } from 'features/Auth/authSlice';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { selectFavoriteList } from 'features/Favorite/favoriteSlice';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const LinkStyled = styled(Link)(() => ({
  color: '#fff',
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

function Header() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const currentUser = useAppSelector(selectCurrentUser);
  const favoriteList = useAppSelector(selectFavoriteList);
  const favoriteLength = favoriteList.length;
  const isLoggedIn = Boolean(localStorage.getItem(StorageKeys.TOKEN));

  const isMeetupMode = pathname === '/meetups' || pathname === '/favorites';
  const isShoppingCartMode = pathname === '/products' || pathname === '/cart';

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());

    toast.info('Logout successfully', { icon: '😢' });
    history.push('/');
  };

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

          <LinkStyled to="/products">
            <Button color="inherit">🚀 Shopping cart</Button>
          </LinkStyled>

          <LinkStyled to="/todos">
            <Button color="inherit">Todos</Button>
          </LinkStyled>

          <LinkStyled to="/meetups">
            <Button color="inherit">Meetups</Button>
          </LinkStyled>

          {isMeetupMode && (
            <LinkStyled to="/favorites">
              <IconButton color="inherit">
                <Badge badgeContent={favoriteLength} color="error">
                  <StarsRoundedIcon color="inherit" />
                </Badge>
              </IconButton>
            </LinkStyled>
          )}

          {isShoppingCartMode && (
            <LinkStyled to="/cart">
              <IconButton color="inherit">
                <Badge badgeContent={5} color="warning">
                  <ShoppingCartRoundedIcon color="inherit" />
                </Badge>
              </IconButton>
            </LinkStyled>
          )}

          {!isLoggedIn && (
            <Button color="inherit" onClick={handleLoginClick}>
              Login
            </Button>
          )}

          {isLoggedIn && (
            <IconButton size="large" onClick={handleOpenMenu} color="inherit">
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>{`Hi ${currentUser.username} 👋`}</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {mode === MODE.LOGIN ? (
            <Login onCloseDialog={handleClose} />
          ) : (
            <Register onCloseDialog={handleClose} />
          )}
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center' }}>
          {mode === MODE.LOGIN && (
            <Button onClick={() => setMode(MODE.REGISTER)} color="primary">
              Dont have an account. Register here
            </Button>
          )}

          {mode === MODE.REGISTER && (
            <Button onClick={() => setMode(MODE.LOGIN)} color="primary">
              Already have an account. Login here
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Header;
