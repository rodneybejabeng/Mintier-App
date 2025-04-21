// SignIn.js
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './SignIn.css';
import logo from '../../logos/ClearMoney-logo.svg';
import { useAuth } from '../../components/AuthContext';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Get the redirect path from location state or default to dashboard
    const from = location.state?.from?.pathname || '/dashboard';

    const handleSignIn = async (e) => {
        e.preventDefault();
        
        try {
            setError('');
            setLoading(true);
            
            // Call the login function from AuthContext
            await login(email, password);
            
            // Navigate to the page the user was trying to access or dashboard
            navigate(from, { replace: true });
        } catch (error) {
            setError('Failed to sign in: ' + error.message);
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="signin-container">
            <form onSubmit={handleSignIn} className="signin-form">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Clear Money Logo" className="signin-logo" />
                </Link>
                <h2>Sign In</h2>
                {error && <div className="error-message">{error}</div>}
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button 
                    type="submit" 
                    className="signin-btn" 
                    disabled={loading}
                >
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>
                <div className="links">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
