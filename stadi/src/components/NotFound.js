import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Oopsie! Page not found</h1>
      <p>
        Bloody hell! Looks like you’ve ventured off the beaten path. 😜
      </p>
      <Link to="/">Take me home!</Link>
    </div>
  );
};

export default NotFound;
