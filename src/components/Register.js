import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    // console.log(email, username, password)
    try {
      await axios.post('http://94.74.86.174:8080/api/register', {
        email: email,
        username: username,
        password: password,
      });
      navigate('/login');
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  }

  return (
    <section className='w-full h-full min-h-screen bg-gray-100'>
      <div className='max-w-xl mx-auto'>
        <div className='bg-white h-screen flex flex-col justify-center p-8 shadow-lg space-y-8'>
          <div>
            <p className='text-center text-4xl'>
              Register
            </p>
          </div>

          {/* Form Register */}
          <form onSubmit={Register} className="space-y-4">
            <div className='space-y-2'>
              <label htmlFor='email'>Email</label>
              <input type='text' placeholder='input email' id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='w-full rounded-lg border border-gray-400 p-2' required />
            </div>

            <div className='space-y-2'>
              <label htmlFor='username'>Username</label>
              <input type='text' placeholder='input username' id='username' value={username} onChange={(e) => { setUsername(e.target.value) }} className='w-full rounded-lg border border-gray-400 p-2' required />
            </div>

            <div className='space-y-2'>
              <label htmlFor='password'>Password</label>
              <input type='password' placeholder='input password' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} className='w-full rounded-lg border border-gray-400 p-2' required />
            </div>

            <button onClick={Register} className='w-full bg-indigo-400 text-white px-8 py-2 rounded-lg'>
              Submit
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}


export default Register