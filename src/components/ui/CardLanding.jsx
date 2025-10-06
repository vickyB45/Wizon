import React from 'react'

const CardLanding = ({heading, text}) => {
  return (
    <div className='p-4 md:p-6 min-h-44 md:min-h-54 w-full mt-2 md:mt-10 flex md:block flex-col justify-center rounded-2xl border-2 border-gray-700 card'>
        <h2 className='text-4xl md:text-6xl text font-[700] text-red-600'>{heading}</h2>
        <h3 className='text-2xl md:text-4xl text mt-3 tracking-tight font-[600]'>{text}</h3>
    </div>
  )
}

export default CardLanding