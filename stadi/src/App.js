import { Router, Routes } from 'react-router-dom';
import './App.css';
import landingPage from './pages/landingPage';

const App = () => {
  return (
    <Router>
      <Routes path="/" element={landingPage} />
    </Router>
  )
}

export default App;
// export default App;
// import React from 'react';
// import './App.css';
