// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Router from './routes/router';

function App() {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
