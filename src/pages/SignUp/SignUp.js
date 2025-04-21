import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import ClearMoney from '../../logos/ClearMoney-logo.svg';
import Google from '../../logos/google-icon.svg';
import { useAuth } from '../../components/AuthContext';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      
      // Call the signup function from AuthContext
      await signup(email, password, name);
      
      // Navigate to terms page after successful signup
      navigate('/terms');
    } catch (error) {
      setError('Failed to create an account: ' + error.message);
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="signup-container">
        <Link to="/" className="logo-container">
          <img src={ClearMoney} alt="Clear Money Logo" className="signin-logo" />
          <span className="logo-text">Clear Money</span>
        </Link>
        <h2>Sign up to start your free trial</h2>
        <p>Try Clear Money free, cancel anytime.</p>
        {error && <div className="error-message">{error}</div>}
        <button className="google-signin">
          <img src={Google} alt="Google sign-in" className="google-logo" />
          Continue with Google
        </button>
        <div className="or">OR</div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="First Name" 
            className="field-input" 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="field-input" 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="field-input" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button 
            type="submit" 
            className="email-signup" 
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign up with email'}
          </button>
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
