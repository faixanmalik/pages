import {BsCameraFill, BsFillCheckCircleFill} from 'react-icons/bs'

import { React, Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { MdEmail, MdOutlineNumbers } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { BiBuilding, BiSolidUser } from 'react-icons/bi'
import { LuCalendarDays } from 'react-icons/lu'

const CreateTicket = () => {

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
        <div className='p-5'>
          {/* <h1 className='text-gray-600 font-semibold'>Basic Info</h1> */}
          <div className='w-full space-y-3 items-center mt-10'>

            <div className='w-full space-y-3 items-center'>

              <div className='flex my-6 justify-between'>

                <div className='flex flex-col -mt-4 w-[130px]'>
                  <label className="font-bold text-sm text-gray-600 pb-1">Auto Numerator</label>
                  <input readOnly placeholder='12345' name="autoNumerator" id='autoNumerator' type="number" className="cursor-not-allowed placeholder:font-bold px-3 py-2 mt-1 mb-4 text-sm bg-slate-100 bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>


                <div className='flex flex-col'>
                  <div className='flex flex-col'>
                    <div className='flex space-x-3'>
                      <input type="date" name="date" id="date" className='px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                      <input type="time" name="time" id="time" className='px-3 py-2 mt-1 w-2/5 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out' />
                    </div>
                  </div>

                </div>
              </div>


              <div className='flex space-x-5 justify-between'>

                <div className="flex flex-col w-[180px]">
                  <label className="font-semibold text-sm text-left text-gray-600 pb-2">Product Number</label>
                  <div className='flex'>
                    <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                        <MdOutlineNumbers className='text-lg'/>
                    </span>
                    <input placeholder='Product number' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>

                <div className='flex flex-col w-[170px]'>
                  <label className="font-semibold w-52 text-sm text-gray-600 pb-2">Customer Phone No</label>
                  <div className='flex'>
                    <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                        <AiFillPhone className='text-lg'/>
                    </span>
                    <button onClick={()=> setOpenCustomerPhone(true)} type="submit" className='px-3 py-[6px] w-full text-left text-sm bg-white bg-opacity-50 resize-none text-gray-400 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-lg  transition-colors duration-200 ease-in-out'>
                      123456789
                    </button>
                  </div>
                  
                  
                  <Transition.Root show={openCustomerPhone} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenCustomerPhone}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>

                      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">


                              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input value={search} onChange={handleChange} type="text" id="search" name='search' className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Customer..." required/>
                                </div>
                                <div>
                                  <ul className='flex flex-col space-y-3 mt-5'>
                                    {filteredData.map((item,index)=>{
                                      return <li key={index} value={item} className='text-black ml-2'>{item.name}</li>
                                    })}
                                  </ul>
                                </div>
                              </div>

                             
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>

                </div>

                <div className='flex flex-col w-[140px]'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-2">First Name</label>
                  <div className='flex'>
                    <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                        <BiSolidUser className='text-lg'/>
                    </span>
                    <input placeholder='John' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>

                <div className='flex flex-col w-[140px]'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-2">Last Name</label>
                  <div className='flex'>
                    <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                        <BiSolidUser className='text-lg'/>
                    </span>
                    <input placeholder='Doe' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>

                <div className='flex flex-col w-[150px]'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-2">Comapny Name</label>
                  <div className='flex'>
                    <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                        <BiBuilding className='text-lg'/>
                    </span>
                    <input placeholder='John pvt.ltd' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>

                <div className='flex flex-col w-1/6'>
                  <label className="font-semibold text-sm text-left text-gray-600 pb-2">Email</label>
                  <div className='flex'>
                    <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                        <MdEmail className='text-lg'/>
                    </span>
                    <input placeholder='abc@example.com' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>

              </div>

              


              <div className='flex w-10/12 py-3 space-x-5 items-center'>

              
                <div className='flex flex-col w-1/3'>
                  <label className="font-semibold w-20 text-sm text-gray-600 pb-2">Techantion</label>
                  <div className='flex'>
                    <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                        <BiSolidUser className='text-lg'/>
                    </span>
                    <input placeholder='John Doe' type="text" id="website-admin" className="px-3 py-[6px] w-full text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>

                <div className='flex flex-col w-1/3'>
                  <label className="font-semibold text-sm text-gray-600 pb-2">Warrenty</label>
                  <div className='flex'>
                    <span className="inline-flex items-center px-2 py-[6px] text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-400 rounded-l-md">
                        <LuCalendarDays className='text-lg'/>
                    </span>
                    <input readOnly placeholder='warrenty' type="text" id="website-admin" className="cursor-not-allowed px-3 py-[6px] w-full text-sm bg-slate-100 bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-400 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-r-md transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>
                

              </div>
            </div>

            <div className='flex py-3 items-center space-x-5 justify-between'>

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
              <textarea rows={6} placeholder='write the description of problem' name="desc " id='desc' type="text" className="px-3 w-full py-2 mt-1 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
            </div>


            

            <div className='flex space-x-3 justify-between items-center'>
              <div className='flex space-x-3 items-center'>
                <BsCameraFill className='text-6xl text-black'/>
                <BsCameraFill className='text-6xl text-black'/>
                <BsCameraFill className='text-6xl text-black'/>
              </div>
              <div className='flex items-center ml-auto'>
            
                  <button type="submit" onClick={()=>setOpen(true)} className='flex p-[8px] rounded-md px-3 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                    <BsFillCheckCircleFill className='text-sm'/>
                      Create Ticket
                  </button>

                  <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>

                      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-end p-4 sm:p-0">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:mb-20 sm:mr-24 sm:w-full sm:max-w-[250px]">
                              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                  
                                  <div className="flex flex-col w-full space-y-4 mt-3 text-center sm:mt-0 sm:text-left">
                                    <button type="submit" className='w-full flex p-[8px] rounded-md px-3 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                                      <BsFillCheckCircleFill className='text-xs'/>
                                        No Print
                                    </button>
                                    <button type="submit" className='w-full flex p-[8px] rounded-md px-3 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                                      <BsFillCheckCircleFill className='text-xs'/>
                                        Print Techantion copy
                                    </button>
                                    <button type="submit" className='w-full text-start flex p-[8px] rounded-md px-3 items-center bg-[#ee8e00] text-white cursor-pointer'>
                                      <BsFillCheckCircleFill className='text-xl mr-2'/>
                                        Print Techantion & customer copy
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket