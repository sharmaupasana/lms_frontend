import React from 'react'

function PageTitle({title}) {
  return (
    <div className='flex flex-wrap'>
        <div className='text-primary uppercase font-bold text-2xl border-b-red-500 border-b-2'>{title}</div>
    </div>
  )
}

export default PageTitle