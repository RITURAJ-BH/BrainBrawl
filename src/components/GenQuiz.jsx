import React from 'react'
import { HyperText } from './magicui/hyper-text'
import { MorphingText } from './magicui/morphing-text'
import PdfUploader from './PdfComponent'
import { InteractiveHoverButton } from './magicui/interactive-hover-button'

const GenQuiz = () => {
  return (
    <div className='mb-10'>
        <MorphingText texts={["Think","Beyond"]}/>
       <p className='text-center text-4xl mt-5 ubuntu-regular'>Upload the pdf of your content and we will create a Quiz for You</p>
       <PdfUploader/>
       <div className='flex justify-center mt-5'>
       <InteractiveHoverButton>Generate Quiz</InteractiveHoverButton>
       </div>
    </div>
  )
}

export default GenQuiz
