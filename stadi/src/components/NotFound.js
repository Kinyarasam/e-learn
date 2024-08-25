import React from "react";
import { Link } from "react-router-dom";
import '../landingPage.css';

const NotFound = () => {
  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="sr-only">Stadi</span>
        </a>
        <nav>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/About">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>404 - Oopsie! Page not found</h1>
        <p>
          Bloody hell! Looks like you’ve ventured off the beaten path. 😜
        </p>
        <Link to="/">Take me home!</Link>
      </div>
    </div>
  );
};

export default NotFound;
