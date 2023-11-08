import React, {useState} from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda dapat menambahkan logika autentikasi atau validasi login.
  };
  return (
    <div>
      <div>E-SPORT TOURNAMENT TOOLS</div>

      <div>
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
    </div>
  );
};

export default SignIn;
