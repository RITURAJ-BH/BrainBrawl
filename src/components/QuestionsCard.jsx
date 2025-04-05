import React, { useMemo, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ChevronRight } from 'lucide-react'

const QuestionsCard = ({ questionData, Index, onNext,onCorrect }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [showNext, setShowNext] = useState(false)

  const { question, correct_answer, incorrect_answers } = questionData
  const options = useMemo(() => {
    return shuffleArray([...incorrect_answers, correct_answer])
  }, [question])

  function shuffleArray(arr) {
    const shuffled = [...arr]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const handleOptionClick = (option) => {
    if (selectedOption) return // prevent multiple clicks
    if(option===correct_answer){onCorrect()}
    setSelectedOption(option)
    setShowNext(true)
  }

  const getOptionClass = (option) => {
    if (!selectedOption) return "hover:bg-gray-200 dark:hover:bg-zinc-800"

    if (option === correct_answer) return "bg-green-400 dark:bg-green-600 text-white"
    if (option === selectedOption) return "bg-red-400 dark:bg-red-600 text-white animate-shake"
    return "bg-gray-200 dark:bg-zinc-800"
  }

  return (
    <div className="flex justify-center items-center">
      <Card className="w-[91%] bg-white dark:bg-black flex flex-col items-center p-6 ubuntu-regular py-10 mt-[-100px]">
        <Label
          className="text-2xl text-center mb-6 sm:text-3xl"
          dangerouslySetInnerHTML={{ __html: "Q" + (Index + 1) + " " + question }}
        />

        <div className="space-y-3 w-[95%]">
          {options.map((option, i) => (
            <p
              key={i}
              className={`w-full text-center px-5 py-5 rounded-xl border transition hover:cursor-pointer ${getOptionClass(option)}`}
              dangerouslySetInnerHTML={{ __html: option }}
              onClick={() => handleOptionClick(option)}
            />
          ))}
        </div>

        {showNext && (
          <Button onClick={() => {
            setSelectedOption(null)
            onNext()
          }} className="mt-5 text-xl p-5 hover:cursor-pointer">
            Next <ChevronRight/>
          </Button>
        )}
      </Card>
    </div>
  )
}

export default QuestionsCard
