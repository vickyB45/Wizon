import React from 'react'

const CardLanding2 = ({heading, text}) => {
  return (
    <div className='p-2 md:p-6 min-h-64  rounded-2xl border-2 border-green-500 '>
        <h2 className='text-5xl heading '>{heading}</h2>
        <hr className='w-20 mt-2 text-green-500 border-b-2'/>
        <h3 className='text-xl text mt-5 tracking-tight text-zinc-700 leading-5 font-[500]'>{text}</h3>
    </div>
  )
}

export default CardLanding2