import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// ==============================|| JOURNAL - MAIN ||============================== //

export default function Journal() {
  return (
    <Grid container spacing={12} justifyContent="center" alignItems="center" sx={{ mb: 12 }}>
      <Grid item xs={12} sm={10} lg={9}>
        Journal Page content
      </Grid>
    </Grid>
  );
}
