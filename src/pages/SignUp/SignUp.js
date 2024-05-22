import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";
import Mintier from '../../logos/Mintier-logo.svg'; // Ensure the path is correct
import Google from '../../logos/google-icon.svg'; // Ensure the path is correct

const SignUp = () => {
  return (
    <div className="main-container"> {/* This should wrap the signup container */}
      <div className="signup-container">
        <Link to="/" className="logo-container">
                    <img src={Mintier} alt="Mintier Logo" className="signin-logo" />
                    <span className="logo-text">Mintier</span>
        </Link>
        <h2>Sign up to start your free trial</h2>
        <p>Try Mintier free, cancel anytime.</p>
        <button className="google-signin">
          <img src={Google} alt="Google sign-in" className="google-logo" />
          Continue with Google
        </button>
        <div className="or">OR</div>
        <input type="email" placeholder="Your Email Address" className="email-input" />
        <button className="email-signup">Sign up with email</button>
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
