import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { url } from '../url';
import { useActionData, useNavigate } from 'react-router-dom';

const Register = () => {
const [username,setUsername] = useState();
const [email,setEmail] = useState();
const [password,setPassword] = useState();
const [warning,setWarning] = useState();
const navigate = useNavigate()


  const handleRegister = async(e) => {
    e.preventDefault();
    setWarning('')
    try {
      
      
      const res = await axios.post(`${url}auth/register`,{
        username:username,
        email:email,
        password:password
      })
       alert("Yippeee!! User registered !")
        navigate('/login',{replace:true})
      
    } catch (err) {
      {
        // console.log(err);
        setWarning(err.response.data)
      }
    }
   
  };

  return (
    <div className="login min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form onSubmit={handleRegister}>
        <div className="mb-4">

          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"
            onChange={(e)=>setUsername(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}

          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}

            />
        <button
          type='submit'
          className="w-full bg-blue-500 text-white p-3 rounded-md font-bold transition-all duration-300 transform hover:scale-105"
          >
          Register
        </button>
        </div>
          </form>
          <p className='text-lg text-red'>{warning}</p>
      </div>
    </div>
  );
};

export default Register;
