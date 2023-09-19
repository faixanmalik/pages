import {React, useState} from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { BsCalendarDate, BsFillArrowRightCircleFill, BsSearch, BsTelephone } from 'react-icons/bs';
import { MdOutlineNumbers } from 'react-icons/md';

const BarcodeSearch = () => {

    const [search, setSearch] = useState('')

    const handleChange = (e)=>{
        if(e.target.name === 'search'){
          setSearch(e.target.value);
        }
    }

    let currencyList = [
        '$',    // United States Dollar (USD)
        '€',    // Euro (EUR)
        '₪',    // Israeli New Shekel (ILS)
    ];


    let warrenty = {
        warrentyTitle: 'under warrenty',
        warrentyDays: 6,
        warrentyStatus: true,
    }
    // let warrenty = {
    //     warrentyTitle: 'no warrenty',
    //     warrentyDays: 6,
    //     warrentyStatus: false,
    // }

  return (
    <div className='bg-[#f7f7f7] px-32'>

    <div className='bg-white text-[#8F8F8F] min-h-screen mx-5 rounded-md'>

        {/* Customer Info */}
      <div className='py-1 px-10'>

        <div className='w-full space-y-3 items-center mt-10 py-5 border-b-2 border-gray-700'>

          <div className='w-full space-y-3 items-center'>

            <div className='flex my-6 justify-between'>

                <div className='flex space-y-5 flex-col'>

                    <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-600 rounded-l-md">
                            <BsSearch className='text-lg mt-1'/>
                        </span>
                        <input placeholder="Search..." value={search} onChange={handleChange} type="text" id="search" name='search' className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-600 p-2.5 "  required/>
                    </div>

                    <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-600 rounded-l-md">
                            <MdOutlineNumbers className='text-lg mt-1'/>
                        </span>
                        <input placeholder='Product Name' type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-600 p-2.5"/>
                    </div>

                    
                    <div className='flex space-x-3'>

                        <div class="flex w-full">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-600 rounded-l-md">
                                <AiOutlineUser className='text-lg mt-1'/>
                            </span>
                            <input placeholder='Supplier Name' type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-600 p-2.5"/>
                        </div>

                        <div class="flex w-full">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-600 rounded-l-md">
                                <BsTelephone className='text-lg mt-1'/>
                            </span>
                            <input placeholder='Supplier No' type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-600 p-2.5"/>
                        </div>


                    </div>

                    <div className='flex space-x-3'>
                        <div class="flex w-full">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-600 rounded-l-md">
                                <BsCalendarDate className='text-lg mt-1'/>
                            </span>
                            <input type="date" name="date" id="date" className='rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-600 p-2.5' />
                        </div>

                        <input placeholder='36 Months' name="supplierNo" id='supplierNo' type="number" className="px-3 py-2 text-sm bg-gray-50 resize-none text-gray-700 outline-none border border-gray-600 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />

                    </div>

                    <div className='flex space-x-3'>
                        
                        <input placeholder='Cost Money' name="cost" id='cost' type="number" className="px-3 py-2 text-sm bg-gray-50 resize-none text-gray-700 outline-none border border-gray-600 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />

                        <select
                            id="costSymbol"
                            name="costSymbol"
                            className="px-3 py-2 text-sm bg-gray-50 resize-none text-gray-700 outline-none border border-gray-600 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                        >
                        {currencyList.map((item,index)=>{
                            return <option key={index} value={item}>{item}</option>
                        })}
                        </select>
                    </div>

                    
                   
                </div>


                <div className='flex flex-col space-y-3 w-1/3'>

                    <div className='border border-gray-600 rounded-lg'>

                        <div className='text-center py-10 '>

                            {warrenty.warrentyStatus === true 
                                ? <div>
                                    <h1 className='text-green-600 first-letter:capitalize text-xl font-semibold'>{warrenty.warrentyTitle}!</h1>
                                    <h1 className='text-green-600 first-letter:capitalize text-xl font-semibold'>{warrenty.warrentyDays} days left...</h1>
                                </div>
                                : <div>
                                    <h1 className='text-red-600 first-letter:capitalize text-xl font-semibold'>{warrenty.warrentyTitle}!</h1>
                                    <h1 className='text-red-600 first-letter:capitalize text-xl font-semibold'>{warrenty.warrentyDays} days passed...</h1>

                                </div>
                            }

                        </div>
                    </div>


                    

                    
                </div>

            </div>


          </div>

          
        </div>

        <div className='mt-4'>
            {/* <button type="submit" className='flex py-2 font-semibold rounded-md px-6 items-center gap-2 bg-white text-[#ee8e00] hover:bg-[#ee8e00] hover:text-white border-2 border-[#ee8e00] cursor-pointer'>Close</button> */}
            <button type="submit" className=' py-1 mt-3 rounded-xl px-7 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>Close</button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default BarcodeSearch