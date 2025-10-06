import React from 'react'

const CardLanding2 = ({ heading, text }) => {
  return (
    <div className="p-4 sm:p-6 min-h-[auto] flex justify-center  max-w-5xl mx-auto md:min-h-64 rounded-2xl border-2 border-green-500 hoverShadow  flex-col">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl  text hoverShadow sm:text-left">
        {heading}
      </h2>

      {/* Underline */}
      <hr className="w-16 sm:w-20 mt-2 border-b-2 border-green-500 sm:mx-0" />

      {/* Text */}
      <h3 className="text-base sm:text-lg md:text-xl mt-4 sm:mt-5 text-zinc-700 leading-5 font-medium tracking-tighter text sm:text-left">
        {text}
      </h3>
    </div>
  )
}

export default CardLanding2
