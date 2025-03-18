import React from 'react'

const CustomButton = ({extraClass, children, icon, iconPosition}) => {
  return (
    <button className={`${extraClass}`}>
      {iconPosition === "left" && icon}
       {children}
      {iconPosition === "right" && icon} 
    </button>
  )
}

export default CustomButton
