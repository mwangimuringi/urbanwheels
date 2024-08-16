import React from 'react';
import { signIn, signOut } from 'next-auth/react';

// LoginButton Component
export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Sign In
    </button>
  );
};

// SignOutButton Component
export const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Sign Out
    </button>
  );
};

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <LoginButton />
          </div>
        </form>
        <div className="mt-6 text-center">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
