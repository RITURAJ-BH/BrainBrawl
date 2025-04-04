import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import CreateQuiz from './pages/CreateQuiz';
import { useEffect } from 'react';

function App() {
  // Set theme once when app mounts
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = localStorage.theme || (prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/create-quiz' element={<CreateQuiz/>}/>
      </Routes>

   
   
    </BrowserRouter>
    
  );
}

export default App;
