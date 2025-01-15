import React, { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import JoinBetaWaitlist from 'pages/extra-pages/joinbetawaitlist';
// import SimpleLayout from 'layout/Simple';
// import { SimpleLayoutType } from 'config';

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));
const AppJournal = Loadable(lazy(() => import('pages/journal')));

// render - sample page
const MainPage = Loadable(lazy(() => import('pages/extra-pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          element: <MainPage />,
        },
      ],
    },
    {
      path: '/',
      element: <DashboardLayout />,
      // element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
      children: [
        {
          path: 'contact-us',
          element: <AppContactUS />,
        },
      ],
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'journal',
          element: <AppJournal />,
        },
      ],
    },
    {
      path: '*',
      element: <MaintenanceError />,
    },
    {
      path: '/joinbetawaitlist',
      element: <JoinBetaWaitlist />,
    },
    {
      path: '/maintenance',
      element: <PagesLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />,
        },
        {
          path: '500',
          element: <MaintenanceError500 />,
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />,
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />,
        },
      ],
    },
  ],
};

export default MainRoutes;
