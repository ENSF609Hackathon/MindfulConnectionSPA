import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { Auth0Provider } from '@auth0/auth0-react';
import {getConfig} from "./auth/config";
import App from './App'
import history from './utils/history'


// import * as serviceWorker from './serviceWorker';

const onRedirectCallback = (appState) => {
      history.push(
          appState && appState.returnTo ? appState.returnTo : window.location.pathname
      );
};

const config = getConfig();

const providerConfig = {
      domain: config.domain,
      clientId: config.clientId,
      onRedirectCallback,
      authorizationParams: {
            redirect_uri: window.location.origin,
            ...(config.audience ? { audience: config.audience } : null),
      },
};


const Root = () => {

      return(
          <Auth0Provider
              {...providerConfig}>
                <App></App>
          </Auth0Provider>

      )

}

ReactDOM.render(<Root/>, document.getElementById('root'));
// serviceWorker.register();