import React from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
// import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';

import { MoonOutlined, SunOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

// assets
// import defaultLayout from 'assets/images/customization/default.svg';
// import darkLayout from 'assets/images/customization/dark.svg';

// ==============================|| CUSTOMIZATION - MODE ||============================== //

export default function ThemeModeLayout() {
  const theme = useTheme();

  const { mode, onChangeMode } = useConfig();

  const handleModeChange = (event) => {
    if (event.target.value === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    onChangeMode(event.target.value);
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={mode} onChange={handleModeChange}>
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            control={<Radio value="light" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: mode === ThemeMode.DARK ? 'secondary.lighter' : 'primary.lighter', p: 1 }}
                border={false}
                {...(mode === ThemeMode.LIGHT && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  {/* <CardMedia component="img" src={defaultLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} /> */}
                  <MoonOutlined style={{ fontSize: '20px' }} />
                </Stack>
              </MainCard>
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio value="dark" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: mode === ThemeMode.DARK ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(mode === ThemeMode.DARK && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center" sx={{ maxWidth: '30px' }}>
                  {/* <CardMedia component="img" src={darkLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} /> */}
                  <SunOutlined style={{ fontSize: '20px' }} />
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
}
