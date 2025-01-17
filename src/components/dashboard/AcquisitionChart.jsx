import React, { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// project imports
import useConfig from 'hooks/useConfig';

// third-party
import { ThemeMode } from 'config';
import ReactApexChart from 'react-apexcharts';

// ==============================|| ACQUISITION-CHANNELS CHART ||============================== //

export default function AcquisitionChart() {
  const theme = useTheme();
  const line = theme.palette.divider;
  const { primary, secondary } = theme.palette.text;

  const { mode } = useConfig();

  // chart options
  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 175,
      width: '100%',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'left',
      offsetX: 10,
      markers: {
        width: 8,
        height: 8,
        radius: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      colors: ['transparent'],
      width: 1,
    },
  };

  const [options, setOptions] = useState(barChartOptions);
  const [series] = useState([
    {
      name: 'Direct',
      data: [21, 17, 15, 13, 15, 13, 16, 13, 8, 14, 11, 9, 7, 5, 3, 3, 7],
    },
    {
      name: 'Referral',
      data: [28, 30, 20, 26, 18, 27, 22, 28, 20, 21, 15, 14, 12, 10, 8, 18, 16],
    },
    {
      name: 'Social',
      data: [50, 51, 60, 54, 53, 48, 55, 40, 44, 42, 44, 44, 42, 40, 42, 32, 16],
    },
  ]);
  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.grey[900], theme.palette.primary.main, theme.palette.primary[200]],
      legend: {
        labels: {
          colors: 'grey.500',
        },
      },
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light',
      },
    }));
  }, [mode, primary, secondary, line, theme]);

  return <ReactApexChart options={options} series={series} type="bar" height={175} />;
}
