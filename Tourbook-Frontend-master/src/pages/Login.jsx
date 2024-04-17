import React, { useContext, useRef } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
import { url } from "../url";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(`${url}auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.username });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      alert(err.response.data)
      // console.log(err.response.data)
    }
  };
  // console.log(isFetching)

  return (
    <div className="login min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

          <form onSubmit={handleLogin}>
        <div className="mb-4">

          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"
            ref={userRef}
            />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
            >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
            ref={passwordRef}
            />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md font-bold transition-all duration-300 transform hover:scale-105"
          >
          Login
        </button>
        <p className="my-4">Don't have an account?</p>
        <Link to={"/register"}>
          <button className="w-full bg-blue-500 text-white p-3 rounded-md font-bold transition-all duration-300 transform hover:scale-105">
            Register
          </button>
        </Link>
          </form>
      </div>
    </div>
  );
};

export default Login;
