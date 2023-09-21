import Link from 'next/link';
import { React, useState } from 'react'
import { AiOutlineUnorderedList, AiTwotoneSetting } from 'react-icons/ai';
import { BiPlusMedical, BiSolidHelpCircle } from 'react-icons/bi';
import { BsAspectRatio, BsInfoCircle, BsInfoCircleFill } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { LuSettings2 } from 'react-icons/lu';

const Tickets = () => {

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
      customer: 'Walkin Customer',
      productNo: 123456789,
      subject: 'Ticket Title',
      status: 'In-Progress',
      lastUpdated:6,
      created: '25-08-2023',
      issue: 'Other'
    },
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


        <div className='px-5 mt-5'>
          <div className='flex justify-between'>
            <button type="submit" className='flex text-sm items-center gap-2 border border-gray-300 shadow-lg px-3 py-[5px] bg-slate-100 rounded-md cursor-pointer'>
              <AiTwotoneSetting/>
              Customize
            </button>

            <div className='border border-gray-300 text-sm font-semibold shadow-lg p-1 px-3 bg-gray-200 rounded-md'>
              {tableData.length} TICKETS
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
                    <td scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        {item.id}
                    </td>
                    <td scope="row" className="px-6 py-3 font-medium text-blue-700 whitespace-nowrap">
                        {item.productNo}
                    </td>
                    <td scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        {item.customer}
                    </td>
                    <td className="px-6 py-3">
                        {item.subject}
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