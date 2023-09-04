import { React , useState } from 'react'
import {BsArrowDownCircle, BsArrowDownShort, BsCalendar4Range, BsFillPlusSquareFill, BsPlusSquare, BsStars} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'

const UpperStatusBar = () => {

  let headerText = 'New';
  let trial = 30;
  let username = 'Faizan Malik';

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-[#222222] p-[6px] flex items-center'>

      <div className='pl-10 flex flex-1 gap-6 items-center'>
        <h1 className='text-white font-semibold'>{headerText}</h1>
        <div className="relative items-center">
          <div className="absolute top-3 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-[#d4d4d4]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#222222] dark:border-[#8e8e8e] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search all the things..." required/>
        </div>
        <svg width="38" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="39" rx="6" fill="#464646"/>
          <path d="M19 13V27" stroke="#8F8F8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 20H26" stroke="#8F8F8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      </div>

      <div className='flex gap-6 font-semibold text-sm mr-20 items-center'>
        <h1 className='text-[#8F8F8F] hover:text-white'>Trial ends in {trial} days</h1>

        <div className='flex items-center gap-1'>
          <BsStars className='text-[#8F8F8F] text-sm hover:text-white'/>
          <h1 className='text-[#8F8F8F] hover:text-white cursor-pointer'>Upgrade Account</h1>
        </div>


        <BsCalendar4Range className='text-[#8F8F8F] text-sm hover:text-white cursor-pointer'/>


        <div className='flex items-center'>

          <button className='flex items-center gap-1' onClick={()=>setIsOpen(!isOpen)}>
            <BiUserCircle className='text-[#8F8F8F] w-5 h-5 hover:text-white cursor-pointer'/>
            <h1 className='text-[#8F8F8F] hover:text-white cursor-pointer'>{username}</h1>
            <BsArrowDownShort className='text-[#8F8F8F] w-5 h-5 hover:text-white cursor-pointer'/>
          </button>

          
          {isOpen === true && <div id="dropdownInformation" className="z-10 absolute top-12 right-32 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#333333] dark:divide-[#505050]">
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{headerText}</div>
                <div className="font-medium truncate">{username}</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
              </ul>
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </div>
          </div>}

        </div>

        <h1 className='text-[#8F8F8F] hover:text-white'>Help</h1>
        
      </div>
    </div>
  )
}

export default UpperStatusBar