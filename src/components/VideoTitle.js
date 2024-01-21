import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex'>
            <button className='bg-gray-500 p-4 w-30 px-9 text-xl text-white bg-opacity-50 rounded-lg'>▶️ Play</button>
            <button className='bg-gray-500 mx-2 p-4 w-30 px-9 text-xl text-white bg-opacity-50 rounded-lg'>More Info</button>
        </div>
        
    </div>
  )
}

export default VideoTitle