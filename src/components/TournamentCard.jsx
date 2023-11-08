import React from 'react'

const TournamentCard = ({ name, description }) => {
  return (
    <div className='bg-[#535A7D] mb-3 cursor-pointer'>
      <h1 className='text-xl font-bold ml-2 text-white'>Tournament Mobile Legends S1</h1>

      <div className='w-[90%] ml-10 pb-1'>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto qui at, nulla placeat doloribus quia mollitia error totam nihil? Vitae modi molestiae voluptas quis!</p>
      </div>
    </div>
  )
}

export default TournamentCard