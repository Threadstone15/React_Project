import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import Switch from '@mui/material/Switch';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-right: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Navbar
        </Typography>
        <StyledLink to="/">
          <Button color="inherit">Home</Button>
        </StyledLink>
        <StyledLink to="/about">
          <Button color="inherit">About</Button>
        </StyledLink>
        <StyledLink to="/contact-us">
          <Button color="inherit">Contact Us</Button>
        </StyledLink>
        <Switch checked={mode === 'dark'} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
