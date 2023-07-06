import React from 'react'
import { FC } from 'react'
const Button:FC<{ text:string}> = ({text}) => {
  return (
    <button className="bg-[#00616C] text-white text-lg font-medium px-8 py-4 rounded-full shadow-md hover:bg-red-500 duration-300 hover:scale-105">{text}</button>
  )
}

export default Button;