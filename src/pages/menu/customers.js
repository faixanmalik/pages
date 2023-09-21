import { Menu, Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, React, useRef, useState } from 'react'
import { AiFillPhone, AiOutlineFilePdf, AiOutlineUnorderedList, AiOutlineUser } from 'react-icons/ai';
import { BiLinkAlt, BiPlusMedical, BiSolidHelpCircle, BiSolidUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { GrEdit } from 'react-icons/gr';
import { MdDateRange, MdEmail } from 'react-icons/md';


const Customer = () => {

  
  const [search, setSearch] = useState('')
  const [selectedIds, setSelectedIds] = useState([]);
  const [open, setOpen] = useState(false)

  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const cancelButtonRef = useRef(null)

  const handleChange = (e)=>{
    if(e.target.name === 'search'){
      setSearch(e.target.value);
    }
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function handleRowCheckboxChange(e, id) {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter(rowId => rowId !== id));
    }
  }

  let tableData = [
    {
      id: 4201,
      name: 'Walkin Customer',
      email: 'xyz@example.com',
      phoneNo:123456789,
      created: '25-08-2023',
      link: 'Customer Online Profile',
      balance: 100,
      credit: 50,
      totalInvoiced: 500,

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
    <div className='bg-[#f7f7f7] min-h-screen text-black px-28'>
    <div className='py-5'>
      <div className='flex flex-col space-y-4 items-center space-x-3'>

        <div className='flex items-center w-full '>

          <h1 className='text-3xl mr-10 font-semibold tracking-wide'>Customers</h1>
         

          <div className='flex w-full justify-end items-center space-x-5'>

            <Link href={'/menu/createCustomer'} className='flex p-[8px] rounded-md shadow-lg px-3 text-sm items-center font-medium gap-1 bg-green-600 text-white cursor-pointer'>
              <BiPlusMedical/>
              New Customer
            </Link>

            <button type="submit" className='flex p-[8px] rounded-md shadow-lg px-3 text-sm items-center font-medium gap-1 bg-gray-500 text-white cursor-pointer'>
              <AiOutlineUnorderedList/>
              Bulk Actions
            </button>

            <div className='items-center'>
              <select
                  id="productType"
                  name="productType"
                  className="px-3 py-2 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
              >
              <option value=''>Customer Modules</option>
            
              </select>
            </div>
            <BiSolidHelpCircle className='text-xl text-gray-500'/>

          </div>
        </div>

      </div>
      <div className="flex mt-5 space-x-3">
        <div className='flex w-full'>
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-600 rounded-l-md">
              <BsSearch className='text-lg mt-1'/>
          </span>
          <input placeholder="Search customers (50 characters max)..." value={search} onChange={handleChange} type="text" id="search" name='search' className="p-2 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-600  "  required/>
        </div>
        <div>
          <button type="submit" className='flex p-[8px] border border-gray-700 rounded-md shadow-lg px-3 text-sm items-center font-medium gap-1 bg-gray-50 text-gray-700 cursor-pointer'>
              <BsSearch className='text-lg'/>
              Search
          </button>
        </div> 


      </div>

      <div className='mt-10'>
        <div className="overflow-x-auto shadow-sm mt-2">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-white">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-blue-800">
                    Name/Business
                  </th>
                  <th scope="col" className="px-6 py-3 text-blue-800">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3 text-blue-800">
                    <span className='flex text-slate-600 flex-row-reverse -mt-4 -mr-4 w-28 float-right text-xs font-semibold shadow-lg p-1 px-3 bg-gray-100'>
                      {tableData.length} Customers
                    </span> Created
                  </th>
                </tr>
              </thead>

              <tbody>
                
                {tableData.map((item, index)=>{
                  return <tr key={index} className={`bg-${index % 2 === 0 ? 'gray-100' : 'white'} border-b`}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" onChange={e => handleRowCheckboxChange(e, item._id)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                  </td>
                  <td scope="row" className="px-6 group py-2 font-medium text-gray-900 whitespace-nowrap">
                      <Link href={''} className='flex items-center'>
                        <div className='mr-[7px] border border-gray-50 rounded-full visible group-hover:hidden'>
                          <BiSolidUser className='p-[3px] text-gray-600 text-2xl visible group-hover:hidden'/>
                        </div>

                          <div onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)} className='mr-[7px] border border-blue-600 rounded-full hidden group-hover:block hover:bg-green-600 '>
                            <FaSearch onClick={()=> {setOpen(true)}}  className='p-[5px]  text-gray-600 text-2xl hidden group-hover:block hover:text-white'/>
                          </div>
                          {isTooltipVisible && (<div id="tooltip-default" role="tooltip" class="absolute -mt-20 -ml-5 z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700">
                              More Info
                              <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>)}
                        {item.name}
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
                  <td className="p-2 px-6">
                      <span className='text-blue-800 hover:underline'>{item.email}</span>
                  </td>
                  <td className="py-2 px-6">
                      <span className='text-blue-800 hover:underline'>{item.phoneNo}</span>
                  </td>
                  <td className="px-6 py-2">
                      {item.created}
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

export default Customer