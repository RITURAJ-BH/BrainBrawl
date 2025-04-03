import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'

function App() {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
