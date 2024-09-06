import React from 'react'
import '../assets'
import '.'
import { book, laptop, wave } from '../assets'
import { aboutSection, AppText } from '../Constants'
const AboutMe = () => {
  return (
    <div id="aboutme" className="max-w-[1200px] mx-auto">
      <div className='mt-[100px] '>
      
      <div className='w-full bg-gray-900 border rounded-md h-[300px]  justify-center items-center'>
       
        <h1 className='text-gray-400 text-[40px] pt-[20px] font-bold text-center relative z-10 top-8'>Sobre <span className='text-black'>Mi</span></h1>
        <h1 className='w-full px-10 md:px-48 lg:px-80 mt-[35px] text-gray-100 font-mono'>{AppText.aboutMeDescripion} </h1>
      </div>

     
      <div className='flex flex-col md:flex-row mt-[-15px] md:px-32 '>
        {
          aboutSection.map((item, index) => (

            <div key={index} className="flex  relative w-full items-center justify-center flex-col m-2
                group md:hover:bg-greens-600 rounded-lg py-2">
              <img src={item.image} className="w-[230px] rounded-lg h-[170px] object-cover" />
              <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
              <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7'>{item.desc}</h1>
            </div>


          ))
        }

      </div>
    </div>

    </div>
    

  )
}

export default AboutMe