import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faUserCircle, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Home from './home';
import Project from './project';
import AIMatching from './matchingpage';
import Message from './message';
import Account from './account';
import About from './about';

const LoginSignupPage = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [accountType, setAccountType] = useState(''); // Either 'customer' or 'freelancer'
  const navigate = useNavigate();
  const handleToggle = () => {
      setRoleModalVisible(!isSignupActive)
      setIsSignupActive(!isSignupActive);
  };

  const handleRoleSelection = (role) => {
    setAccountType(role);
    setRoleModalVisible(false);
    setIsSignupActive(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
    // Hide the signup form
  };

  return (
    <div className={`App ${isSignupActive ? 'active' : ''}`}>
      {/* Modal for role selection */}
      {roleModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Choose Account Type</h2>
            <button onClick={() => handleRoleSelection('customer')}>Customer</button>
            <button onClick={() => handleRoleSelection('freelancer')}>Freelancer</button>
          </div>
        </div>
      )}
     <div className="center-wrapper">
      <div className="container">
        {/* Login Form */}
        {!isSignupActive && (
          <div className="form-container login-form">
            <form onSubmit={handleLogin}>
              <h2>Login</h2>
              <div className="input-group">
                <input type="email" placeholder="Email" required />
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" required />
                <FontAwesomeIcon icon={faLock} />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        )}

        {/* Sign Up Form */}
        {isSignupActive && (
          <div className="form-container signup-form">
            <form>
              <h2>{accountType === 'customer' ? 'Customer Sign Up' : 'Freelancer Sign Up'}</h2>
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Username" required />
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email" required />
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" required />
                <FontAwesomeIcon icon={faLock} />
              </div>
              {accountType === 'freelancer' && (
                <div className="input-group">
                  <input type="text" placeholder="Freelancer Skill (e.g., Web Developer)" required />
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
              )}
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}


        <div className="overlay">
          <h2>
            {isSignupActive
              ? accountType === 'customer'
                ? 'Welcome to the Customer signup!'
                : 'Welcome to the Freelancer signup!'
                : 'Welcome Back!'
            }
          </h2>
          <p>
            {isSignupActive
              ? accountType === 'customer'
                ? 'To keep connected with us, please login with your personal info'
                : 'To showcase your talents and find work, sign up as a Freelancer.'
                : 'To keep connected with us, please login with your personal info'
            }
          </p>
          {!isSignupActive && <button onClick={handleToggle}>Sign Up</button>}
          {isSignupActive && <button onClick={handleToggle}>Back to Login</button>}
        </div>
      </div>
     </div>
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/matchingpage" element={<AIMatching />} />
        <Route path="/message" element={<Message />} />
        <Route path="/home/account" element={<Account />} />
        <Route path="/home/about" element={<About />} />
       
      </Routes>
    </Router>
  );
};

export default App;
