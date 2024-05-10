import React from 'react'

const ButtonSmall = ({buttonName} : {buttonName : string}) => {
  return (
    <button className='p-10 rounded-[4px] py-[7px] px-[9px] h-[30px] w-[82px]'>{buttonName}</button>
  )
}

export default ButtonSmall