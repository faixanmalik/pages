import { React } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSolidUser } from 'react-icons/bi'
import { BsBuilding, BsFillCheckCircleFill } from 'react-icons/bs'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { ImParagraphLeft } from 'react-icons/im'
import { MdEmail, MdOutlineNumbers, MdProductionQuantityLimits } from 'react-icons/md'


const PdfForms = () => {
      
  return (
    <div className='bg-[#f7f7f7] px-10'>

    <div className='bg-white pb-10 text-[#8F8F8F] min-h-screen mx-5 rounded-md'>

        {/* Customer Info */}
      <div className='py-1 px-5'>
        {/* <h1 className='text-gray-600 font-semibold'>Basic Info</h1> */}
        <div className='w-full space-y-3 items-center mt-10'>

          <img className='w-full' src='/PdfFormHeader.jpg' alt="Header" srcSet="" />

          <div className='w-full space-y-3 items-center'>

            <div className='flex my-6 justify-between'>

                <div className='w-1/4'>
                  <h1 className="uppercase w-1/2 text-center py-2 text-lg font-bold bg-white bg-opacity-50 resize-none text-gray-500 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out">
                    Open
                  </h1>
                </div>

                <div className='flex flex-col justify-center'>
                  <textarea placeholder='Ticket number: xxxxxx' id="ticketNo" rows="3" cols={25} className="placeholder:font-bold placeholder:text-xl placeholder:items-center placeholder:text-gray-700 px-3 py-2 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"></textarea>
                </div>


                <div className='flex flex-col space-y-2 w-[250px]'>

                    <input placeholder='technician: xxxxxxx' name="productNumber" id='productNumber' type="number" className="px-3 py-2 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />

                    <div className='flex space-x-2'>
                        <input type="date" name="date" id="date" className='px-3 py-2 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                        <input type="time" name="time" id="time" className='px-3 py-2 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                    </div>
                </div>

            </div>


            <div className='flex items-center py-4 space-x-5 justify-between border-b-2 border-gray-700'>

                <h1 className='text-black font-semibold text-xl'>Customer: </h1>
                <div className='flex flex-col w-1/4'>
                  <div className='flex'>
                    <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                        <BiSolidUser className='text-lg'/>
                    </span>
                    <input placeholder='Phone number / Mobile' type="number" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>

                <div className='flex flex-col w-1/4'>
                    <div className='flex'>
                      <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                          <MdEmail className='text-lg'/>
                      </span>
                      <input placeholder='Email' type="email" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>

                <div className='flex flex-col w-1/2'>
                    <div className='flex'>
                      <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                          <HiOutlineOfficeBuilding className='text-lg'/>
                      </span>
                      <input placeholder='Customer Name / Company Name' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>

            </div>


            <div className='flex w-full py-2 space-x-5 items-center'>

            
              <div className='flex items-center w-1/3 space-x-3'>
                <label className="text-black font-semibold text-xl">Product No:</label>
                <div className='flex'>
                  <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                      <MdOutlineNumbers className='text-lg'/>
                  </span>
                  <input placeholder='xxxxxxxx' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                </div>
              </div>

              <div className='flex items-center w-1/3 space-x-3'>
                <label className="text-black w-[130px] font-semibold text-xl">Product Type:</label>
                <div className='flex'>
                  <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                      <MdProductionQuantityLimits className='text-lg'/>
                  </span>
                  <input placeholder='xxxxxxxx' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                </div>
              </div>

              <div className='flex items-center w-1/3 space-x-3'>
                <label className="text-black w-[180px] font-semibold text-xl">Related Product:</label>
                <div className='flex'>
                  <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                      <AiOutlineShoppingCart className='text-lg'/>
                  </span>
                  <input placeholder='xxxxxxxx' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              

            </div>

            <div className='flex w-full space-x-5 items-center'>

              <div className='flex items-center w-full space-x-3'>
                <label className="text-black w-[310px] font-semibold text-xl">Title or Short Description:</label>
                <div className='flex w-full'>
                  <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                      <ImParagraphLeft className='text-lg'/>
                  </span>
                  <input placeholder='Write your thoughts here...' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                </div>
              </div>

            </div>
          </div>
          
          <div className='py-5 border-b-2 border-gray-700'>
            <textarea rows={6} placeholder='Write the description of problem....' name="desc " id='desc' type="text" className="px-3 w-full py-2 mt-1 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
          </div>


          <div className='py-5 w-9/12 px-5 mx-auto border border-gray-700'>
            <h1 className='text-black font-semibold text-lg'>Labor and fees: </h1>
            <ul className='text-black font-semibold text-sm list-disc px-5'>
                <li>Laptop Diagnose - 200 / Apple Diagnose - 260 / Desktop Computer - 180.</li>
                <li>Software settings or software re-installation or virus cleaning is not included in the warrenty ( there is no warrenty for software ) and involves a fee.</li>
                <li>If the equipment is not requrired for up to 30 days, the device will be thrown away.</li>
                <li>Repair Warrenty - 80 days, unless otherwise started on the invoice.</li>
                <li>Replacement of hardware under warrenty subject to a purchase invoice only!</li>
                <li>Warning: Responsibility for this data and information rests totally with the customer - a bookup must be made before bringing the computer into the lab Even if IP Computers transfers information for free or for a fee.</li>
                <li>Working Hours Sunday - Thursday 08:00 - 18:00.</li>
            </ul>

          </div>


            <div className='w-1/4 mx-auto'>
              <h1 className='text-black text-center font-semibold text-lg'>Customer Signature</h1>
              <div className='w-full h-20 border border-gray-600'></div>
            </div>


            <div className='w-1/4 mx-auto flex justify-center'>
                <button type="submit" className='flex p-[8px] rounded-md px-3 w-full justify-center items-center gap-1 bg-[#ee8e00] text-white cursor-pointer'>
                  {/* <BsFillCheckCircleFill className='text-sm'/> */}
                  <h1 className=''>Click to sign</h1>
                </button>
            </div>

        </div>

      </div>
    </div>
  </div>
  )
}

export default PdfForms