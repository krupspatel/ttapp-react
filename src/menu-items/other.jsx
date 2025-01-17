import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { BorderOutlined, QuestionOutlined, StopOutlined } from '@ant-design/icons';

// type

// icons
const icons = {
  BorderOutlined,
  QuestionOutlined,
  StopOutlined,
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other = {
  id: 'other',
  title: <FormattedMessage id="more-items" />,
  type: 'group',
  children: [
    {
      id: 'disabled-menu',
      title: <FormattedMessage id="disabled-menu" />,
      type: 'item',
      url: '#',
      icon: icons.StopOutlined,
      disabled: true,
    },
    {
      id: 'documentation',
      title: <FormattedMessage id="documentation" />,
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true,
      chip: {
        label: 'gitbook',
        color: 'secondary',
        size: 'small',
      },
    },
  ],
};

export default other;
