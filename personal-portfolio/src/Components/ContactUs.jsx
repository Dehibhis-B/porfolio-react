import React from 'react'
import { contactusbg, phone } from '../assets'
import { AppText } from '../Constants'
import SectionHeading from '../Shared/SectionHeading'
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

function ContactUs() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div id="contact" className='flex flex-col justify-center mt-5'>
        <div className='flex flex-row  justify-center text-gray-400 '>
          <SectionHeading firstTitle={AppText.Contact}

            secondTitle={AppText.Us} />

          <img src={phone} className="w-[80px] ml-4" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
          <img src={contactusbg} className="w-[300px] mr-10" />
          <div className='w-full'>
            <div className='flex flex-col mb-4 '>
              <label className='text-gray-400 text-lg transition-all transform hover:scale-105 hover:text-greens-600'>Email</label>
              <input type="text" placeholder='yourname@gmail.com'
                className='border-[1.5px] px-2 py-2 border-greens-300 focus:border-greens-500 
                focus:ring-2 focus:ring-greens-300 rounded-md transition-all transform hover:scale-105'  />

            </div>
            <div className='flex flex-col mb-4'>
              <label className='text-gray-400 text-lg transition-all transform hover:scale-105 hover:text-greens-600'>Message</label>
              <textarea
                rows={6}
                placeholder='Type your message here'
                className='border-[1.5px] px-2 py-2 border-greens-300 focus:border-greens-500 
                      focus:ring-2 focus:ring-greens-300 rounded-md transition-all transform hover:scale-105 w-full'
              />
            </div>
            <button
              className='transition-all ease-in-out hover:scale-110 bg-greens-600 flex flex-row items-center justify-center text-[14px] py-2 mt-5 text-white rounded-md w-full'
            >
              Submit
              <HiOutlinePaperAirplane className="ml-2 w-6 h-6" />
            </button>

          </div>


        </div>
      </div>
    </div>

  )
}

export default ContactUs