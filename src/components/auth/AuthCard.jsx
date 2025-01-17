import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

// project import
import MainCard from '../MainCard';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

export default function AuthCard({ children, ...other }) {
  return (
    <MainCard
      sx={{ maxWidth: { xs: 400, lg: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={(theme) => theme.customShadows.z1}
    >
      <Box sx={{ p: { xs: 0, sm: 1, xl: 5 } }}>{children}</Box>
    </MainCard>
  );
}

AuthCard.propTypes = { children: PropTypes.any, other: PropTypes.any };
