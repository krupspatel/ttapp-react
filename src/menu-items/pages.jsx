import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { RocketOutlined, ProfileOutlined, HomeOutlined, CalendarOutlined, ToolOutlined, HourglassOutlined } from '@ant-design/icons';

// icons
const icons = { RocketOutlined, ProfileOutlined, HomeOutlined, CalendarOutlined, ToolOutlined, HourglassOutlined };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = {
  id: 'group-pages',
  title: <FormattedMessage id="pages" />,
  type: 'group',
  children: [
    // {
    //   id: 'maintenance',
    //   title: <FormattedMessage id="maintenance" />,
    //   type: 'collapse',
    //   icon: icons.RocketOutlined,
    //   children: [
    //     {
    //       id: 'error-404',
    //       title: <FormattedMessage id="error-404" />,
    //       type: 'item',
    //       url: '/maintenance/404',
    //       target: true
    //     },
    //     {
    //       id: 'error-500',
    //       title: <FormattedMessage id="error-500" />,
    //       type: 'item',
    //       url: '/maintenance/500',
    //       target: true
    //     },
    //     {
    //       id: 'coming-soon',
    //       title: <FormattedMessage id="coming-soon" />,
    //       type: 'item',
    //       url: '/maintenance/coming-soon',
    //       target: true
    //     },
    //     {
    //       id: 'under-construction',
    //       title: <FormattedMessage id="under-construction" />,
    //       type: 'item',
    //       url: '/maintenance/under-construction',
    //       target: true
    //     }
    //   ]
    // },
    // {
    //   id: 'contact-us',
    //   title: <FormattedMessage id="contact-us" />,
    //   type: 'item',
    //   url: '/contact-us',
    //   icon: icons.PhoneOutlined,
    //   target: true
    // },
    {
      id: 'home',
      title: <FormattedMessage id="home" />,
      type: 'item',
      url: '/contact-us',
      icon: icons.HomeOutlined,
      target: true,
    },
    {
      id: 'performance',
      title: <FormattedMessage id="performance" />,
      type: 'item',
      url: '/contact-us',
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: 'journal',
      title: <FormattedMessage id="journal" />,
      type: 'item',
      url: '/journal',
      icon: icons.CalendarOutlined,
      target: true,
    },
    {
      id: 'risk-management',
      title: <FormattedMessage id="risk-management" />,
      type: 'item',
      url: '/contact-us',
      icon: icons.HourglassOutlined,
      target: true,
    },
    {
      id: 'tools',
      title: <FormattedMessage id="tools" />,
      type: 'item',
      url: '/contact-us',
      icon: icons.ToolOutlined,
      target: true,
    },
  ],
};

export default pages;
