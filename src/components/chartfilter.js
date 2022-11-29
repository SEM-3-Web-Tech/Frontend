import React from 'react'

const ChartFilter = ({text,active,onClick}) => {
  return (
        <button onClick={onClick} className={`w-12 m-2 h-8 norder-1 rounded-md flex items-center justify-center cursor-pointer${active ?"bg-red border-red text-":"border-yellowgreen text-black"}`}>{text}</button>
  )
}

export default ChartFilter