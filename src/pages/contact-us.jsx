import React from 'react';
// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// project imports
import ContactForm from 'components/extra-pages/contact-us/ContactForm';
import ContactHeader from 'components/extra-pages/contact-us/ContactHeader';

// ==============================|| CONTACT US - MAIN ||============================== //

export default function contactUS() {
  return (
    <Grid container spacing={12} justifyContent="center" alignItems="center" sx={{ mb: 12 }}>
      <Grid item xs={12} md={12}>
        <ContactHeader />
      </Grid>
      <Grid item xs={12} sm={10} lg={9}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          <ContactForm />
        </Container>
      </Grid>
    </Grid>
  );
}
