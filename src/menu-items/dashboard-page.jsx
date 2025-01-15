import React from 'react';
// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';

// type

// icons
const icons = { DashboardOutlined };

// ==============================|| MENU ITEMS - MAIN PAGE ||============================== //

const dashboardPage = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  url: '/dashboard',
  icon: icons.DashboardOutlined,
};

export default dashboardPage;
