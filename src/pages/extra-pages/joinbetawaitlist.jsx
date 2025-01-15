import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, XOutlined } from '@ant-design/icons';

// project import
import { APP_DEFAULT_PATH } from 'config';
import LogoMain from 'components/logo/LogoMain';

// assets
import blurBackground from '../../assets/images/blur-blue-back.png'
import patreonLogo from '../../assets/images/patreon-logo.svg'

import JoinBetaUserForm from 'components/extra-pages/contact-us/JoinBetaUserForm';
import { Divider } from '@mui/material';

// ==============================|| Join Beta Waitlist - FORM ||============================== //

export default function JoinBetaWaitlist() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'}>
              <Box><Button component={Link} to={APP_DEFAULT_PATH}><LogoMain /></Button></Box>
              <Box sx={{ width: '100%' }}>
                <Typography variant='h1' sx={{ fontWeight: '500', mt: 5, mb: 3 }} color={'#67748E'}>Welcome To the Tradatomy Beta Program!</Typography>
                <Typography variant='h5' color={'#67748E'} sx={{ textTransform: 'uppercase' }}>As a beta user, you will:</Typography>
                <List className="bulletPoints">
                  <ListItem disablePadding>
                    <ListItemText primary="Control your trading behaviour with advanced risk management automation tools." />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="Explore cutting-edge features to optimize your trading strategies." />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="Track your performance and risk metrics with detailed statistics." />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="Join our growing trading community and participate in leaderboard challenges." />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="Provide crucial feedback to help us improve and expand the platform." />
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Divider sx={{ mt: 2, mb: 3 }} />
                <Typography variant='h4' color="#67748E" style={{ textAlign: 'center' }}>Let’s Stay in touch</Typography>
                <List className="stay-in-touch">
                  <ListItemButton>
                    <ListItemIcon>
                      <LinkedinOutlined style={{ fontSize: '45px', color: '#67748E' }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <FacebookOutlined style={{ fontSize: '45px', color: '#67748E' }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <InstagramOutlined style={{ fontSize: '45px', color: '#67748E' }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <XOutlined style={{ fontSize: '45px', color: '#67748E' }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <img src={patreonLogo} alt="patreon" />
                    </ListItemIcon>
                  </ListItemButton>
                </List>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' sx={{ mt: 3, mb: 3 }} color={'#67748E'} >Start trading with tools for risk management, journaling, performance statistics, and community engagement. </Typography>
            <JoinBetaUserForm />
          </Grid>
        </Grid>
      </Container>
      <Box display={'flex'} sx={{ position: 'fixed', bottom: '0', left: '0', width: '100%', zIndex: -1 }}>
        <img src={blurBackground} alt="Background" width={'100%'} />
      </Box>
    </>
  );
}
