import React, { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-import
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';

// chart options
const redialBarChartOptions = {
  series: [67],
  chart: {
    height: 380,
    type: 'radialBar',
    offsetY: -40,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%', // Increase the inner size of the radial bar
      },
      startAngle: -95,
      endAngle: 95,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: '#01A8F8',
          offsetY: 10,
        },
        value: {
          offsetY: -30,
          fontSize: '22px',
          color: '#2B2B2B',
          formatter: function (val) {
            return val + '%';
          },
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: {
    dashArray: 6,
  },
  labels: ['Consistency'],
};

// ==============================|| TOP CARD - RADIAL BAR CHART ||============================== //

export default function ProfileRadialChart() {
  const theme = useTheme();
  const { mode } = useConfig();

  const textPrimary = theme.palette.text.primary;
  const primary = theme.palette.primary.main;
  const grey0 = theme.palette.grey[0];
  const grey500 = theme.palette.grey[500];
  const grey200 = theme.palette.grey[200];

  const [series] = useState([67]);
  const [options, setOptions] = useState(redialBarChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      series: [67],
      chart: {
        height: 380,
        type: 'radialBar',
        offsetY: -40,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%', // Increase the inner size of the radial bar
          },
          startAngle: -95,
          endAngle: 95,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: '#01A8F8',
              offsetY: 10,
            },
            value: {
              offsetY: -30,
              fontSize: '22px',
              color: '#2B2B2B',
              formatter: function (val) {
                return val + '%';
              },
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: mode === ThemeMode.DARK ? 'dark' : 'light',
          shadeIntensity: 0.1,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 6,
      },
      labels: ['Consistency'],
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light',
      },
    }));
  }, [mode, grey200, grey0, grey500, textPrimary, primary]);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }} className="radial-chart">
      <ReactApexChart options={options} series={series} type="radialBar" width={'100%'} height={380} />
      {/* var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render(); */}
    </Box>
  );
}
