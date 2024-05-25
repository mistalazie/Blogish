// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';

export function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
        email,
        password
      });
      console.log(response.data); // Handle success (e.g., store token, redirect)
    } catch (err) {
      console.error(err);
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Login</h2>
        <p className="mb-6 text-gray-600">Please sign in to your account</p>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}


