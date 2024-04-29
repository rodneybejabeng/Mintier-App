import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <h1 className="text-4xl font-bold">Welcome to Our Finance App</h1>
      <p className="text-xl mt-4">Manage your finances with ease and insight.</p>
      <Link to="/app">
        <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Try Beta!
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;