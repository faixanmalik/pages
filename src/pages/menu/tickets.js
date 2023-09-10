import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { AiOutlineCamera } from 'react-icons/ai'

const Tickets = () => {

    let referedBy = [
        'Person 1',
        'Person 2',
        'Person 3',
        'Person 4',
        'Person 5'
    ]
  
    let products = [
      'Computer',
      'Laptop',
      'Phone',
      'Fax',
      'Machine',
    ]
  
    let dataType = [
      'have important data',
      'not have important data',
    ]

  return (
     <div className='bg-[#f7f7f7] px-10'>

      <div className='bg-white text-[#8F8F8F] min-h-screen mx-5 rounded-md'>

          {/* Customer Info */}
        <div className='p-5'>
          {/* <h1 className='text-gray-600 font-semibold'>Basic Info</h1> */}
          <div className='w-full space-y-3 items-center mt-10'>

            <div className='w-full space-y-3 items-center'>

              <div className='flex justify-between'>

                <div className='flex flex-col w-[130px]'>
                  <label className="font-semibold text-sm text-gray-600 pb-1">Auto Numerator</label>
                  <input readOnly placeholder='12345' name="autoNumerator" id='autoNumerator' type="number" className="cursor-not-allowed px-3 py-2 mt-1 mb-4 text-sm bg-slate-100 bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>


                <div className='flex space-x-3 items-center w-[200px]'>
                  <label className="font-semibold text-sm text-gray-600 pb-1">Set Printing</label>
                  <label className="font-semibold text-sm text-gray-600 pb-1">1</label>
                  <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="font-semibold text-sm text-gray-600 pb-1">2</label>
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>

               

              </div>


              <div className='flex space-x-5 justify-between'>

                <div className='flex flex-col w-1/4'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-1">Product Number</label>
                  <input placeholder='1234567890' name="productNumber" id='productNumber' type="number" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                <div className='flex flex-col w-1/4'>
                  <label className="font-semibold w-52 text-sm text-gray-600 pb-1">Customer Phone No</label>
                  <select
                    id="customerPhone"
                    name="customerPhone"
                    className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                  >
                    {referedBy.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })}
                  </select>
                </div>

                <div className='flex flex-col w-1/4'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-1">First Name</label>
                  <input placeholder='John' name="firstName" id='firstName' type="text" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                <div className='flex flex-col w-1/4'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-1">Last Name</label>
                  <input placeholder='Doe' name="lastName" id='lastName' type="text" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                <div className='flex flex-col w-1/4'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-1">Comapny Name</label>
                  <input placeholder='John pvt.ltd' name="companyName" id='companyName' type="text" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                

                
              </div>


              <div className='flex space-x-5 justify-between items-center'>

                <div className='flex flex-col w-1/4'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-1">Email</label>
                  <input placeholder='abc@example.com' name="email" id='email' type="email" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                <div className='flex flex-col w-1/4'>
                  <label className="font-semibold w-20 text-sm text-gray-600 pb-1">Techantion</label>
                  <input placeholder='John Doe' name="techantion " id='techantion' type="number" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                <div className='flex flex-col w-1/4'>
                  <label className="font-semibold text-sm text-gray-600 pb-1">Warrenty</label>
                  <input readOnly placeholder='warrenty' name="warrenty " id='warrenty' type="number" className="cursor-not-allowed px-3 py-2 mt-1 mb-4 text-sm bg-slate-100 bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                
                <div className='flex flex-col w-1/2'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-1">Date/Time</label>
                  <div className='flex space-x-3'>
                    <input type="date" name="date" id="date" className='px-3 py-2 mt-1 mb-4 text-sm w-1/2 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                    <input type="time" name="time" id="time" className='px-3 py-2 mt-1 mb-4 text-sm w-1/2 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                  </div>
                </div>

              </div>
            </div>

            <div className='flex items-center space-x-5 justify-between'>

              <div className='flex flex-col w-1/4'>
                <label className="font-semibold w-52 text-sm text-gray-600 pb-1">Product Type</label>
                <select
                  id="productType"
                  name="productType"
                  className="px-3 py-2 mt-1 mb-4 text-sm w-full bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                >
                  {products.map((item,index)=>{
                    return <option key={index} value={item}>{item}</option>
                  })}
                </select>
              </div>

              <div className='flex flex-col w-1/3'>
                <label className="font-semibold w-52 text-sm text-gray-600 pb-1">Related Product</label>
                <select
                  id="relatedProduct"
                  name="relatedProduct"
                  className="px-3 py-2 mt-1 mb-4 text-sm w-full bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                >
                  {products.map((item,index)=>{
                    return <option key={index} value={item}>{item}</option>
                  })}
                </select>
              </div>

              <div className='flex flex-col w-1/2'>
                <label className="font-semibold  text-sm text-gray-600 pb-1">Title or short description</label>
                <input placeholder='title or short description' name="shortDesc " id='techantion' type="number" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>

                

              <div className='flex flex-col w-1/3'>
                <label className="font-semibold w-20 text-sm text-gray-600 pb-1">Data Type</label>
                <select
                  id="dataType"
                  name="dataType"
                  className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                >
                  {dataType.map((item,index)=>{
                    return <option key={index} value={item}>{item}</option>
                  })}
                </select>
              </div>

            </div>

            
            <div className=''>
              <textarea rows={6} placeholder='write the description of problem' name="desc " id='desc' type="text" className="px-3 w-full py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
            </div>

            <div className='flex space-x-3 justify-between items-center'>
              <button type="submit" className='flex p-[7px] rounded-md px-3 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                <AiOutlineCamera className='text-xl'/>
                Open Camera
              </button>

              <div className='flex items-center ml-auto'>
                  <button type="submit" className='flex p-[8px] rounded-md px-3 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                    <BsFillCheckCircleFill className='text-sm'/>
                      Create Ticket
                  </button>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tickets