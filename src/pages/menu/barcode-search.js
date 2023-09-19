import {React, useState} from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillArrowRightCircleFill, BsTelephone } from 'react-icons/bs';
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
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input value={search} onChange={handleChange} type="text" id="search" name='search' className="block w-full p-2 pl-10 border border-gray-600 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." required/>
                    </div>

                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <MdOutlineNumbers className='text-xl mt-1 bg-gray-50'/>
                        </div>
                        <input placeholder='Product Name' name="productName" id='productName' type="text" className="px-3 py-2 w-9/12 mt-1 pl-10 text-sm bg-gray-50 resize-none text-gray-700 outline-none border border-gray-600 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                    </div>

                    
                    <div className='flex space-x-3'>

                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <AiOutlineUser className='text-xl mt-1 bg-gray-50'/>
                            </div>
                            <input placeholder='Supplier Name' name="supplierName" id='supplierName' type="text" className="px-3 py-2 mt-1 pl-10 text-sm bg-gray-50 resize-none text-gray-700 outline-none border border-gray-600 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BsTelephone className='text-lg mt-1 bg-gray-50'/>
                            </div>
                            <input placeholder='Supplier No' name="supplierNo" id='supplierNo' type="number" className="px-3 py-2 mt-1 pl-10  text-sm bg-gray-50 resize-none text-gray-700 outline-none border border-gray-600 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                        </div>


                    </div>

                    <div className='flex space-x-3'>
                        <input type="date" name="date" id="date" className='px-3 py-2 text-sm bg-gray-50 resize-none text-gray-700 outline-none border border-gray-600 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />

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

                    <div className='border border-gray-600'>

                        <div className='text-center py-20'>

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


                    <div className='ml-auto'>
                        <button type="submit" className='flex py-2 font-semibold rounded-md px-6 items-center gap-2 bg-white text-[#ee8e00] hover:bg-[#ee8e00] hover:text-white border border-[#ee8e00] cursor-pointer'>Close</button>
                    </div>

                    
                </div>

            </div>


          </div>

          
        </div>

      </div>
    </div>
  </div>
  )
}

export default BarcodeSearch