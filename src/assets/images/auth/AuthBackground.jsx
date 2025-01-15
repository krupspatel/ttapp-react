import React from 'react';
// material-ui
import { Box, Typography, Link } from '@mui/material';

// project imports
import logoDark from 'assets/images/logo-dark.png';
import loginBackground from 'assets/images/loginBack.png';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  return (
    <Box display="flex" position={'relative'}>
      <Typography
        variant="subtitle2"
        color="secondary"
        component={Link}
        href="https://tradatomy.com/"
        target="_blank"
        underline="hover"
        sx={{ position: 'absolute', left: 30, top: 15 }}
      >
        <img src={logoDark} alt="Logo" />
      </Typography>
      <img src={loginBackground} alt="Login Background" />
    </Box>
  );
};

export default AuthBackground;
