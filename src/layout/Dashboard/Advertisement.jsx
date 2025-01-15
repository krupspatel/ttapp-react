import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function Advertisement() {
  return (
    <Box className="ads-banner">
      <Container maxWidth="xl" sx={{ display: 'flex' }}>
        <Grid container alignItems={'center'}>
          <Grid item xs={12} sm={4} alignItems={'center'}>
            <Typography
              variant={'h4'}
              sx={{
                fontFamily: '"Ribeye", serif',
                fontSize: {
                  md: 19,
                  sm: 14,
                  xs: 12,
                },
              }}
            >
              Using Paypal
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant={'h4'}
              sx={{
                fontFamily: '"Ribeye", serif',
                fontSize: {
                  md: 19,
                  sm: 14,
                  xs: 12,
                },
              }}
            >
              20% Discount on Combo Burger
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display={'flex'} justifyContent={'flex-end'} columnGap={1}>
              <Typography
                variant={'h4'}
                sx={{
                  fontSize: {
                    md: 19,
                    sm: 14,
                    xs: 12,
                  },
                }}
              >
                Download on iOS
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '30px',
                  height: '30px',
                  background: '#0A5C36',
                  color: '#ffffff',
                  borderRadius: '5px',
                  fontSize: '6px',
                  fontFamily: '"Ribeye", serif',
                }}
              >
                Burger Shop
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
