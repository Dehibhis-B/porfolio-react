import React from 'react';
import '../assets';
import { skill } from '../assets';
import '../Constants';
import { AppText, skillsList, workDetail } from '../Constants';

const Skills = () => {
  return (
    <div className='bg-gray-800'>
      <div className='mt-10 bg-gray-800 pb-16 max-w-[900px] mx-auto' id="skills">
        <div className='flex flex-col md:flex-row justify-center items-center py-5'>
          <img src={skill} className="w-[70px] hover:animate-bounce" alt="Skills Icon" />
          <h1 className='text-[40px] font-bold text-gray-400'>
            {AppText.Skills}
            <span className='text-greens-600'>{AppText.Experties}</span>
          </h1>
        </div>
        <div className='flex flex-col px-8 md:px-0 mt-8'>
          <div className='max-w-1200 mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            {workDetail.map((item, index) => (
              <div key={index} className='flex flex-col md:flex-row mb-6'>
                <div className='w-full md:w-1/4 flex items-center justify-center mr-0 md:mr-10'>
                  {/* Columna más estrecha para el año, centrado */}
                  <h2 className='text-xl font-extrabold text-greens-600 mb-4 border-b-4 border-greens-600 text-center'>
                    {item.year}
                  </h2>
                </div>
                <div className='w-full md:w-3/4'>
                  {/* Columna más ancha para el resto del contenido */}
                  <h3 className='text-2xl font-bold text-gray-300 mb-4'>{item.position}</h3>
                  <h3 className='font-mono text-yellow-500 text-[15px]'>{item.companyName}</h3>
                  <h3 className='font-thin text-[15px] text-gray-400'>{item.detail}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
