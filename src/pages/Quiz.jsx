 main
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import QuestionsCard from "@/components/QuestionsCard";
import Footer from "@/components/ui/footer";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ResultCircle from "@/components/ResultCircle";

const Quiz = () => {
  const [searchParams] = useSearchParams();
  const num = searchParams.get("num");
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");
  const type = searchParams.get("type");
  const [questionData, setQuestionData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(num, category, difficulty, type);
  const [score, setScore] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };
  const didFetchRef = useRef(false);

  useEffect(() => {
    if (didFetchRef.current) return;
    didFetchRef.current = true;

    const apiUrl = new URL("https://opentdb.com/api.php");
    apiUrl.searchParams.set("amount", num);
    if (type) apiUrl.searchParams.set("type", type);
    if (difficulty) apiUrl.searchParams.set("difficulty", difficulty);
    if (category) apiUrl.searchParams.set("category", category);

import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import QuestionsCard from '@/components/QuestionsCard'
import Footer from '@/components/ui/footer'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const Quiz = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()

  // Get params for trivia mode
  const num = searchParams.get("num")
  const category = searchParams.get("category")
  const difficulty = searchParams.get("difficulty")
  const type = searchParams.get("type")

  const [loading, setLoading] = useState(true)
  const [questionData, setQuestionData] = useState([])
  const [score, setScore] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const didFetchRef = useRef(false)

  const isTriviaMode = location.pathname.includes("trivia")
  const isCustomMode=location.pathname.includes("custom")
  useEffect(() => {
    if (!isTriviaMode) return
    if (didFetchRef.current) return
    didFetchRef.current = true

    const apiUrl = new URL('https://opentdb.com/api.php')
    apiUrl.searchParams.set('amount', num)
    if (type) apiUrl.searchParams.set('type', type)
    if (difficulty) apiUrl.searchParams.set('difficulty', difficulty)
    if (category) apiUrl.searchParams.set('category', category)
 main

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
 main
        setQuestionData(json.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
        setLoading(false);
      });
  }, [num, type, difficulty, category]);

  if (loading) return <Loading />;

  // no questions returned
  if (!questionData || questionData.length === 0) {
    return <p className="text-center mt-20 text-xl">No questions found.</p>;
  }
  // safe access
  const currentQuestion = questionData[currentQuestionIndex];

        setQuestionData(json.results || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching questions:", err)
        setLoading(false)
      })
  }, [isTriviaMode, num, type, difficulty, category])
  useEffect(() => {
    if (!isCustomMode) return
    if (didFetchRef.current) return
    didFetchRef.current = true

    fetch("http://localhost:5000/api/generate-quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numQuestions: num,
        difficulty: difficulty,
        description: category,
        type:type
      })
    })
    .then(response => {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let questionsArray = [];
      function read() {
        reader.read().then(({ done, value }) => {
          if (done) {
            console.log("All questions received:", questionsArray);
            return;
          }
          const chunk = decoder.decode(value, { stream: true });
          buffer += chunk;
          const lines = buffer.split("\n");
          buffer = lines.pop();
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const data = JSON.parse(line);
              questionsArray.push(data);
              if(loading){
                setLoading(false);
              }
              setQuestionData(prev => [...prev, data]);
              console.log("Updated questions array:", questionsArray);
            } catch (err) {
              console.error("JSON parse error:", err, "Line:", line);
            }
          }
          read(); 
        });
      }
      read();
    });
  }, [isCustomMode, num, type, difficulty, category])
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1)
  }
 
  if (loading) return <Loading />

  if (!questionData || questionData.length === 0) {
    return <p className="text-center mt-20 text-xl">No questions found.</p>
  }

  const currentQuestion = questionData[currentQuestionIndex]
 main

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        {currentQuestion ? (
          <QuestionsCard
            questionData={currentQuestion}
            onOptionSelect={handleNextQuestion}
            Index={currentQuestionIndex}
            onNext={() => setCurrentQuestionIndex((prev) => prev + 1)}
            onCorrect={() => setScore((prev) => prev + 1)}
          />
        ) : (
 main
          <>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-5xl font-extrabold text-cente  mb-6">
                Quiz Complete 🎉
              </h2>
              <ResultCircle correct={score} total={currentQuestionIndex} />
            </div>
          </>

          <div className='flex flex-col items-center justify-center'>
            <div className="text-6xl ubuntu-bold text-center">Quiz Complete 🎉</div>
            <p className='text-2xl ubuntu-regular text-center mt-10'>You Scored {score} out of {currentQuestionIndex}</p>
          </div>
 main
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
