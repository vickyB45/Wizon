import React from 'react'

const CardLanding = ({heading, text}) => {
  return (
    <div className='p-2 md:p-4 min-h-44 md:min-h-54 mt-2 md:mt-10 rounded-2xl border-1 border-gray-700 card'>
        <h2 className='text-4xl md:text-5xl heading font-[700] text-red-600'>{heading}</h2>
        <h3 className='text-2xl md:text-4xl text mt-3 tracking-tight font-[500]'>{text}</h3>
    </div>
  )
}

export default CardLanding