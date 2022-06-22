import React, { useState } from 'react'
import axios from "axios";

const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const Auth = async (e) => {
      e.preventDefault();
      try {
         await axios.post('94.74.86.174:8080/api/login', {
            username: username,
            password: password
         });
      } catch (error) {
         if (error.response) {
            console.log(error.response.data.msg);
         }
      }
   }

   return (
      <section className='w-full h-full min-h-screen bg-gray-100'>
         <div className='max-w-xl mx-auto'>
            <form onSubmit={Auth} className='bg-white h-screen flex flex-col justify-center p-8 shadow-lg space-y-8'>
               <div>
                  <p className='text-center text-4xl'>
                     Login
                  </p>
               </div>

               <div className='space-y-2'>
                  <label htmlFor='username'>Username</label>
                  <input type='text' placeholder='input username' id='username' value={username} onChange={(e) => { setUsername(e.target.value) }} className='w-full rounded-lg border border-gray-400 p-2' required />
               </div>

               <div className='space-y-2'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' placeholder='input password' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} className='w-full rounded-lg border border-gray-400 p-2' required />
               </div>

               <button className='bg-indigo-400 text-white px-8 py-2 rounded-lg'>
                  Login
               </button>

            </form>
         </div>
      </section>
   )
}


export default Login