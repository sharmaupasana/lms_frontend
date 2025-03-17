import React from 'react'

function Login() {
  return (
    <div className='bg-background h-screen flex items-center justify-center'>

        <div className='bg-white flex rounded-lg shadow-lg'>
            <div className='p-10 gap-2 flex-col flex items-center justify-center flex-1 bg-primary text-white'>
                <h1 className='text-2xl font-bold'>Login
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam ipsa voluptates dol</p>
            </div>

            <div className='p-10 flex-1 flex flex-col gap-5'>
                <input type="text" className='border-b-text/60 border-b-2 w-full rounded px-5 py-2' placeholder='Username' />
                <input type="password" className='border-b-text/60 border-b-2 w-full rounded px-5 py-2' placeholder='Password' />
                <button className='bg-primary font-semibold text-white rounded px-5 py-2'>Login</button>
            </div>
        </div>

    </div>
  )
}

export default Login