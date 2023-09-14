import { React, useState } from 'react'
import { AiOutlineUnorderedList, AiTwotoneSetting } from 'react-icons/ai';
import { BiPlusMedical, BiSolidHelpCircle } from 'react-icons/bi';
import { BsAspectRatio } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { LuSettings2 } from 'react-icons/lu';

const Tickets = () => {

  const [search, setSearch] = useState('')

  const handleChange = (e)=>{
    if(e.target.name === 'search'){
      setSearch(e.target.value);
    }
  }

  let status = [
    'Resolved',
    'Not Resolved',
  ]

  return (
    <div className='bg-[#f7f7f7] min-h-screen text-black px-5'>
      <div className='py-5'>
        <div className='flex flex-col space-y-4 items-center space-x-3'>

          <div className='flex items-center w-full '>

            <h1 className='text-3xl mr-10 font-semibold tracking-wide'>Tickets</h1>
            <div className='flex w-7/12 items-center space-x-5'>

              <div className="relative w-full">
                  <div className="absolute shadow-lg inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input value={search} onChange={handleChange} type="text" id="search" name='search' className="block w-full p-2 pl-10 border border-black text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Product..." required/>
              </div>

              <div className="relative w-full">
                  <div className="absolute shadow-lg inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiFilter/>
                  </div>
                  <input value={search} onChange={handleChange} type="text" id="search" name='search' className="block w-full p-2 pl-9 border border-black text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Saved Search..." required/>
              </div>

              <div className='flex'>
                <div className='border shadow-lg border-gray-300 p-2 bg-gray-200 rounded-md'>
                  <LuSettings2 className='text-xl'/>
                </div>
                <div className='border shadow-lg border-gray-300 p-2 bg-slate-50 rounded-md'>
                  <BsAspectRatio className='text-xl'/>
                </div>
              </div>
            </div>

            <div className='flex w-full justify-end items-center space-x-5'>

              <button type="submit" className='flex p-[8px] shadow-lg px-3 text-sm items-center font-medium gap-1 bg-green-600 text-white cursor-pointer'>
                <BiPlusMedical/>
                New Ticket
              </button>

              <button type="submit" className='flex p-[8px] shadow-lg px-3 text-sm items-center font-medium gap-1 bg-gray-500 text-white cursor-pointer'>
                <AiOutlineUnorderedList/>
                Bulk Actions
              </button>

              <div className='border border-gray-300 shadow-lg px-3 py-[5px] bg-slate-50 rounded-md'>
                View
              </div>

              <BiSolidHelpCircle className='text-xl text-gray-500'/>

            </div>
          </div>

          <div className='flex items-center w-full'>

            <div className='flex w-full items-center space-x-4'>

              <LuSettings2 className='text-7xl '/>
              <div className='flex w-full items-center'>
                <label className="font-semibold w-24 text-sm text-gray-600 pb-1">Status is Not</label>
                <select
                    id="statusIsNot"
                    name="statusIsNot"
                    className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                  >
                    {status.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })}
                </select>
              </div>


              <div className='flex w-full items-center space-x-2'>
                <label className="font-semibold w-14 text-sm text-gray-600 pb-1">Status Is</label>
                <select
                    id="statusIs"
                    name="statusIs"
                    className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                  >
                    {status.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })}
                </select>
              </div>

              <div className='flex w-full items-center space-x-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Issue Is</label>
                <select
                    id="issueIs"
                    name="issueIs"
                    className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                  >
                    {status.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })}
                </select>
              </div>
            </div>

            <div className='flex w-full justify-end items-center space-x-5'>
              <div className='border border-gray-300 shadow-lg px-3 py-[5px] bg-slate-50 rounded-md'>
                Apply
              </div>
            </div>
          </div>
        
        </div>


        <div className='px-5'>
          <div className='flex justify-between'>
            <button type="submit" className='flex text-sm items-center gap-2 border border-gray-300 shadow-lg px-3 py-[5px] bg-slate-100 rounded-md cursor-pointer'>
              <AiTwotoneSetting/>
              Customize
            </button>

            <div className='border border-gray-300 text-sm font-semibold shadow-lg p-1 px-3 bg-gray-200 rounded-md'>
              2 TICKETS
            </div>

          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Tickets