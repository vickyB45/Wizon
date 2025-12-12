import React from 'react'
import { Link } from "react-router-dom"

const Button = ({text,full,to}) => {
  return (
    <Link to={to} className={`font-[500] text tracking-wide border-2 cursor-pointer active:scale-[.98] hover:-translate-y-0.5 transition-all duration-150 border-red-700 px-2 rounded-lg py-3 bg-black ${full="true" ? "block": "inline-block"} text-white md:text-[20px] text-[17px]`}>{text}</Link>
  )
}

export default Button