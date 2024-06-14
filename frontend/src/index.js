import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Keycloak from 'keycloak-js';

const keycloak = Keycloak('/keycloak.json');

keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
  if (!authenticated) {
    window.location.reload();
  } else {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App keycloak={keycloak} />
      </React.StrictMode>
    );
  }
}).catch(error => {
  console.error("Keycloak initialization failed:", error);
});
