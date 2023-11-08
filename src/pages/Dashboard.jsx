import React, { useEffect } from 'react'
import TournamentCard from '../components/TournamentCard'
import { getTournaments } from '../services/tournament/getTournaments'
import Navbar from '../components/Navbar'
import StartTourButton from '../components/StartTourButton'

const Dashboard = () => {
  useEffect(() => {
    const data = getTournaments();
    console.log(data);
  }, [])

  return (
    <>
      <Navbar />

      <div className='w-full bg-gradient-to-b from-[#30608F] to-[#3D3961]'>
        <div className='w-full h-[200px]  flex justify-center items-center flex-col gap-y-10'>
          <StartTourButton />

          <div className='w-[600px] h-[1px] bg-white'></div>
        </div>

        <div className='w-full  flex justify-center'>
          <div className='w-[47%] flex flex-col items-center'>
            <h1 className='w-full text-2xl font-bold text-white'>Trending Tournament</h1>

            <div className='w-[97%] mt-2 border-2 border-gray-500 shadow-md p-2'>
              <TournamentCard />
              <TournamentCard />
            </div>
          </div>

          <div className='w-[47%] flex flex-col items-center'>
            <h1 className='w-full text-2xl font-bold text-white'>Your Tournament</h1>

            <div className='w-[97%] mt-2 border-2 border-gray-500 shadow-md p-2'>
              <TournamentCard />
              <TournamentCard />
              <TournamentCard />
            </div>
          </div>
        </div>
      </div>

      <div className='h-96 bg-[#3D3961]'></div>
    </>
  )
}

export default Dashboard