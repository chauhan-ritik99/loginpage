import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <nav>
        <div className="logo">YourLogo</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Signup</Link></li>
        </ul>
      </nav>
      
      <div className="home-container">
        <h1 className="welcome-message">Welcome to Your Application</h1>
        <p>You've successfully logged in to your account.</p>
        
        <div className="action-buttons">
          <Link to="/login" className="action-btn primary-btn">Switch Account</Link>
          <Link to="/" className="action-btn secondary-btn">Create New Account</Link>
        </div>
      </div>
    </>
  );
};

export default Home;