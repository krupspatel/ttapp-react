import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link, Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Stack spacing={0.5} direction="row" justifyContent="center" alignItems="center" className="footer">
      <Typography variant="caption">© 2024 Tradatomy All rights reserved. </Typography>
      <Link component={RouterLink} to="#" target="_blank" variant="caption" color="text.primary">
        Home
      </Link>
      <Link component={RouterLink} to="#" target="_blank" variant="caption" color="text.primary">
        Terms of Service
      </Link>
      <Link component={RouterLink} to="#" target="_blank" variant="caption" color="text.primary">
        Privacy Policy
      </Link>
      <Link component={RouterLink} to="/contact-us" target="_blank" variant="caption" color="text.primary">
        Send Feedback
      </Link>
    </Stack>
  );
}
