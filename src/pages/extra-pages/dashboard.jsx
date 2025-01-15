import React, { useState } from 'react';
// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box, Button, Chip, Link } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { RadarChartOutlined, BarChartOutlined, SettingOutlined, TrophyOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';
import BarDetailChart from 'components/dashboard/BarChart';
import ProfileRadialChart from 'components/dashboard/ProfileRadialChart';
import TradeStatus from 'components/dashboard/TradeStatus';
import AreaDetailChart from 'components/dashboard/AreaChart';

// sales report status
const status = [
  {
    value: 'today',
    label: 'Today',
  },
  {
    value: 'month',
    label: 'This Month',
  },
  {
    value: 'year',
    label: 'This Year',
  },
];

// ===============================|| CUSTOM - SHADOW BOX ||=============================== //

// eslint-disable-next-line react/prop-types
function CustomShadowBox({ shadow, label, bgcolor }) {
  return (
    <MainCard
      border={false}
      shadow={shadow}
      boxShadow
      sx={{ bgcolor: bgcolor || 'inherit', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack spacing={1} justifyContent="center" alignItems="center">
        {label}
      </Stack>
    </MainCard>
  );
}
// ==============================|| DASHBOARD PAGE ||============================== //

export default function MainPage() {
  const [value, setValue] = useState('today');
  const [openTradeStatus, setOpenTradeStatus] = useState(false);

  const handleClickOpenTrade = () => {
    setOpenTradeStatus(true);
  };

  const handleCloseStatus = () => {
    setOpenTradeStatus(false);
  };
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        <Grid item xs={12} xl={3}>
          <Typography
            display={'flex'}
            columnGap={1}
            alignItems={'center'}
            variant="subtitle1"
            gutterBottom
            sx={{ fontSize: '16px' }}
          >
            <BarChartOutlined style={{ fontSize: '30px' }} />
            Progress
          </Typography>
          <MainCard className="card-height" boxShadow shadow={4} sx={{ marginBottom: 3 }}>
            <Box sx={{ pl: '1rem', pb: '1rem' }}>
              <Typography variant="h6">Grade : T-1</Typography>
              <Typography variant="h6">Rank : Ensign</Typography>
              <Typography variant="h6">Short : ENS</Typography>
            </Box>
            <Button variant="outlined" color="secondary">
              Upgrade to Red
            </Button>
          </MainCard>
        </Grid>
        <Grid item xs={12} xl={6}>
          <Typography
            display={'flex'}
            columnGap={1}
            alignItems={'center'}
            variant="subtitle1"
            sx={{ fontSize: '16px', position: 'relative', zIndex: '1' }}
            gutterBottom
          >
            <RadarChartOutlined style={{ fontSize: '30px' }} />
            Rank Breakdown
          </Typography>
          <MainCard className="card-height" boxShadow shadow={4} sx={{ marginBottom: 3 }}>
            <Box sx={{ position: 'relative' }}>
              <ProfileRadialChart />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                columnGap: '20px',
                position: 'relative',
                top: '-20px',
              }}
            >
              <Box>
                <Typography variant="body" color={'#67748E'} sx={{ display: 'block' }}>
                  Overall kyu:
                </Typography>
                <Typography variant="body">0 kyu / 0.0%</Typography>
              </Box>
              <Box>
                <Typography variant="body" color={'#67748E'} sx={{ display: 'block' }}>
                  Overall kyu:
                </Typography>
                <Typography variant="body">0 kyu / 0.0%</Typography>
              </Box>
            </Box>
          </MainCard>
        </Grid>
        <Grid item xs={12} xl={3}>
          <Typography
            display={'flex'}
            columnGap={1}
            alignItems={'center'}
            variant="subtitle1"
            sx={{ fontSize: '16px' }}
            gutterBottom
          >
            <TrophyOutlined style={{ fontSize: '30px' }} />
            Honor Breakdown
          </Typography>
          <MainCard className="card-height" boxShadow shadow={4} sx={{ marginBottom: 3 }}>
          <Box display={'flex'} flexDirection={'column'} alignItems={'start'} rowGap={0.5} sx={{ pl: '1rem', pb: '1rem' }}>
            <Chip label="Completed Kata (0)" variant="outlined" sx={{ color: '#09B83A', fontSize: '12px' }} />
            <Chip label="Authored Kata & Translations (0)" variant="outlined" sx={{ color: '#014CBE', fontSize: '12px' }} />
            <Chip label="Comments (0)" variant="outlined" sx={{ color: '#DE00E3', fontSize: '12px' }} />
            <Chip label="Referrals (0)" variant="outlined" sx={{ color: '#FF4C00', fontSize: '12px' }} />
            <Chip label="Achievements (0)" variant="outlined" sx={{ color: '#F60000', fontSize: '12px' }} />
          </Box>
          </MainCard>
        </Grid>
      </Grid>
      {/* </MainCard> */}
      <Grid container alignItems="center" justifyContent="space-between" sx={{ pb: '15px' }}>
        <Grid item display={'flex'} alignItems="center" gap={1}>
          <Typography variant="h4">Trading Status</Typography>
          <Link sx={{ cursor: 'pointer' }} onClick={handleClickOpenTrade}>
            <CustomShadowBox shadow={1} label={<SettingOutlined style={{ fontSize: '20px' }} />}></CustomShadowBox>
          </Link>
          <TradeStatus open={openTradeStatus} handleClose={handleCloseStatus} />
        </Grid>
        <Grid item>
          <TextField
            id="standard-select-currency"
            size="small"
            select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{ '& .MuiInputBase-input': { py: 0.75, fontSize: '0.875rem' } }}
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        <Grid item xs={12} md={6} lg={6} xl={4}>
          <BarDetailChart />
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={4}>
          <AreaDetailChart />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <BarDetailChart />
        </Grid>
      </Grid>
    </>
  );
}
