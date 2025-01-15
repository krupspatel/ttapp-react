import React from 'react';

// project import
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';

// material-ui
import Box from '@mui/material/Box';

import { MenuUnfoldOutlined } from '@ant-design/icons';
import TradingCycle from './TradingCycle';

// ==============================|| MAIN LAYOUT ||============================== //

export default function ControlSection(props) {
  // eslint-disable-next-line react/prop-types
  const { open, handleClose, userType } = props;
  return (
    <MainCard content={false} border={0}>
      <Box open={open} className={open ? 'control-box' : 'hide-control-box'} sx={{
        display: open ? 'block' : 'none',
        top: userType === 'is_premium' ? '0px' : '60px',
        inset: userType === 'is_premium' ? '0px 45px auto auto' : '60px 45px auto auto',
      }} onClose={handleClose}>
        <IconButton edge="start" className={'close-control'} sx={{ top: userType === 'is_premium' ? '0px' : '65px' }} onClick={handleClose} aria-label="close">
          <MenuUnfoldOutlined style={{ fontSize: '20px' }} />
        </IconButton>
        <TradingCycle />
      </Box>
    </MainCard>
  );
}
