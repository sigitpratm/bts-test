import React, { useState } from 'react'




const Dashboard = () => {
   return (
      <section className='w-full h-full min-h-screen bg-gray-200'>
         <div className='bg-white p-4 max-w-2xl mx-auto h-screen'>
            <h1 className='text-4xl text-center mb-12'>
               To Do List App
            </h1>

            <div className='space-y-4'>
               <div className='flex items-center gap-4'>
                  <input type='text' placeholder='input list' className='w-full border gorder-gray-200 rounded-lg p-2' />
                  <button className='w-32 bg-indigo-400 text-white py-2 rounded-lg'>
                     Add List
                  </button>
               </div>
            </div>

         </div>
      </section>
   )
}


export default Dashboard