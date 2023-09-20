import Link from 'next/link';
import { React, useState } from 'react'
import { AiOutlineUnorderedList, AiOutlineUser, AiTwotoneSetting } from 'react-icons/ai';
import { BiPlusMedical, BiSolidHelpCircle, BiSolidUser } from 'react-icons/bi';
import { BsAspectRatio, BsInfoCircle, BsInfoCircleFill, BsSearch } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { LuSettings2 } from 'react-icons/lu';

import { Tooltip, Button } from "@material-tailwind/react";


const Customer = () => {

  
  const [search, setSearch] = useState('')
  const [selectedIds, setSelectedIds] = useState([]);

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
      contacts: 0,
      email: 'xyz@example.com',
      phoneNo:123456789,
      created: '25-08-2023',
    },
  ]

  return (
    <div className='bg-[#f7f7f7] min-h-screen text-black px-20'>
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
        <div className='flex justify-end'>
          <div className='border border-gray-300 text-sm font-semibold shadow-lg p-1 px-3 bg-gray-200 rounded-md'>
            {tableData.length} Customers
          </div>
        </div>


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
                  <th scope="col" className="px-6 py-3">
                    Contacts
                  </th>
                  <th scope="col" className="px-6 py-3 text-blue-800">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3 text-blue-800">
                    Created
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
                      <Link className='flex items-center' href={'/'}>
                        <div className='mx-[7px] border border-gray-50 rounded-full visible group-hover:hidden'>
                          <BiSolidUser className='p-[3px] text-gray-600 text-2xl visible group-hover:hidden'/>
                        </div>
                        <div className='group mx-[7px] border border-blue-600 rounded-full hidden group-hover:block hover:bg-green-600 '>
                          <FaSearch className='p-[5px]  text-gray-600 text-2xl hidden group-hover:block hover:text-white'/>
                        </div>
                        {item.name}
                      </Link>
                  </td>
                  <td className="px-6 py-2">
                      {item.contacts}
                  </td>
                  <td className="p-2">
                      <span className='text-blue-800 hover:underline'>{item.email}</span>
                  </td>
                  <td className="py-2">
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