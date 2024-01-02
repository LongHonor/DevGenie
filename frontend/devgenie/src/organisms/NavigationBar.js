import React from 'react';
import { Link, Outlet, matchPath, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Tabs,
  Tab,
  IconButton,
  InputBase,
} from '@mui/material';
import { createTheme, styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled('div')(({ theme }) => ({
  'position': 'relative',
  'borderRadius': theme.shape.borderRadius,
  'backgroundColor': alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  'marginLeft': 0,
  'width': '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  'color': 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      'width': '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NavigationBar = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='info'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            to='/'
            component={Link}
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              color: 'inherit',
              letterSpacing: '.1rem',
              textDecoration: 'none',
            }}
          >
            DevGenie
          </Typography>

          <Tabs value={pathname} textColor='inherit'>
            <Tab
              label='문제'
              value='/quizlist'
              to='/quizlist'
              component={Link}
            />
            <Tab
              label='되새김'
              value='/reminder'
              to='/reminder'
              component={Link}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
