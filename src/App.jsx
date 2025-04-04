import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import WhyChooseUs from './components/ui/land2';
import FeatureHighlight from './components/ui/FeatureHighlight';
import Pricing from "./components/ui/Pricing";
import { useEffect } from 'react';
import Footer from "./components/ui/Footer";

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
        <Route path="/" element={<Landing />} />
      </Routes>

   
   
    </BrowserRouter>
    
  );
}

export default App;
