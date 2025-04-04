import React from 'react'
import { HyperText } from './magicui/hyper-text'
import { MorphingText } from './magicui/morphing-text'
import PdfUploader from './PdfComponent'

const GenQuiz = () => {
  return (
    <div>
        <MorphingText texts={["Think","Beyond"]}/>
       <p className='text-center text-4xl mt-5 ubuntu-regular'>Upload the pdf of your content and we will create a Quiz for You</p>
       <PdfUploader/>
    </div>
  )
}

export default GenQuiz
