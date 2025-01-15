import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// project import
import AuthWrapper from 'components/auth/AuthWrapper';
import { SignedIn, SignedOut, SignIn, UserButton, useAuth } from '@clerk/clerk-react';
import { Link } from '@mui/material';

// ================================|| LOGIN ||================================ //

export default function Login() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard'); // Redirect to dashboard if already signed in
    }
  }, [isSignedIn, navigate]);

  return (
    <AuthWrapper>
      <SignedOut>
        <SignIn
          signUpUrl="/register"
          appearance={{
            elements: {
              formButtonPrimary: {
                fontSize: 14,
                textTransform: 'none',
                width: '100px',
                backgroundColor: '#3BBFFF',
                colorText: '#252F40',
              },
            },
            variables: {
              colorPrimary: '#3BBFFF',
              colorText: '#252F40',
              width: '100px',
            },
          }}
        />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Link
        color={'#3BBFFF'}
        sx={{
          bottom: { xs: '50px', sm: '85px' },
          display: 'flex', width: '100%', justifyContent: 'center', position: 'absolute', left: 0, fontSize: '13px', textDecoration: 'underline'
        }}
        href="/joinbetawaitlist">Join Beta Waitlist</Link>
    </AuthWrapper>
  );
}
