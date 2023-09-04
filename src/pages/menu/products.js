import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillArrowRightCircleFill, BsSearch } from 'react-icons/bs'

const Products = () => {

    let tableData = [
        {
            productName: 'Apple MacBook Pro 17',
            dateOfRegistration: 'Tomorrow',
            supplierName: 'Apple Store',
            monthOfWarrenty: 12,
            barcode: 'xxxxxxxxxx',
            price: 2999,
        },
        {
            productName: 'Microsoft Surface Pro',
            dateOfRegistration: 'Today',
            supplierName: 'Microsoft Store',
            monthOfWarrenty: 10,
            barcode: 'xxxxxxxxxx',
            price: 4599,
        },
        {
            productName: 'Magic Mouse 2',
            dateOfRegistration: 'Day After Tomorrow',
            supplierName: 'Magic Mouse Store',
            monthOfWarrenty: 11,
            barcode: 'xxxxxxxxxx',
            price: 499,
        },
        {
            productName: 'Apple MacBook Pro 17',
            dateOfRegistration: 'Tomorrow',
            supplierName: 'Apple Store',
            monthOfWarrenty: 12,
            barcode: 'xxxxxxxxxx',
            price: 2999,
        },
        {
            productName: 'Microsoft Surface Pro',
            dateOfRegistration: 'Today',
            supplierName: 'Microsoft Store',
            monthOfWarrenty: 10,
            barcode: 'xxxxxxxxxx',
            price: 4599,
        },
        {
            productName: 'Magic Mouse 2',
            dateOfRegistration: 'Day After Tomorrow',
            supplierName: 'Magic Mouse Store',
            monthOfWarrenty: 11,
            barcode: 'xxxxxxxxxx',
            price: 499,
        },
        {
            productName: 'Apple MacBook Pro 17',
            dateOfRegistration: 'Tomorrow',
            supplierName: 'Apple Store',
            monthOfWarrenty: 12,
            barcode: 'xxxxxxxxxx',
            price: 2999,
        },
        {
            productName: 'Microsoft Surface Pro',
            dateOfRegistration: 'Today',
            supplierName: 'Microsoft Store',
            monthOfWarrenty: 10,
            barcode: 'xxxxxxxxxx',
            price: 4599,
        },
        {
            productName: 'Magic Mouse 2',
            dateOfRegistration: 'Day After Tomorrow',
            supplierName: 'Magic Mouse Store',
            monthOfWarrenty: 11,
            barcode: 'xxxxxxxxxx',
            price: 499,
        },
    ]


    
  return (
    <div className='bg-[#f7f7f7] min-h-screen pb-1 px-20 2xl:px-40'>

        <div className='flex items-center px-10'>
    
            <div className='items-center pt-5 flex-col w-full'>

                <div className='flex font-semibold w-full text-sm px-5 items-center'>

                    <div className='flex items-center gap-2 w-1/2'>
                        <label className="font-semibold text-sm text-gray-600 pb-1">Product Name</label>
                        <select
                            id="productName"
                            name="productName"
                            className="px-3 py-2 mt-1 w-3/5 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                        >
                            <option value=''>select product</option>
                            {tableData.map((item,index)=>{
                                return <option key={index} value={item.productName}>{item.productName}</option>
                            })}
                        </select>
                    </div>
                    <div className='flex items-center gap-2 w-1/2'>
                        <label className="font-semibold text-sm text-gray-600 pb-1">Supplier Name</label>
                        <select
                            id="supplierName"
                            name="supplierName"
                            className="px-3 py-2 mt-1 w-3/5 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                        >
                            <option value=''>select supplier</option>
                            {tableData.map((item,index)=>{
                                return <option key={index} value={item.productName}>{item.productName}</option>
                            })}
                        </select>
                    </div>
                    
                </div>
                
                <div className='flex font-semibold text-sm px-5 items-center'>

                    <div className='flex items-center gap-2 w-10/12'>
                        <label className="font-semibold text-sm text-gray-600 pb-1">Date of registration</label>
                        <input name="dateOfRegistration" id='dateOfRegistration' type="date" className="px-3 py-2 mt-1 text-sm w-[200px] bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                    </div>

                    <div className='flex items-center gap-2 w-3/5'>
                        <label className="font-semibold text-sm text-gray-600 pb-1">Month of warrenty</label>
                        <input name="monthOfWarrenty" id='monthOfWarrenty' type="text" className="px-3 py-2 mt-1 text-sm ml-1 w-[110px] bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className='flex items-center gap-2 w-1/2'>
                        <label className="font-semibold text-sm text-gray-600 pb-1">Price</label>
                        <input name="price" id='price' type="text" className="px-3 py-2 mt-1 text-sm ml-1 w-[110px] bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                
            </div>

            <div className='mt-7 -ml-16'>
                <button type="submit" className='flex p-5 rounded-md px-5 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                    Start <BsFillArrowRightCircleFill className='text-sm mt-1'/>
                </button>
            </div>

        </div>

        

        {/* Table */}
        
        <div className="relative overflow-x-auto mt-10 px-5 min-h-screen">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Supplier Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date of registration
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Month of warrenty
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Barcode
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index)=>{
                        return <tr key={index} className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item.productName}
                        </th>
                        <td className="px-6 py-4">
                            {item.dateOfRegistration}
                        </td>
                        <td className="px-6 py-4">
                            {item.supplierName}
                        </td>
                        <td className="px-6 py-4">
                            {item.monthOfWarrenty}
                        </td>
                        <td className="px-6 py-4">
                            {item.barcode}
                        </td>
                        <td className="px-6 py-4">
                            ${item.price}
                        </td>
                    </tr>
                    })}
                    
                </tbody>
            </table>
        </div>


        <div className='flex justify-between items-center px-10 bg-gray-200 py-2'>
            <button type="submit" className='flex p-[8px] rounded-md px-5 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                Close <AiOutlineCloseCircle className='text-xl mt-1'/>
            </button>
            <div className='mr-20'>
                <h1 className='font-medium text-gray-900 whitespace-nowrap text-sm'>number of items: {tableData.length}</h1>
            </div>

        </div>

    </div>
  )
}

export default Products