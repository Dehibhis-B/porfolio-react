import React from 'react'
import '../Constants'
import { AppText } from '../Constants'
import '../assets'
import { homeImage } from '../assets'
import './Home.css'
import Typewriter from 'typewriter-effect';
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";


const Home = () => {
  return (
    <div id="home" className="  max-w-[1200px] mx-auto">
      <div className='flex p-[20px] mx-auto md:px-20 justify-between flex-col md:flex-row '>
        <div className='flex w-full flex-row justify-end'>
          <div className='flex w-full flex-col items-start content-end'>
            <h1 className='text-[35px] md:text-[40px] font-bold text-gray-500 '>{AppText.hello}</h1>
            <div className='flex'>
              <h1 className='text-[35px] md:text-[40px] font-bold mr-3 text-gray-500 '>{AppText.Iam}</h1>
              {/* <h1 className='text-[40px] md:text-[60px] font-bold text-purple-600'>{AppText.RahulSanap}</h1> */}
              <Typewriter
                options={{
                  strings: [AppText.RahulSanap, AppText.FrontedDeveloper, AppText.BackendDeveloper],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div>
              <h1 className='my-3 text-gray-400 font-sans text-[14px] '>{AppText.aboutMeDescripion}</h1>
            </div>






          </div>
        </div>
        <div className='w-full flex justify-center'>
          <img src={homeImage} className="w-[200px] md:w-[300px] " />
        </div>


      </div>
      <div className='font-mono text-[11px] h-20 flex justify-center items-center gap-4 md:gap-6'>
        <button className=" hover:z-50 transition-all duration-300 ease-in-out hover:scale-125 bg-greens-600 p-2 rounded-md text-white flex items-center">
          <AiOutlineLinkedin className='mr-2' />
          LinkedIn
        </button>
        <button className="hover:z-50 transition-all duration-300 ease-in-out hover:scale-125 bg-greens-600 p-2 rounded-md text-white flex items-center">
          <FiGithub className='mr-2' />
          GitHub
        </button>
      </div>
      <div className='flex justify-center items-center gap-1 md:gap-2'>
        <img className='w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
        <img className='w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
        <img className='w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" alt="CSS3" />
        <img className='w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
        <img className='w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" />
        <img className='w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
        <img className='w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" />
        <img className='w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
        <img className='w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
      </div>




    </div>


  )
}

export default Home