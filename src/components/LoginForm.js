// SGN
import React, { useState } from 'react';

function LoginForm({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would usually check the credentials with a server
    // For the demo, we'll just log in
    if (username && password) {
      onLogin();
    }
  };

  if (isLoggedIn) {
    return <p>You are logged in.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
