import React from 'react';
import { SignUp } from '@clerk/clerk-react';

// project import
import AuthWrapper from 'components/auth/AuthWrapper';

// ================================|| REGISTER ||================================ //

export default function Register() {
  return (
    <AuthWrapper>
      <SignUp
        signInUrl="/login"
        appearance={{
          elements: {
            formButtonPrimary: {
              fontSize: 14,
              textTransform: 'none',
              width: '100px',
              backgroundColor: '#3BBFFF',
              colorText: '#252F40'
            }
          },
          variables: {
            colorPrimary: '#3BBFFF',
            colorText: '#252F40',
            width: '100px'
          }
        }}
      />
    </AuthWrapper>
  );
}
