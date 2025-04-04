import CustomQuizSec from '@/components/CustomQuizSec'
import Navbar from '@/components/Navbar'
import TriviaQuizSec from '@/components/TriviaQuizSec'
import React from 'react'
import Aurora from '../../y/Aurora/Aurora'
import GenQuiz from '@/components/GenQuiz'
import Footer from '@/components/ui/footer'

const CreateQuiz = () => {
  return (
    <div>
      <Navbar/>
      <div className="relative min-h-screen overflow-hidden"> 
         <div className="absolute inset-0 z-0">
    <Aurora
      colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      blend={1}
      amplitude={0.8}
      speed={1.7}
    />
  </div>

  <div className="relative z-10">
    <h1 className="text-6xl text-center mb-10 text-white ubuntu-bold mt-10">Choose the way you wanna create your Quiz</h1>
    <div className="flex flex-row justify-evenly">
      <TriviaQuizSec />
      <CustomQuizSec />
    </div>
  </div>
  <hr className="my-8 h-1 w-full rounded-full border-0 bg-gradient-to-r from-[#00ffcc] via-[#3366ff] to-[#cc00ff] shadow-[0_0_10px_#00ffcc]" />
<GenQuiz/>
</div>
<Footer/>
     </div>
  
  )
}

export default CreateQuiz
