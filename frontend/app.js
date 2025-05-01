// App.js

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setSubmitted(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>Simple Frontend App</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br /><br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <h2>Hello, {name}!</h2>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}

export default App;
