import React from 'react'

const Button = ({text,full}) => {
  return (
    <div className={`font-[500] tracking-wide border-1 cursor-pointer active:scale-[.98] hover:-translate-y-0.5 transition-all duration-150 border-red-700 px-6 rounded-lg py-2 bg-black ${full="true" ? "block": "inline-block"} text-white text-[18px]`}>{text}</div>
  )
}

export default Button