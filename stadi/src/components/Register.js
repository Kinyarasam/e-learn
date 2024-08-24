import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [preferences, setPreferences] = useState([]);

  const handleRegister = (e) => {
    e.preventDefault();
    // registration logic
    console.log("Registering with:", { email, password, role, preferences });
  };

  const handlePreferenceChange = (e) => {
    const value = e.target.value;
    setPreferences((prevPreferences) =>
      prevPreferences.includes(value)
        ? prevPreferences.filter((pref) => pref !== value)
        : [...prevPreferences, value]
    );
  };

  return (
    <div className="register-container">
      <h2 className="register-title">WELCOME TO STADI</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select a role</option>
            <option value="user">Content Creator</option>
            <option value="admin">Students</option>
          </select>
        </div>
        <div className="form-group">
          <label>Preferences</label>
          <div className="preferences-group">
            <label>
              <input
                type="checkbox"
                value="newsletters"
                checked={preferences.includes("newsletters")}
                onChange={handlePreferenceChange}
              />
              Newsletters
            </label>
            <label>
              <input
                type="checkbox"
                value="updates"
                checked={preferences.includes("updates")}
                onChange={handlePreferenceChange}
              />
              Updates
            </label>
            <label>
              <input
                type="checkbox"
                value="offers"
                checked={preferences.includes("offers")}
                onChange={handlePreferenceChange}
              />
              Offers
            </label>
          </div>
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
