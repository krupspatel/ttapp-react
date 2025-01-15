/* eslint-disable react/prop-types */
import React from 'react';
// material-ui
import { CrownOutlined } from '@ant-design/icons';
import { Stack, Box, Typography, Button } from '@mui/material';

import Notification from 'layout/Dashboard/Notification';
import Profile from 'layout/Dashboard/Profile';
import Badge from 'assets/images/badge.png';

export default function HeaderContent(props) {
  return (
    <Box sx={{ mb: 1 }} display={'flex'} justifyContent={'end'} alignItems={'center'} gap={3}>
      {props.userType === 'is_premium' ? null :
        <Stack>
          <Button className="btn-upgrade" startIcon={<CrownOutlined />}>
            Upgrade to Tradatomy PRO
          </Button>
        </Stack>
      }
      <Stack>
        <Typography variant="h6" className="trader-status">
          <span className="status"></span>Live 11:00:00 AM
        </Typography>
      </Stack>
      <Box display={'flex'} justifyContent={'end'} alignItems={'center'} gap={1}>
        <Stack alignItems="end" spacing={2}>
          <Notification />
        </Stack>
        <Stack alignItems="end" spacing={2}>
          <Profile />
        </Stack>
        <Stack alignItems="center" sx={{ fontSize: 10, textAlign: 'center' }}>
          <img src={Badge} alt="Points" />
          Today: Up 75 pts
        </Stack>
      </Box>
    </Box>
  );
}
