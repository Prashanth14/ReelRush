import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black '>

        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>

        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>

        <div className='flex my-4 md:my0'>

            <button className='bg-white md:py-4 w-30 px-3 md:px-9 text-xl text-black rounded-lg hover:bg-opacity-80'>▶️ Play</button>

            <button className='hidden md:inline-block bg-gray-500 mx-2 p-4 w-30 px-9 text-xl text-white bg-opacity-50 rounded-lg'>More Info</button>

        </div>
        
    </div>
  )
}

export default VideoTitle