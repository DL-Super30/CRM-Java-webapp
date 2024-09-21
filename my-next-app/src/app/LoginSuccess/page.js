import React from 'react';

const LoginSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Login Successful!</h2>
        <p className="text-gray-700 mb-6">Welcome back! You have successfully logged in.</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-300">
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginSuccess;
