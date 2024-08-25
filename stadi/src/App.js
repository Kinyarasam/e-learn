import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
// import Navbar from "./components/Navbar";
import LandingPage from "./pages/landingPage";
import AudioLessonsPage from "./pages/lesson";
import Video from "./pages/Video";
import Articles from "./pages/Articles";

import FeaturesPage from "./pages/featuresPage";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lessons" element={<AudioLessonsPage />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
