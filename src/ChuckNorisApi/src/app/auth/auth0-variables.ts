interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'acayaFYQl30dNXc6jyzZtFCtlPq3IbvK',
  domain: 'dev-ywq78dhf.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
