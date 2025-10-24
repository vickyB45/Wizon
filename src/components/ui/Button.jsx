import React from 'react'

const Button = ({text,full}) => {
  return (
    <div className={`font-[500] text tracking-wide border-2 cursor-pointer active:scale-[.98] hover:-translate-y-0.5 transition-all duration-150 border-red-700 px-2 rounded-lg py-3 bg-black ${full="true" ? "block": "inline-block"} text-white md:text-[20px] text-[17px]`}>{text}</div>
  )
}

export default Button