import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return email.match(
      // Simple email validation pattern
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
  };

  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    setIsValidEmail(validateEmail(emailInput));
  };

  const handleTryBetaClick = () => {
    if (isValidEmail) {
      navigate('/credit');  // Adjust this to route to the appropriate page
    } else {
      alert('Please enter a valid email address to try the beta.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <h1 className="text-4xl font-bold">Welcome to Mintier (A Finance App)</h1>
      <p className="text-xl mt-4">Manage your finances with the insight of AI.</p>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className="mt-4 p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <button
        onClick={handleTryBetaClick}
        className={`mt-4 bg-yellow-500 hover:bg-yellow-600 text-Grey font-bold py-2 px-4 rounded ${!isValidEmail ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!isValidEmail}
      >
        Try Beta!
      </button>
    </div>
  );
}

export default LandingPage;
