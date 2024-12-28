// SGN
import React, { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const funcLogin = () => {
      setIsLoggedIn(true);
    }
   
  
  return (
    <div className="App">
      <h1>Parent Component</h1>
      {isLoggedIn ? (<p>You are logged in!</p>) : (<LoginForm isLoggedIn={isLoggedIn} onLogin={funcLogin} />)}
      
    </div>
  );
}

export default App;
