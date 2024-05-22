import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import logo from '../../logos/Mintier-logo.svg'; 

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        // Implement your sign-in logic here
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="signin-container">
            <form onSubmit={handleSignIn} className="signin-form">
                <img src={logo} alt="Mintier Logo" className="signin-logo" />
                <h2>Sign In</h2>
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
                <button type="submit" className="signin-btn">Sign In</button>
                <div className="links">
                    <Link to="/signup">Don't have an account? Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;