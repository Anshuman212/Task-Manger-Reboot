"use client";

import React from 'react';
import '../styles/globals.css';


const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
        <title>Login</title>
      <div className="w-full max-w-md bg-dark p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl text-primary font-semibold mb-6">Log In</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-text font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-3 border rounded-lg bg-dark text-text focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-text font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-3 border rounded-lg bg-dark text-text focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg font-semibold bg-primary text-text hover:bg-secondary focus:outline-none focus:bg-secondary"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
