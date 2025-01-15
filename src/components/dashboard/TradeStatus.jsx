import React, { forwardRef } from 'react';

// material-ui
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// project import
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';

// assets
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import TradeStatusTable from './TradeStatusTable';

function transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
}

const Transition = forwardRef(transition);

// ==============================|| DIALOG - FULL SCREEN ||============================== //

export default function TradeStatus(props) {
  // eslint-disable-next-line react/prop-types
  const { open, handleClose } = props;

  return (
    <>
      <Dialog fullScreen className="trade-status-modal" open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseOutlined style={{ fontSize: '20px' }} />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h4">
            Trading Status Details
          </Typography>
        </Toolbar>
        <MainCard className="tabs" sx={{ boxShadow: 'none' }}>
          <TradeStatusTable />
        </MainCard>
      </Dialog>
    </>
  );
}
