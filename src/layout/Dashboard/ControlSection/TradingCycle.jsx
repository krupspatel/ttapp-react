import React, { useState, forwardRef } from 'react';

// project import
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';

// assets
import CloseOutlined from '@ant-design/icons/CloseOutlined';

// material-ui
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';

// assets
import {
  DownOutlined,
  BulbOutlined,
  BankOutlined,
  FundViewOutlined,
  UpOutlined,
  PieChartOutlined,
  MonitorOutlined,
  ProjectOutlined,
} from '@ant-design/icons';
import { Typography } from '@mui/material';

function transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
}

const Transition = forwardRef(transition);

// ==============================|| LIST - NESTED ||============================== //

export default function TradingCycle() {
  const [open, setOpen] = useState('sample');

  const [openDetail, setOpenDetail] = useState(false);
  const [position, setPosition] = useState(false);
  const [openNested, setOpenNested] = useState(false);

  const handleClickOpenDeatil = () => {
    setOpenDetail(true);
  };
  const handleClickOpenNestedModal = () => {
    setOpenNested(true);
    setPosition(true);
  };

  const handleClose = () => {
    setOpenDetail(false);
  };
  const handleCloseNested = () => {
    setOpenNested(false);
    setPosition(false);
  };

  const handleClick = (page) => {
    setOpen(open !== page ? page : '');
  };

  return (
    <>
      <Typography className="cycle-title" variant="h4">
        Trading Cycle
      </Typography>
      <List sx={{ p: 0, color: '#6A7791' }}>
        <ListItem disablePadding divider>
          <ListItemButton onClick={() => handleClick('preTrade')}>
            <ListItemIcon>
              <BankOutlined />
            </ListItemIcon>
            <ListItemText primary="Preparation" />
            {open === 'preTrade' ? <DownOutlined style={{ fontSize: '0.75rem' }} /> : <UpOutlined style={{ fontSize: '0.75rem' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open === 'preTrade'} timeout="auto" unmountOnExit>
          <List disablePadding sx={{ bgcolor: 'secondary.100' }} className="pretrade">
            <ListItemButton sx={{ pl: 5 }}>
              <Badge className="status green" />
              <ListItemText primary="Psychology" />
              <Link variant="caption" color="text.primary" onClick={handleClickOpenDeatil}>
                View Details
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 5 }}>
              <Badge className="status yellow" />
              <ListItemText primary="News Analysis" />
              <Link variant="caption" color="text.primary" onClick={handleClickOpenDeatil}>
                View Details
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 5 }}>
              <Badge className="status red" />
              <ListItemText primary="Goals" />
              <Link variant="caption" color="text.primary" onClick={handleClickOpenDeatil}>
                View Details
              </Link>
            </ListItemButton>
          </List>
          <Dialog fullScreen className={position ? 'set-modal-postion trade-status-modal' : 'trade-status-modal'} open={openDetail} onClose={handleClose} TransitionComponent={Transition}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseOutlined style={{ fontSize: '20px' }} />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h4">
                Trading Status Details
              </Typography>
            </Toolbar>
            <MainCard className="tabs" sx={{ boxShadow: 'none' }}>
              <Link variant="caption" color="text.primary" onClick={handleClickOpenNestedModal}>
                View Details
              </Link>
            </MainCard>
          </Dialog>
          <Dialog fullScreen className="inner-modal" open={openNested} onClose={handleCloseNested} TransitionComponent={Transition}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleCloseNested} aria-label="close">
                <CloseOutlined style={{ fontSize: '20px' }} />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h4">
                Trading Status Details
              </Typography>
            </Toolbar>
            <MainCard className="tabs" sx={{ boxShadow: 'none' }}>
              Nested Modal
            </MainCard>
          </Dialog>
        </Collapse>
        <ListItem disablePadding divider>
          <ListItemButton onClick={() => handleClick('analysis')}>
            <ListItemIcon>
              <PieChartOutlined />
            </ListItemIcon>
            <ListItemText primary="Analysis" />
            {open === 'analysis' ? <DownOutlined style={{ fontSize: '0.75rem' }} /> : <UpOutlined style={{ fontSize: '0.75rem' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open === 'analysis'} timeout="auto" unmountOnExit>
          <List disablePadding sx={{ bgcolor: 'secondary.100' }}>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemText primary="List item 03" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemText primary="List item 04" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding divider>
          <ListItemButton onClick={() => handleClick('strategy')}>
            <ListItemIcon>
              <BulbOutlined />
            </ListItemIcon>
            <ListItemText primary="Strategy" />
            {open === 'strategy' ? <DownOutlined style={{ fontSize: '0.75rem' }} /> : <UpOutlined style={{ fontSize: '0.75rem' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open === 'strategy'} timeout="auto" unmountOnExit>
          <List disablePadding sx={{ bgcolor: 'secondary.100' }}>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemText primary="List item 03" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemText primary="List item 04" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding divider>
          <ListItemButton onClick={() => handleClick('tradePlaning')}>
            <ListItemIcon>
              <ProjectOutlined />
            </ListItemIcon>
            <ListItemText primary="Trade Planing" />
            {open === 'tradePlaning' ? <DownOutlined style={{ fontSize: '0.75rem' }} /> : <UpOutlined style={{ fontSize: '0.75rem' }} />}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton onClick={() => handleClick('tradeManagements')}>
            <ListItemIcon>
              <FundViewOutlined />
            </ListItemIcon>
            <ListItemText primary="Trade Managements" />
            {open === 'tradePlaning' ? <DownOutlined style={{ fontSize: '0.75rem' }} /> : <UpOutlined style={{ fontSize: '0.75rem' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open === 'tradePlaning'} timeout="auto" unmountOnExit>
          <List disablePadding sx={{ bgcolor: 'secondary.100' }}>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemText primary="List item 03" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemText primary="List item 04" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding divider>
          <ListItemButton onClick={() => handleClick('review')}>
            <ListItemIcon>
              <MonitorOutlined />
            </ListItemIcon>
            <ListItemText primary="Review" />
            {open === 'review' ? <DownOutlined style={{ fontSize: '0.75rem' }} /> : <UpOutlined style={{ fontSize: '0.75rem' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open === 'review'} timeout="auto" unmountOnExit>
          <List disablePadding sx={{ bgcolor: 'secondary.100' }}>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemText primary="List item 03" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemText primary="List item 04" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
}
