import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";
import ClearMoney from '../../logos/ClearMoney-logo.svg';
import Google from '../../logos/google-icon.svg';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make sure the URL is correct and points to your server endpoint
    axios.post('http://localhost:8001/api/signup', { name, email, password })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  return (
    <div className="main-container">
      <div className="signup-container">
        <Link to="/" className="logo-container">
          <img src={ClearMoney} alt="Clear Money Logo" className="signin-logo" />
          <span className="logo-text">Clear Money</span>
        </Link>
        <h2>Sign up to start your free trial</h2>
        <p>Try Clear Money free, cancel anytime.</p>
        <button className="google-signin">
          <img src={Google} alt="Google sign-in" className="google-logo" />
          Continue with Google
        </button>
        <div className="or">OR</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" className="field-input" onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Your Email Address" className="field-input" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="field-input" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="email-signup">Sign up with email</button>
        </form>
        <div className="terms">
          By clicking the button above, you agree to our <a href="/terms">Terms of Use</a> and <a href="/privacy">Privacy Policy</a>.
        </div>
        <div className="signin">
          Already have an account? <Link to="/signin">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
