import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[100px] bg-[#2C2C2C] flex justify-between items-center px-10'>
      <div className='w-[70px] h-[70px] bg-red-500 flex justify-center items-center'>Logo</div>

      <div className='w-[70px] h-[70px] bg-green-300 rounded-full flex justify-center items-center'>Profile</div>
    </div>
  )
}

export default Navbar