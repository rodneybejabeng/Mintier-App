import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="logo">Mintier-logo.svg</div>
      <h2>Sign up to start your free trial</h2>
      <p>Try Monarch free, cancel anytime.</p>
      <button className="google-signin">Continue with Google</button>
      <div className="or">OR</div>
      <input type="email" placeholder="Your Email Address" />
      <button className="email-signup">Sign up with email</button>
      <div className="terms">
        By clicking the button above, you agree to our <a href="/terms">Terms of Use</a> and <a href="/privacy">Privacy Policy</a>.
      </div>
      <div className="signin">
        Already have an account? <Link to="/signin">Sign in</Link>
      </div>
    </div>
  );
};

export default SignUp;
