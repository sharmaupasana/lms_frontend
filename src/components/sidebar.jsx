import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='bg-white shadow-xl px-10 py-2'>

        <div className='flex flex-col items-start gap-5 mt-5'>

            <Link className='flex gap-2 items-center font-semibold text-text'> <i class="fa-solid text-primary fa-chart-bar"></i> Dashboard </Link>
            <Link to='department' className='flex gap-2 items-center font-semibold text-text'> <i class="fa-solid text-primary fa-building-user"></i> Department </Link>
            <Link className='flex gap-2 items-center font-semibold text-text'> <i class="fa-solid text-primary fa-graduation-cap"></i> Semester </Link>
            <Link className='flex gap-2 items-center font-semibold text-text'> <i class="fa-solid text-primary fa-book-open-reader"></i> Course </Link>
            <Link className='flex gap-2 items-center font-semibold text-text'> <i class="fa-solid text-primary fa-book"></i> Book </Link>
            <Link className='flex gap-2 items-center font-semibold text-text'> <i class="fa-solid text-primary fa-user"></i> Student </Link>
            <Link className='flex gap-2 items-center font-semibold text-text'> <i class="fa-solid text-primary fa-database"></i> Borrow </Link>

        </div>

    </div>
  )
}

export default Sidebar