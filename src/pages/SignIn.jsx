import React, { useState, useEffect } from "react";
import { login } from "../services/authentication/login";
import { logout } from "../services/authentication/logout";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // logout();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = login(email, password);
      console.log(response);
      if (response) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-around items-center h-screen">
      <div>
        <h1 className="text-2xl font-semibold p-4">E-SPORT TOURNAMENT TOOLS</h1>
        <p className="p-4 font-normal">Enjoy Your Tournament</p>
      </div>
      <form
        className="bg-white p-8 shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
