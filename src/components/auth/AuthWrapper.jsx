import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// project import
import AuthCard from './AuthCard';

// assets
import logoDark from 'assets/images/largeLogo.png';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function AuthWrapper({ children }) {
  return (
    <>
      <Box sx={{ minHeight: '100vh' }}>
        <Grid container rowSpacing={4.5} columnSpacing={3}>
          <Grid item xs={12} sm={7} display="flex" justifyContent="center" alignItems="center">
            <AuthCard>{children}</AuthCard>
          </Grid>
          <Grid item xs={12} sm={5} position={'relative'}>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              sx={{
                height: { xs: '300px', sm: '100vh' },
                backgroundImage: 'radial-gradient(#01A8F8, #252F40)',
                width: '100%',
              }}
            >
              <Box sx={{ p: { xs: 3, sm: 0 } }}>
                <img src={logoDark} alt="Logo" width='100%'  />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
