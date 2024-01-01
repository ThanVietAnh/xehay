import React from 'react'
import {FaCar} from "react-icons/fa"

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
        <div className={`text-3xl p-5 bg-red-500 rounded-full cursor-pointer ${isActive && "bg-red-800 text-white"}`}>
            <FaCar/>
        </div>
        <p className='text-center font-medium my-1 capitalize'>{category}</p>
    </div>
  )
}

export default FilterProduct