import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const Products = () => {

    let tableData = [
        {
            productName: 'Apple MacBook Pro 17',
            supplierName: 'Apple Store',
            monthOfWarrenty: 12,
            price: 2999,
        },
        {
            productName: 'Microsoft Surface Pro',
            supplierName: 'Microsoft Store',
            monthOfWarrenty: 10,
            price: 4599,
        },
        {
            productName: 'Magic Mouse 2',
            supplierName: 'Magic Mouse Store',
            monthOfWarrenty: 11,
            price: 499,
        },
    ]
    
  return (
    <div className='bg-[#f7f7f7] min-h-screen'>

    
        <div className='items-center pt-5 space-y-3 flex-col'>

            <div className='flex gap-6 font-semibold w-full text-sm px-5 items-center'>

                <div className='flex items-center gap-2 w-full'>
                    <label className="font-semibold text-sm text-gray-600 pb-1">Product Name</label>
                    <input name="productName" id='productName' type="text" className="px-3 py-2 mt-1 text-sm ml-auto w-7/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>
                <div className='flex items-center gap-2 w-full'>
                    <label className="font-semibold text-sm text-gray-600 pb-1">Supplier Name</label>
                    <input name="supplierName" id='supplierName' type="text" className="px-3 py-2 mt-1 text-sm ml-auto w-7/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>
                <div className='flex items-center gap-2 w-full'>
                    <label className="font-semibold text-sm text-gray-600 pb-1">Date of registration</label>
                    <input name="dateOfRegistration" id='dateOfRegistration' type="date" className="px-3 py-2 mt-1 text-sm ml-auto w-7/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

            </div>
            <div className='flex gap-6 font-semibold w-full text-sm px-5 items-center'>

                <div className='flex items-center gap-2 w-full'>
                    <label className="font-semibold text-sm text-gray-600 pb-1">Month of warrenty</label>
                    <input name="monthOfWarrenty" id='monthOfWarrenty' type="text" className="px-3 py-2 mt-1 text-sm ml-auto w-7/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>
                <div className='flex items-center gap-2 w-full'>
                    <label className="font-semibold text-sm text-gray-600 pb-1">Price</label>
                    <input name="price" id='price' type="text" className="px-3 py-2 mt-1 text-sm ml-auto w-7/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                </div>

                <div className='flex items-center w-full'>
                    <button type="submit" className='flex p-[8px] rounded-md px-5 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                        <BsFillCheckCircleFill className='text-sm'/>Start
                    </button>
                </div>
                
            </div>
            
        </div>

        {/* Table */}
        
        <div class="relative overflow-x-auto mt-10 px-5">
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Supplier Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Month of warrenty
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index)=>{
                        return <tr key={index} class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item.productName}
                        </th>
                        <td class="px-6 py-4">
                            {item.supplierName}
                        </td>
                        <td class="px-6 py-4">
                            {item.monthOfWarrenty}
                        </td>
                        <td class="px-6 py-4">
                            ${item.price}
                        </td>
                    </tr>
                    })}
                    
                </tbody>
            </table>
        </div>







    </div>
  )
}

export default Products