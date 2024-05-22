import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { VerifaliaRestClient } = require('verifalia');

const verifaliaClient = new VerifaliaRestClient({
    username: 'bejabeng.r@gmail.com', // Your Verifalia username
    password: 'Preston1993' // Your Verifalia password
});

function LandingPage() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const verifyEmailWithVerifalia = async (email) => {
        try {
            let validationResult = await verifaliaClient.emailValidations.submit(email, {
                quality: 'Standard',
            });
            return validationResult.entries[0].classification === 'Deliverable';
        } catch (error) {
            console.error('Error verifying email with Verifalia:', error);
            return false;
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleTryBetaClick = async (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            alert('Please enter a valid email format.');
            return;
        }

        const isEmailValid = await verifyEmailWithVerifalia(email);
        if (isEmailValid) {
            navigate('/signup');  // Navigate if valid
        } else {
            alert('Please enter a valid email address to try the beta.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-400 text-white">
            <h1 className="text-4xl font-bold">Welcome to Mintier (A Finance App)</h1>
            <p className="text-xl mt-4">Manage your finances with the insight of AI.</p>
            <form onSubmit={handleTryBetaClick} className="w-full max-w-xs">
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="mt-4 p-2 w-full text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                    type="submit"
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 w-full rounded"
                >
                    Get Started!
                </button>
            </form>
        </div>
    );
}

export default LandingPage;
