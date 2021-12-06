const authServerUrl = "https://dev-65193610.okta.com";
const authServerClientId = "0oa14e9iwcLLnb8CL5d7";
const authIssuer = "https://dev-65193610.okta.com/oauth2/default";

const oktaAuthConfig = {
  // Note: If your app is configured to use the Implicit flow
  // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
  // you will need to add `pkce: false`
  issuer: `${authIssuer}`,
  clientId: `${authServerClientId}`,
  redirectUri: window.location.origin + "/implicit/callback",
};

const oktaSignInConfig = {
  baseUrl: `${authServerUrl}`,
  clientId: `${authServerClientId}`,
  logo: "okta-logo.png",
  redirectUri: window.location.origin + "/implicit/callback",

  features: {
    idpDiscovery: true,
  },
  idpDiscovery: {
    requestContext: window.location.href,
  },
  authParams: {
    issuer: `${authServerUrl}`,
    scopes: ["openid", "profile", "email", "groups", "offline_access"],
  },
  // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};

export { oktaAuthConfig, oktaSignInConfig };
