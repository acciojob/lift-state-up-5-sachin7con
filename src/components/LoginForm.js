// SGN, ONS, JSLV, JMD, JBB, JSSR, JSM, JSRK, JSP
import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      if(username && password) {
        onLogin();
      }else {
        alert('Please enter a valid Username and  Password')
      }

    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} ></input>
        <br/><br/>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
        <br/>
        <button type="submit">Login</button>

      </form>

      
    </div>
  );
}

export default LoginForm;
