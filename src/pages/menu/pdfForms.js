import {BsCameraFill, BsFillCheckCircleFill} from 'react-icons/bs'
import { React, Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const PdfForms = () => {

    let referedBy = [
        {name: 'faizan malik'},
        {name: 'Yousef'},
        {name: 'Ramzan Bhi'},
        {name: 'Clerk'},
        {name: 'Bhovaan Bam'},
        {name: 'Shahruk Khan'},
        {name: 'Salman Khan'},
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

    const cancelButtonRef = useRef(null)

    const [open, setOpen] = useState(false)
    const [openCustomerPhone, setOpenCustomerPhone] = useState(false)
    const [search, setSearch] = useState('')
    const [personList, setPersonList] = useState(referedBy)
      
    const handleChange = (e)=>{
        if(e.target.name === 'search'){
            setSearch(e.target.value);
        }
    }
    
    const filteredData = personList.filter((item)=>{
        return item.name.toLowerCase().includes(search.toLowerCase());
    });
      
  return (
    <div className='bg-[#f7f7f7] px-10'>

    <div className='bg-white text-[#8F8F8F] min-h-screen mx-5 rounded-md'>

        {/* Customer Info */}
      <div className='py-1 px-5'>
        {/* <h1 className='text-gray-600 font-semibold'>Basic Info</h1> */}
        <div className='w-full space-y-3 items-center mt-10'>

          <div className='w-full space-y-3 items-center'>

            <div className='flex my-6 justify-between'>

                <div className='flex flex-col w-[150px]'>
                    <textarea placeholder='Ticket Status: Open, Progress, Closed' id="message" rows="3" cols={60} class="placeholder:font-semibold px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"></textarea>
                </div>

                <div className='flex flex-col'>
                    <div className='flex'>
                        <textarea placeholder='Company Info - name, address, address etc' id="message" rows="6" cols={60} class="placeholder:font-semibold px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <textarea placeholder='Ticket number: xxxxxx' id="ticketNo" rows="3" cols={25} class="placeholder:font-bold placeholder:text-xl placeholder:items-center placeholder:text-gray-700 px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                </div>


                <div className='flex flex-col w-[250px]'>

                    <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                        <div class="flex items-center justify-center w-full h-40 bg-gray-300 rounded sm:w-full">
                            <svg class="w-10 h-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                        </div>
                    </div>

                    <input placeholder='technician: xxxxxxx' name="productNumber" id='productNumber' type="number" className="px-3 py-2 mt-1 mb-1 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />

                    <div className='flex space-x-2'>
                        <input type="date" name="date" id="date" className='px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                        <input type="time" name="time" id="time" className='px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                    </div>
                </div>

            </div>


            <div className='flex items-center py-4 space-x-5 justify-between border-b-2 border-gray-700'>

                <h1 className='text-black font-semibold text-xl'>Customer: </h1>
                <div className='flex flex-col w-1/5'>
                    <input placeholder='Phone number / Mobile' name="phoneNo" id='phoneNo' type="number" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                <div className='flex flex-col w-1/4'>
                    <input placeholder='Email' name="email" id='email' type="email" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                <div className='flex flex-col w-1/2'>
                    <input placeholder='Customer Name / Company Name' name="customerName" id='customerName' type="text" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

            </div>


            <div className='flex w-full py-2 space-x-5 items-center'>

            
              <div className='flex items-center w-1/3 space-x-3'>
                <label className="text-black font-semibold text-xl">Product No:</label>
                <input placeholder='xxxxxxxx' name="productNo " id='productNo' type="number" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>

              <div className='flex items-center w-1/3 space-x-3'>
                <label className="text-black font-semibold text-xl">Product Type:</label>
                <input placeholder='xxxxxxxx' name="productType" id='productType' type="text" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>

              <div className='flex items-center w-1/3 space-x-3'>
                <label className="text-black font-semibold text-xl">Related Product:</label>
                <input placeholder='xxxxxxxx' name="relatedProduct" id='relatedProduct' type="text" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>
              

            </div>

            <div className='flex w-full space-x-5 items-center'>

              <div className='flex items-center w-full space-x-3'>
                <label className="text-black w-[310px] font-semibold text-xl">Title or Short Description:</label>
                <input placeholder='Write your thoughts here...' name="productNo " id='productNo' type="number" className="px-3 py-2 w-full mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg transition-colors duration-200 ease-in-out" />
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
                <div className='w-full h-20 border-2 border-gray-600'></div>
            </div>

        </div>

      </div>
    </div>
  </div>
  )
}

export default PdfForms