// SignIn.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import logo from '../../logos/ClearMoney-logo.svg';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        console.log('got to handle signin');
        e.preventDefault();
        if (email && password) {
            console.log('got to email and password present!');
            axios.post('http://localhost:8001/api/signin', { email, password })
                .then(response => {
                    console.log(response);
                    console.log('got to .then() block!');
                    if (response.status === 200) {
                        console.log('got to verify status 200');
                        // localStorage.setItem('user', JSON.stringify(response.data.user));
                        navigate('/terms'); // Ensure this is the correct path
                    } else {
                        console.log('Login failed:', response.data.message);
                    }
                })
                .catch(error => {
                    console.error('Login error:', error);
                    alert('Login failed! Check console for details.');
                });
        } else {
            console.error('Email or password is missing!');
        }
    };
    
    return (
        <div className="signin-container">
            <form onSubmit={handleSignIn} className="signin-form">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Clear Money Logo" className="signin-logo" />
                </Link>
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
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
