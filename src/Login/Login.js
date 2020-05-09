import React from 'react';
import { GoogleLogin } from 'react-google-login';

export function Login() {
  const onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    if (!profile) onSignInFail();

    const userName = profile.getGivenName() || null;
    if (!userName) onSignInFail();

    console.log('logged in!', profile);
  };

  const onSignInFail = () => {
    alert('Sign in failed :(');
    return;
  };

  return (
    <>
      <p className="lead">Please sign in to get started</p>

      <GoogleLogin
        clientId="217893932068-65c992qbfukfa5drj6n20mqso2h6hck6.apps.googleusercontent.com"
        onSuccess={onSignIn}
        onFailure={onSignInFail}
        isSignedIn={true} />
    </>
  );
}
