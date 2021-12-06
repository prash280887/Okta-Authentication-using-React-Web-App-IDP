import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import OktaSignInWidget from "./OktaSignInWidget";
import { useOktaAuth } from "@okta/okta-react";

const Login = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      //setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        console.log(info);
      });
    }
  }, [authState, oktaAuth]);

  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log("error logging in", err);
  };

  if (!authState) return null;

  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};
export default Login;
