import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { MenuFoldOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';
import Drawer from './Leftbar';
import Footer from './Footer';
import Loader from 'components/Loader';
import HeaderContent from 'components/@extended/HeaderContent';
import AuthGuard from 'utils/route-guard/AuthGuard';

import { useGetMenuMaster } from 'api/menu';
import ControlSection from './ControlSection';
import Settings from 'components/Settings';
import { Divider, Grid, Typography } from '@mui/material';
import Advertisement from './Advertisement';

// ==============================|| MAIN LAYOUT ||============================== //

export default function DashboardLayout() {
  const { user } = useUser();
  const publicMetadata = user && user.publicMetadata;
  const [userType, setUserType] = useState(false);

  useEffect(() => {
    if (publicMetadata) {
      setUserType(JSON.stringify(publicMetadata));
    }


  }, [publicMetadata]);
  const roleType = JSON.parse(userType);

  const { menuMasterLoading } = useGetMenuMaster();

  const [openControl, setOpenControl] = useState(true);

  const handleClickOpen = () => {
    setOpenControl(true);
  };
  const handleClose = () => {
    setOpenControl(false);
  };

  if (menuMasterLoading) return <Loader />;

  return (
    <AuthGuard>
      {roleType && roleType.membership === 'is_premium' ? null : <Advertisement />}
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Drawer userType={roleType && roleType.membership} />
        <Box component="main" sx={{ width: openControl ? 'calc(100% - 460px)' : 'calc(100% - 60px)', flexGrow: 0, p: { xs: 2, sm: 3 } }}>
          <Container
            maxWidth={'lg'}
            sx={{
              ...{ px: { xs: 0, sm: 2 } },
              position: 'relative',
              left: '37px',
              top: roleType.membership === 'is_premium' ? '0px' : '45px',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Grid container alignItems={'center'}>
              <Grid item xs={12} md={4}>
                {/* <Breadcrumbs /> */}
                <Typography variant={'h2'}>Dashboard</Typography>
              </Grid>
              <Grid item xs={12} sm={8} alignItems={'center'}>
                <HeaderContent userType={roleType && roleType.membership} />
              </Grid>
            </Grid>
            {roleType.membership === 'is_premium' ? <Divider sx={{ mt: 2, mb: 3 }} /> :
              <MainCard boxShadow shadow={4} sx={{ marginBottom: 2, borderColor: '#FBD302' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Upgrade to NEW version of Tradatomy PRO
                </Typography>
                <Typography variant="body1">
                  <strong>Go Premium</strong> to Get all the latest global financial news and filter by entities identified within articles for a
                  concise news feeds. Also provided is analysis of each entity identified in articles.
                </Typography>
              </MainCard>
            }
            <Outlet />
            <Footer />
          </Container>
        </Box>
        <Box
          sx={{
            height: roleType.membership === 'is_premium' ? '100%' : 'calc(100% - 60px)',
            width: '45px',
            backgroundColor: '#01A8F8',
            position: 'fixed',
            right: '0',
            top: roleType.membership === 'is_premium' ? '0px' : '60px',
            zIndex: '1',
            color: '#ffffff'
          }}
        >
          {!openControl ? (
            <Button className="controlButton" onClick={handleClickOpen}>
              <MenuFoldOutlined style={{ fontSize: '20px' }} />
            </Button>
          ) : null}
          <ControlSection open={openControl} handleClose={handleClose} userType={roleType && roleType.membership} />
          <Settings />
        </Box>
      </Box>
    </AuthGuard>
  );
}