import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
// import Navbar from "./components/Navbar";
import LandingPage from "./pages/landingPage";
import AudioLessonsPage from "./pages/lesson";
import FeaturesPage from "./pages/featuresPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lessons" element={<AudioLessonsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
// export default App;
// import React from 'react';
// import './App.css';
