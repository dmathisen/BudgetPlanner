import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from './loginSlice';

import { GoogleLogin } from 'react-google-login';

export function Login() {
  const dispatch = useDispatch();

  const handleLogIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    if (!profile) handleLogInFail();

    const userName = profile.getGivenName();
    if (!userName) handleLogInFail();

    dispatch(logIn({userName}));
  };

  const handleLogInFail = () => {
    alert('Sign in failed');
    dispatch(logOut());
    return;
  };

  return (
    <>
      <p className="lead">Please sign in to get started</p>

      <GoogleLogin
        clientId="217893932068-65c992qbfukfa5drj6n20mqso2h6hck6.apps.googleusercontent.com"
        onSuccess={handleLogIn}
        onFailure={handleLogInFail}
        isSignedIn={true} />
    </>
  );
}
