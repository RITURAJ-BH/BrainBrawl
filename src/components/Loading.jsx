import React from 'react'
import { FourSquare } from 'react-loading-indicators'


const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-black">
<FourSquare color="#160b66" size="large" />
<p className='text-black text-4xl ubuntu-bold dark:text-white'>Generating Questions for You</p>
    </div>
  )
}

export default Loading
