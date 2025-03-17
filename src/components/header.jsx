import React from 'react'

function Header() {
  return (
    <div className='bg-primary flex justify-between items-center text-white p-5'>
        <h1 className='text-xl font-semibold'>WELCOME TO LMS</h1>

        <button className='font-semibold'>Logout</button>
    </div>
  )
}

export default Header