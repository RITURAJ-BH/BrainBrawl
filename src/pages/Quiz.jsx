import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import QuestionsCard from '@/components/QuestionsCard'
import Footer from '@/components/ui/footer'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Quiz = () => {
    const [searchParams] = useSearchParams()
    const num = searchParams.get("num")
    const category = searchParams.get("category")
    const difficulty = searchParams.get("difficulty")
    const type = searchParams.get("type")
    const [questionData, setQuestionData] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(num, category, difficulty, type)
    const [score, setScore] = useState(0);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const handleNextQuestion = () => {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
    const didFetchRef = useRef(false)

    useEffect(() => {
      if (didFetchRef.current) return
      didFetchRef.current = true
    
      const apiUrl = new URL('https://opentdb.com/api.php')
      apiUrl.searchParams.set('amount', num)
      if (type) apiUrl.searchParams.set('type', type)
      if (difficulty) apiUrl.searchParams.set('difficulty', difficulty)
      if (category) apiUrl.searchParams.set('category', category)
    
      fetch(apiUrl)
        .then((res) => res.json())
        .then((json) => {
          setQuestionData(json.results || [])
          setLoading(false)
        })
        .catch((err) => {
          console.error("Error fetching questions:", err)
          setLoading(false)
        })
    }, [num, type, difficulty, category])
    
      
  
    if (loading) return <Loading/>

    // no questions returned
    if (!questionData || questionData.length === 0) {
        return <p className="text-center mt-20 text-xl">No questions found.</p>
      }  
    // safe access
    const currentQuestion = questionData[currentQuestionIndex]

  return (
    <div>
        <Navbar/>
        <div className="">
        {currentQuestion ? (
          <QuestionsCard
            questionData={currentQuestion}
            onOptionSelect={handleNextQuestion}
            Index={currentQuestionIndex}
            onNext={() => setCurrentQuestionIndex(prev => prev + 1)}
            onCorrect={() => setScore(prev => prev + 1)}
          />
        ) : (
            <>
          <div className="text-6xl ubuntu-bold text-center">Quiz Complete 🎉</div>
            <p className='text-2xl ubuntu-regular text-center mt-10'>You Scored {score}</p>
        </>
        )}
      </div>
        <Footer/>
      
    </div>
  )
}

export default Quiz
