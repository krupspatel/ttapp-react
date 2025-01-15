/* eslint-disable react/prop-types */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';
// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

// assets
import {
  ProfileOutlined,
  HomeOutlined,
  CalendarOutlined,
  ToolOutlined,
  HourglassOutlined,
  StarOutlined,
  MessageOutlined,
  PlusOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';
import LogoMain from 'components/logo/LogoMain';

// ===============================|| CUSTOM - SHADOW BOX ||=============================== //

 
function CustomShadowBox({ shadow, label, bgcolor }) {
  return (
    <MainCard border={false} shadow={shadow} boxShadow sx={{ bgcolor: bgcolor || 'inherit' }}>
      <Stack spacing={1} justifyContent="center" alignItems="center">
        {label}
      </Stack>
    </MainCard>
  );
}
// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

export default function MainDrawer(props) {
  // const [isHovered, setIsHovered] = useState(false);
  // useEffect(() => {
  //   setIsHovered(false);
  // }, []);
  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="menu">
      <MainCard
        content={false}
        boxShadow
        sx={{
          py: 2.5,
          top: props.userType === 'is_premium' ? '0px' : '60px',
          height: props.userType === 'is_premium' ? '100%' : 'calc(100% - 60px)'
        }}
        className={'menu-items'}
        // onMouseOver={() => setIsHovered(true)}
        // onMouseOut={() => setIsHovered(false)}
      >
        {/* <LogoIcon /> */}
        {/* <Box className="main-logo">{isHovered ? <LogoMain /> : <LogoIcon />}</Box> */}
        <Box className="main-logo">
          <LogoMain />
        </Box>
        <Box className="create-new">
          <Link variant="h6" component={RouterLink} to={'/dashboard'} color="text.primary">
            <Box sx={{ minWidth: '30px' }}>
              <CustomShadowBox shadow={1} label={<PlusOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
            </Box>
            <Typography variant="subtitle1" color="secondary">
              Trade
            </Typography>
          </Link>
        </Box>
        <List
          className="navigation"
          component="nav"
          sx={{
            p: 0,
            width: '100%',
            minWidth: 200,
            maxWidth: { xs: 300 },
            bgcolor: 'background.paper',
            borderRadius: 0.5,
          }}
        >
          <ListItemText
            sx={{ m: 0 }}
            primary={
              <Link variant="h6" component={RouterLink} to={'/dashboard'} color="text.primary">
                <Box sx={{ minWidth: '30px' }}>
                  <CustomShadowBox shadow={1} label={<HomeOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
                </Box>
                <Box display={'flex'} flexDirection={'column'} className="menu-title">
                  <Typography variant="subtitle1" color="secondary">
                    <FormattedMessage id="home" />
                  </Typography>
                  <Typography variant="Caption" sx={{ fontSize: '10px' }}>
                    View summaries of all content directly on the dashboard
                  </Typography>
                </Box>
              </Link>
            }
          />
          <Box>
            <Typography variant="subtitle1" color="secondary" className="sub-title">
              YOUR APPS
            </Typography>
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Link variant="h6" component={RouterLink} to={'/dashboard'} color="text.primary">
                  <Box sx={{ minWidth: '30px' }}>
                    <CustomShadowBox shadow={1} label={<ProfileOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} className="menu-title">
                    <Typography variant="subtitle1" color="secondary">
                      <FormattedMessage id="performance" />
                    </Typography>
                    <Typography variant="Caption" sx={{ fontSize: '10px' }}>
                      Refers to the measurement and evaluation of a trader’s success
                    </Typography>
                  </Box>
                </Link>
              }
            />
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Link variant="h6" component={RouterLink} to={'/journal'} color="text.primary">
                  <Box sx={{ minWidth: '30px' }}>
                    <CustomShadowBox shadow={1} label={<CalendarOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} className="menu-title">
                    <Typography variant="subtitle1" color="secondary">
                      <FormattedMessage id="journal" />
                    </Typography>
                    <Typography variant="Caption" sx={{ fontSize: '10px' }}>
                      A critical tool for traders to document their trades
                    </Typography>
                  </Box>
                </Link>
              }
            />
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Link variant="h6" component={RouterLink} to={'/dashboard'} color="text.primary">
                  <Box sx={{ minWidth: '30px' }}>
                    <CustomShadowBox shadow={1} label={<HourglassOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} className="menu-title">
                    <Typography variant="subtitle1" color="secondary" whiteSpace={'nowrap'}>
                      <FormattedMessage id="risk-management" />
                    </Typography>
                    <Typography variant="Caption" sx={{ fontSize: '10px' }}>
                      Refers to the strategies and techniques used to minimize potential losses and protect
                    </Typography>
                  </Box>
                </Link>
              }
            />
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Link variant="h6" component={RouterLink} to={'/dashboard'} color="text.primary">
                  <Box sx={{ minWidth: '30px' }}>
                    <CustomShadowBox shadow={1} label={<ToolOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} className="menu-title">
                    <Typography variant="subtitle1" color="secondary">
                      <FormattedMessage id="tools" />
                    </Typography>
                    <Typography variant="Caption" sx={{ fontSize: '10px' }}>
                      Consists of the essential tools and resources that traders use to analyze markets
                    </Typography>
                  </Box>
                </Link>
              }
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" color="secondary" className="sub-title">
              TRADER COMMUNITY
            </Typography>
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Link
                  variant="h6"
                  component={RouterLink}
                  target="_blank"
                  to={'https://discord.com/channels/1242864104553582632/1245320230079692861'}
                  color="text.primary"
                >
                  <CustomShadowBox shadow={1} label={<MessageOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
                  <Typography variant="subtitle1" color="secondary">
                    <FormattedMessage id="feedback" />
                  </Typography>
                </Link>
              }
            />
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Link
                  variant="h6"
                  component={RouterLink}
                  target="_blank"
                  to={'https://discord.com/channels/1242864104553582632/1242864104553582635'}
                  color="text.primary"
                >
                  <CustomShadowBox shadow={1} label={<StarOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
                  <Typography variant="subtitle1" color="secondary" whiteSpace={'nowrap'}>
                    <FormattedMessage id="discussions" />
                  </Typography>
                </Link>
              }
            />
          </Box>
          <Box className="quick-start">
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Link variant="h6" component={RouterLink} to={'/dashboard'} color="text.primary">
                  <Box sx={{ minWidth: '30px' }}>
                    <CustomShadowBox shadow={1} label={<ClockCircleOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} className="menu-title">
                    <Typography variant="subtitle1" color="secondary">
                      <FormattedMessage id="quick-start" />
                    </Typography>
                    <Typography variant="Caption" sx={{ fontSize: '10px' }}>
                      8 Remaining Task
                    </Typography>
                  </Box>
                </Link>
              }
            />
          </Box>
        </List>
        
      </MainCard>
    </Box>
  );
}

MainDrawer.propTypes = { window: PropTypes.func };
