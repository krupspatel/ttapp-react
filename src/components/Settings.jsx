import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { SettingOutlined } from '@ant-design/icons';

// project import
import Localization from 'layout/Dashboard/Localization';
import ThemeModeLayout from 'layout/Dashboard/ThemeMode';
import useConfig from 'hooks/useConfig';
import AnimateButton from './@extended/AnimateButton';

export default function Settings() {
  const { mode } = useConfig();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [mode]);

  return (
    <>
      <Button className="setting-button" onClick={handleClick('left-end')}>
        <AnimateButton type="rotate">
          <SettingOutlined style={{ fontSize: '20px' }} />
        </AnimateButton>
      </Button>
      <Box sx={{ width: 500 }}>
        <Popper
          // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
          sx={{ zIndex: 10001 }}
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className="setting-icon">
                <Box>
                  <Localization />
                </Box>
                <Box>
                  <ThemeModeLayout />
                </Box>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Box>
    </>
  );
}
