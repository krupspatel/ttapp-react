import React from 'react';
import { RouterProvider } from 'react-router-dom';

// project import
import router from 'routes';
import ThemeCustomization from 'themes';


import Locales from 'components/Locales';
// import RTLLayout from 'components/RTLLayout';
import ScrollTop from 'components/ScrollTop';
import Snackbar from 'components/@extended/Snackbar';
import Notistack from 'components/third-party/Notistack';

// auth-provider
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';

// Custom css file
import './App.scss';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

const App = () => (
  <ThemeCustomization>
    {/* <RTLLayout> */}
    <Locales>
      <ScrollTop>
        <AuthProvider>
          <>
            <Notistack>
              <RouterProvider router={router} />
              <Snackbar />
            </Notistack>
          </>
        </AuthProvider>
      </ScrollTop>
    </Locales>
    {/* </RTLLayout> */}
  </ThemeCustomization>
);

export default App;
