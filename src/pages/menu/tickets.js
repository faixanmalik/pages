import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Fragment, React, useRef, useState } from 'react'
import { AiFillPhone, AiOutlineFilePdf, AiOutlineUnorderedList, AiTwotoneSetting } from 'react-icons/ai';
import { BiLinkAlt, BiPlusMedical, BiSolidHelpCircle, BiSolidPurchaseTag, BiSolidUser } from 'react-icons/bi';
import { BsAspectRatio, BsInfoCircle, BsInfoCircleFill } from 'react-icons/bs';
import { FaInfo, FaSearch, FaUser } from 'react-icons/fa';
import { FiExternalLink, FiFilter } from 'react-icons/fi';
import { GrEdit } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';
import { LuSettings2 } from 'react-icons/lu';
import { MdDateRange, MdEmail } from 'react-icons/md';

const Tickets = () => {

  const [search, setSearch] = useState('')
  const [selectedIds, setSelectedIds] = useState([]);

  const [isIdTooltipVisible, setIsIdTooltipVisible] = useState(false);
  const [isNameTooltipVisible, setIsNameTooltipVisible] = useState(false);
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const handleChange = (e)=>{
    if(e.target.name === 'search'){
      setSearch(e.target.value);
    }
  }

  function handleRowCheckboxChange(e, id) {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter(rowId => rowId !== id));
    }
  }

  let status = [
    'Resolved',
    'Not Resolved',
  ]

  let tableData = [
    {
      id: 4201,
      name: 'Walkin Customer',
      email: 'xyz@example.com',
      productNo: 123456789,
      phoneNo:123456789,
      subject: 'Ticket Title',
      status: 'In-Progress',
      created: '25-08-2023',
      lastUpdated:6,
      link: 'Customer Online Profile',
      desc: 'booooooooom this is text',
      balance: 100,
      credit: 50,
      totalInvoiced: 500,
      issue: 'Other'

    },
  ]

  let subMenu = [
    'Appointment',
    'Reminder',
    'Invoices',
    'Estimates',
    'Tickets',
    'Payments',
    'Customer Purchase',
    'Recurring Purchase'
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

              <Link href={'/menu/createTicket'} className='flex rounded-md p-[8px] shadow-lg px-3 text-sm items-center font-medium gap-1 bg-green-600 text-white cursor-pointer'>
                <BiPlusMedical/>
                New Ticket
              </Link>

              <button type="submit" className='flex rounded-md p-[8px] shadow-lg px-3 text-sm items-center font-medium gap-1 bg-gray-500 text-white cursor-pointer'>
                <AiOutlineUnorderedList/>
                Bulk Actions
              </button>

              <div className='border border-gray-300 shadow-lg px-3 py-[5px] bg-slate-50 rounded-md'>
                View
              </div>

              <BiSolidHelpCircle className='text-xl text-gray-500'/>

            </div>
          </div>

          
          <div className='flex items-center w-full justify-between'>

            <div className='flex items-center space-x-5'>

              <LuSettings2 className='text-xl'/>

              <div className='flex items-center space-x-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Status is Not</label>
                <select
                    id="statusIsNot"
                    name="statusIsNot"
                    className="px-3 py-2 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                  >
                    {status.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })}
                </select>
              </div>
              <div className='flex items-center space-x-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Status is</label>
                <select
                    id="statusIs"
                    name="statusIs"
                    className="px-3 py-2 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                  >
                    {status.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })}
                </select>
              </div>
              <div className='flex items-center space-x-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Issue is</label>
                <select
                    id="issueIs"
                    name="issueIs"
                    className="px-3 py-2 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                  >
                    {status.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })}
                </select>
              </div>

            </div>
            

            <div className='border mr-7 border-gray-300 shadow-lg px-3 py-[5px] bg-slate-50 rounded-md'>
              Apply
            </div>
          </div>



        
        </div>


        <div className='px-5 mt-8'>
          <div className='flex justify-between'>
            <button type="submit" className='flex text-sm items-center gap-2 border border-gray-300 shadow-lg px-3 py-[5px] bg-slate-100 rounded-md cursor-pointer'>
              <AiTwotoneSetting/>
              Customize
            </button>

            <div className='border border-gray-300 text-sm font-semibold shadow-lg p-1 px-3 bg-gray-200 rounded-md'>
              {tableData.length} TICKET
            </div>

          </div>


          <div className="overflow-x-auto shadow-sm mt-2">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-800">
                      Ticket No
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-800">
                      Product No
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-800">
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-800">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-800">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-800">
                      Last Updated
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-800">
                      Created
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-800">
                      Issue
                    </th>
                  </tr>
                </thead>

                <tbody>
                  
                  {tableData.map((item, index)=>{
                    return <tr key={index} className="bg-white border-b hover:bg-gray-50">
                    <td className="w-4 p-3">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" onChange={e => handleRowCheckboxChange(e, item._id)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      </div>
                    </td>
                    {/* <td scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        {item.id}
                    </td> */}
                    <td scope="row" className="group px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                      <Link href={''} className='flex items-center'>
                        <div className='mx-[7px] border border-gray-50 rounded-full visible group-hover:hidden'>
                          <BiSolidPurchaseTag className='p-[3px] text-gray-600 text-2xl visible group-hover:hidden'/>
                        </div>

                          <div onMouseEnter={() => setIsIdTooltipVisible(true)} onMouseLeave={() => setIsIdTooltipVisible(false)} className='mx-[7px] border border-blue-600 rounded-full hidden group-hover:block hover:bg-green-600 '>
                            <FaSearch onClick={()=> {setOpen(true)}}  className='p-[5px]  text-gray-600 text-2xl hidden group-hover:block hover:text-white'/>
                          </div>
                          {isIdTooltipVisible && (<div id="tooltip-default" role="tooltip" class="absolute -mt-20 -ml-5 z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700">
                              More Info
                              <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>)}
                        {item.id}
                      </Link>
                    </td>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl min-h-[400px]">


                                <div className="bg-white pb-4 pt-5 sm:p-6 sm:pb-4">
                                    
                                    <div className='mt-5 flex flex-col space-y-4 text-black'>

                                        <div className='flex items-center justify-between'>
                                          <div>
                                            <h1 className='font-semibold text-2xl'>{item.name}</h1>
                                          </div>
                                          <div className='flex space-x-5'>
                                            <FiExternalLink className='cursor-pointer text-lg text-gray-400'/>
                                            <ImCross onClick={()=>setOpen(false)} className='cursor-pointer text-lg text-gray-400'/>
                                          </div>
                                        </div>

                                        <div>
                                          <Menu as="div" className=" relative inline-block text-left">
                                            <div className='items-center flex'>

                                              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                <BiPlusMedical className='my-auto'/>
                                                  New
                                                  <ChevronDownIcon className="-mr-1 my-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                              </Menu.Button>
                                              <Menu.Button className="inline-flex  w-full justify-center gap-x-1.5 rounded-md bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                <GrEdit className='my-auto'/>
                                                  Edit
                                              </Menu.Button>

                                              <Menu.Button className="inline-flex ml-4 w-full justify-center gap-x-1.5 rounded-md bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                <AiOutlineFilePdf className='my-auto'/>
                                                <ChevronDownIcon className="-mr-1 my-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                              </Menu.Button>
                                            </div>

                                            <Transition
                                              as={Fragment}
                                              enter="transition ease-out duration-100"
                                              enterFrom="transform opacity-0 scale-95"
                                              enterTo="transform opacity-100 scale-100"
                                              leave="transition ease-in duration-75"
                                              leaveFrom="transform opacity-100 scale-100"
                                              leaveTo="transform opacity-0 scale-95"
                                            >
                                              <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                  {subMenu.map((item, index)=>{
                                                    return <Menu.Item key={index}>
                                                    {({ active }) => (
                                                      <a
                                                        href="#"
                                                        className={classNames(
                                                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                          'block px-4 py-1 text-sm'
                                                        )}
                                                      >
                                                        {item}
                                                      </a>
                                                    )}
                                                  </Menu.Item>
                                                  })}
                                                  
                                                </div>
                                              </Menu.Items>
                                            </Transition>
                                          </Menu>
                                        </div>

                                        <div className='flex justify-between w-8/12'>
                                          <div>
                                            <h1 className='font-normal text-md uppercase'>Balance</h1>
                                            <h1 className='font-semibold text-2xl'>${item.balance}.00</h1>
                                          </div>
                                          <div>
                                            <h1 className='font-normal text-md uppercase'>Credit</h1>
                                            <h1 className='font-semibold text-2xl'>${item.credit}.00</h1>
                                          </div>
                                          <div>
                                            <h1 className='font-normal text-md uppercase'>Total Invoiced</h1>
                                            <h1 className='font-semibold text-2xl'>${item.totalInvoiced}.00</h1>
                                          </div>
                                        </div>


                                        <div className='pt-7  text-sm'>
                                          <div className='flex space-x-2 items-center'>
                                            <BiSolidUser className='text-lg'/>
                                            <h1 className='uppercase font-semibold tracking-wide'>Customer Details</h1>
                                          </div>

                                          <div className='flex mt-3 w-full items-center'>

                                            <div className='flex space-x-2 w-1/2 items-center'>
                                              <MdEmail className='text-lg'/>
                                              <h1 className='font-medium'>Email</h1>
                                            </div>
                                            <div className='text-left'>{item.email}</div>

                                          </div>


                                          <div className='flex mt-3 w-full items-center'>

                                            <div className='flex space-x-2 w-1/2 items-center'>
                                              <AiFillPhone className='text-lg'/>
                                              <h1 className='font-medium'>Phone</h1>
                                            </div>
                                            <div className='text-blue-400 text-left'>{item.phoneNo}</div>

                                          </div>

                                          <div className='flex mt-3 w-full items-center'>

                                            <div className='flex space-x-2 w-1/2 items-center'>
                                              <BiLinkAlt className='text-lg'/>
                                              <h1 className='font-medium'>Links</h1>
                                            </div>
                                            <div className='text-blue-400 text-left'>{item.link}</div>

                                          </div>

                                          <div className='flex mt-3 w-full items-center'>

                                            <div className='flex space-x-2 w-1/2 items-center'>
                                              <MdDateRange className='text-lg'/>
                                              <h1 className='font-medium'>Created</h1>
                                            </div>
                                            <div className='text-left'>{item.created}</div>

                                          </div>


                                        </div>
                                        

                                    </div>
                                </div>

                                
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                      </Dialog>
                    </Transition.Root>
                    <td scope="row" className="px-6 py-3 font-medium text-blue-700 whitespace-nowrap">
                        {item.productNo}
                    </td>
                    <td scope="row" className="group px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        
                        <Link href={''} className='flex items-center'>
                        
                          <div className='mr-[7px] border border-gray-50 rounded-full visible group-hover:hidden'>
                            <FaUser className='p-[3px] text-gray-600 text-2xl visible group-hover:hidden'/>
                          </div>

                          <div onMouseEnter={() => setIsNameTooltipVisible(true)} onMouseLeave={() => setIsNameTooltipVisible(false)} className='mr-[7px] border border-blue-600 rounded-full hidden group-hover:block hover:bg-green-600 '>
                            <FaSearch onClick={()=> {setOpen(true)}}  className='p-[5px]  text-gray-600 text-2xl hidden group-hover:block hover:text-white'/>
                          </div>
                          {isNameTooltipVisible && (<div id="tooltip-default" role="tooltip" class="absolute -mt-20 -ml-5 z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700">
                              More Info
                              <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>)}
                          {item.name}
                      </Link>
                    </td>
                    <td className="px-6 py-3 flex items-center">
                      {item.subject}
                      <span className='group ml-1 cursor-pointer'>
                        <FaInfo className='text-md' id="info-icon" />
                        <div
                          id="tooltip-default"
                          data-tooltip
                          role="tooltip"
                          class="hidden group-hover:inline-block absolute w-40 -mt-20 -ml-20 z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700"
                        >
                          {item.desc}
                          <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                      </span>
                    </td>
                    <td className="p-3">
                        <select
                          id="statusIs"
                          name="statusIs"
                          className="border border-gray-200 px-2 rounded-md py-1 bg-gray-50 transition-colors duration-200 ease-in-out"
                        >
                          {status.map((item,index)=>{
                            return <option key={index} value={item}>{item}</option>
                          })}
                      </select>
                    </td>
                    <td className="py-3">
                        <span className='bg-red-600 w-10/12 text-white font-semibold flex items-center justify-center text-center gap-2 py-1 rounded-md'><BsInfoCircleFill className='text-md'/> {item.lastUpdated} days</span>
                    </td>
                    <td className="px-6 py-3">
                        {item.created}
                    </td>
                    <td className="p-3">
                        <span className='border border-gray-200 rounded-md px-3 py-1 bg-gray-50'>{item.issue}</span>
                    </td>
                  </tr>})}

                </tbody>

              </table>
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default Tickets