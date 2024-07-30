import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import apiRequest from '../lib/apiRequest.js';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const navigate = useNavigate();
  //   const history = useHistory();  // Import useHistory from 'react-router-dom'

  // Create a Date object with the selected date, set time to midnight
  const dobDate = new Date(dob);
  dobDate.setHours(0, 0, 0, 0);

  function registerUser(ev) {
    ev.preventDefault();
    const setData = {
      username: username,
      password: password,
      dob: dobDate.toISOString(), // Convert date to ISO format to send to the server    
    };

    apiRequest.post("/register", setData)
      .then((res) => {
        console.log(res.data);

        // Redirect to login page after successful registration
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <div className="flex justify-between pl-5 pr-5 mx-auto p-2 border rounded-full text-gray-400">
            <label htmlFor="">Dob</label>
            <input
              className="justify-between"
              type="date"
              placeholder="Date of Birth (YYYY-MM-DD)"
              value={dob}
              onChange={(ev) => setDob(ev.target.value)}
            />
          </div>
          <button className="primary mt-5" type='submit'>Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" to={"/signin"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
