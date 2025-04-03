import React from 'react'
import { Button } from './ui/button'
import { ChevronRight, Ghost } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div>
<nav className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:bg-black dark:border-gray-700 z-15">
        <div className='flex flex-row items-center p-0 justify-evenly'>
        <div className='flex flex-row items-center gap-2'>
        <img className='w-18 h-18 p-0' src="https://static.vecteezy.com/system/resources/thumbnails/010/789/831/small_2x/cute-cartoon-brain-brain-illustration-png.png" alt="" />
        <a href="/" className='text-2xl font-bold ubuntu-bold'>Brain Brawl</a>
        </div>
        <div className="flex items-center gap-10 p-0">
        <p className="text-xl font-ubuntu text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer transition-colors">Quiz</p>
<p className="text-xl font-ubuntu text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer transition-colors">Pricing</p>
<p className="text-xl font-ubuntu text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer transition-colors">Use cases</p>
<p className="text-xl font-ubuntu text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer transition-colors">Contact us</p>
<p className="text-xl font-ubuntu text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer transition-colors">FAQ</p>


</div>

            <div>
                <Button variant={Ghost} className="bg-white text-black border border-gray-500 hover:bg-gray-100 hover:cursor-pointer m-2 dark:bg-black dark:text-white">Login</Button>
                <Button className="hover:cursor-pointer">Get Brain+ <ChevronRight /></Button>
            </div>
            <ThemeToggle/>
        </div>
       
  
    </nav>
    </div>
  )
}

export default Navbar
