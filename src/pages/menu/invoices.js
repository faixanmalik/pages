import React from 'react'
import {BsFillArrowRightCircleFill, BsFillCheckCircleFill, BsFillInfoCircleFill} from 'react-icons/bs'
import {BiSolidBusiness, BiSolidUser} from 'react-icons/bi'
import {TbHelpHexagonFilled} from 'react-icons/tb'
import { FaPlus } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'

const Invoices = () => {


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
                <div className='flex space-x-3 items-center'>
                  <label className="font-semibold text-sm text-gray-600 pb-1">Set Printing</label>
                  <label className="font-semibold text-sm text-gray-600 pb-1">1</label>
                  <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="font-semibold text-sm text-gray-600 pb-1">2</label>
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>

                <div className='flex items-center w-1/4 gap-2'>
                  <label className="font-semibold w-32 text-sm text-gray-600 pb-1">Auto Numerator</label>
                  <input placeholder='12345' name="autoNumerator" id='autoNumerator' type="number" className="px-3 py-2 w-[160px] mt-1 mb-4 text-sm ml-auto bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

              </div>

              <div className='flex space-x-3 justify-between items-center'>

                <div className='flex items-center gap-2'>
                  <label className="font-semibold text-sm text-gray-600 pb-1">Product Number</label>
                  <input placeholder='12345' name="productNumber" id='productNumber' type="number" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                <div className='flex items-center'>
                  <label className="font-semibold w-52 text-sm text-gray-600 pb-1">Customer Phone No</label>
                  <select
                    id="customerPhone"
                    name="customerPhone"
                    className="px-3 py-2 mt-1 mb-4 text-sm w-3/5 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                  >
                    {referedBy.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })}
                  </select>
                </div>

                <div className='flex space-x-3'>
                  <input type="date" name="date" id="date" className='px-3 py-2 mt-1 mb-4 text-sm w-1/2 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                  <input type="time" name="time" id="time" className='px-3 py-2 mt-1 mb-4 text-sm w-1/2 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                </div>

              </div>



              <div className='flex space-x-3 justify-between items-center'>

                <div className='flex items-center gap-2'>
                  <label className="font-semibold w-20 text-sm text-gray-600 pb-1">Techantion</label>
                  <input placeholder='John Doe' name="techantion " id='techantion' type="number" className="px-3 py-2 ml-6 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>



                <div className='flex items-center'>
                  <label className="font-semibold w-40 text-sm text-gray-600 pb-1">Product Type</label>
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


                <div className='flex items-center'>
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

              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <label className="font-semibold w-40 text-sm text-gray-600 pb-1">Data Type</label>
                <select
                  id="dataType"
                  name="dataType"
                  className="px-3 py-2 mt-1 mb-4 text-sm w-full bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                >
                  {dataType.map((item,index)=>{
                    return <option key={index} value={item}>{item}</option>
                  })}
                </select>
              </div>
              <div>
                <input readOnly placeholder='warrenty' name="warrenty " id='warrenty' type="number" className="cursor-not-allowed px-3 py-2 ml-6 mt-1 mb-4 text-sm bg-slate-100 bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>
            </div>

            <div className=''>
              <textarea rows={6} placeholder='write the description of problem' name="desc " id='desc' type="text" className="px-3 w-full py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
            </div>

            <div className='flex space-x-3 justify-between items-center'>

              

              <div className='flex items-center ml-auto'>
                  <button type="submit" className='flex p-[8px] px-3 items-center gap-1 bg-[#ee8e00] text-white cursor-pointer'>
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

export default Invoices