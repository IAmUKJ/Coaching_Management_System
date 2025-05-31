// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Router from './routes/router';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
