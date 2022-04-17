import {
  AppBar, Badge, Toolbar, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const FavoriteIconFillStyled = styled(FavoriteIcon)`
  color: #fff; 
  cursor:pointer;
`;

export default function Navbar() {
  const favorite = useSelector((state: any) => state.favorite);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              style={{ color: '#fff', textDecoration: 'none' }}
              to={{
                pathname: '/',
              }}
            >
              Favorite Artist | Gapstars
            </Link>
          </Typography>
          <Badge badgeContent={favorite.length ?? 0} color="error">
            <Link
              to={{
                pathname: '/favorite',
              }}
            >
              <FavoriteIconFillStyled />
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
      <Box mt={5} />
    </Box>
  );
}
