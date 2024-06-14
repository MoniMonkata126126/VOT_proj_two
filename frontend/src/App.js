import React from 'react';

function App({ keycloak }) {
  return (
    <div>
      <h1>Welcome to the Web App</h1>
      <p>User: {keycloak.tokenParsed.preferred_username}</p>
    </div>
  );
}

export default App;
