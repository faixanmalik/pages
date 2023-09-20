import {React, Fragment, useRef, useState} from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillArrowRightCircleFill, BsSearch } from 'react-icons/bs'
import { Dialog, Transition } from '@headlessui/react'

const Products = () => {

    let tableData = [
        {
            productName: 'Apple',
            subProduct: 'Apple MacBook Pro 17',
            supplierName: 'John Doe',
            manufacturer: 'Apple Store',
            dateOfRegistration: 'Tomorrow',
            monthOfWarrenty: 12,
            barcode: 'xxxxxxxxxx',
            price: 2999,
        },
        {
            productName: 'Microsoft',
            subProduct: 'Microsoft Surface Pro',
            dateOfRegistration: 'Today',
            supplierName: 'John Smith',
            manufacturer: 'Microsoft Store',
            monthOfWarrenty: 10,
            barcode: 'xxxxxxxxxx',
            price: 4599,
        },
        {
            productName: 'Magic',
            subProduct: 'Magic Mouse 2',
            dateOfRegistration: 'Day After Tomorrow',
            supplierName: 'Michel Corporation',
            manufacturer: 'Magic Store',
            monthOfWarrenty: 11,
            barcode: 'xxxxxxxxxx',
            price: 499,
        },
        {
            productName: 'Apple',
            subProduct: 'Apple MacBook Pro 17',
            supplierName: 'John Doe',
            manufacturer: 'Apple Store',
            dateOfRegistration: 'Tomorrow',
            monthOfWarrenty: 12,
            barcode: 'xxxxxxxxxx',
            price: 2999,
        },
        {
            productName: 'Microsoft',
            subProduct: 'Microsoft Surface Pro',
            dateOfRegistration: 'Today',
            supplierName: 'John Smith',
            manufacturer: 'Microsoft Store',
            monthOfWarrenty: 10,
            barcode: 'xxxxxxxxxx',
            price: 4599,
        },
        {
            productName: 'Magic',
            subProduct: 'Magic Mouse 2',
            dateOfRegistration: 'Day After Tomorrow',
            supplierName: 'Michel Corporation',
            manufacturer: 'Magic Store',
            monthOfWarrenty: 11,
            barcode: 'xxxxxxxxxx',
            price: 499,
        },
        {
            productName: 'Apple',
            subProduct: 'Apple MacBook Pro 17',
            supplierName: 'John Doe',
            manufacturer: 'Apple Store',
            dateOfRegistration: 'Tomorrow',
            monthOfWarrenty: 12,
            barcode: 'xxxxxxxxxx',
            price: 2999,
        },
        {
            productName: 'Microsoft',
            subProduct: 'Microsoft Surface Pro',
            dateOfRegistration: 'Today',
            supplierName: 'John Smith',
            manufacturer: 'Microsoft Store',
            monthOfWarrenty: 10,
            barcode: 'xxxxxxxxxx',
            price: 4599,
        },
        {
            productName: 'Magic',
            subProduct: 'Magic Mouse 2',
            dateOfRegistration: 'Day After Tomorrow',
            supplierName: 'Michel Corporation',
            manufacturer: 'Magic Store',
            monthOfWarrenty: 11,
            barcode: 'xxxxxxxxxx',
            price: 499,
        },
    ]

    const cancelButtonRef = useRef(null)
    const [search, setSearch] = useState('')
    const [data, setData] = useState(tableData)
    const [openProductName, setOpenProductName] = useState(false)
    const [openSubProduct, setOpenSubProduct] = useState(false)
    const [openManufacturer, setOpenManufacturer] = useState(false)
    const [openSupplier, setOpenSupplier] = useState(false)

    const handleChange = (e)=>{
        if(e.target.name === 'search'){
          setSearch(e.target.value);
        }
    }

    const filteredProductName = data.filter((item)=>{
        return item.productName.toLowerCase().includes(search.toLowerCase());
    });

    const filteredSubProductName = data.filter((item)=>{
        return item.subProduct.toLowerCase().includes(search.toLowerCase());
    });

    const filteredManufacturer = data.filter((item)=>{
        return item.manufacturer.toLowerCase().includes(search.toLowerCase());
    });

    const filteredSupplier = data.filter((item)=>{
        return item.supplierName.toLowerCase().includes(search.toLowerCase());
    });

    let currencyList = [
        '$',    // United States Dollar (USD)
        '€',    // Euro (EUR)
        '₪',    // Israeli New Shekel (ILS)
    ];

    
  return (
    <div className='bg-[#f7f7f7] min-h-screen pb-1 px-20 2xl:px-40'>

        <div className='flex space-x-5 px-10 items-center'>
    
            <div className='flex flex-col w-full space-y-4 mt-5 justify-between'>

                <div className='flex space-x-4'>

                    <div className='flex flex-col w-1/2'>
                        <label className="font-semibold w-52 text-sm text-gray-600 pb-1">Product Name</label>
                        <button onClick={()=> {setOpenProductName(true),setSearch('')}} type="submit" className='py-2 text-left pl-2 mt-1 text-sm bg-white bg-opacity-50 resize-none text-gray-400 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out'>
                            Product Name
                        </button>
                        
                        <Transition.Root show={openProductName} as={Fragment}>
                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenProductName}>
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
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs">


                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                </svg>
                                            </div>
                                            <input value={search} onChange={handleChange} type="text" id="search" name='search' className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Product..." required/>
                                        </div>
                                        <div className='mt-5'>
                                        
                                            {filteredProductName.map((item,index)=>{
                                                return <option key={index} value={item.productName} className={`text-black p-1 flex flex-col bg-${index % 2 === 0 ? 'gray-100' : 'white'} `}>{item.productName}</option>
                                            })}
                                            
                                            <div className='flex mt-3 space-x-3 items-center'>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>New</button>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>Update</button>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>Delete</button>
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

                    <div className='flex flex-col w-1/2'>
                        <label className="font-semibold w-52 text-sm text-gray-600 pb-1">Sub Product</label>
                        <button onClick={()=> {setOpenSubProduct(true), setSearch('')}} type="submit" className='py-2 text-left pl-2 mt-1 text-sm bg-white bg-opacity-50 resize-none text-gray-400 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out'>
                            Sub Product
                        </button>
                        
                        <Transition.Root show={openSubProduct} as={Fragment}>
                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenSubProduct}>
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
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs">


                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                </svg>
                                            </div>
                                            <input value={search} onChange={handleChange} type="text" id="search" name='search' className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Sub Product..." required/>
                                        </div>
                                        <div className='mt-5'>
                                        
                                            {filteredSubProductName.map((item,index)=>{
                                                return <option key={index} value={item.subProduct} className={`text-black p-1 flex flex-col bg-${index % 2 === 0 ? 'gray-100' : 'white'} `}>{item.subProduct}</option>
                                            })}
                                            
                                            <div className='flex mt-3 space-x-3 items-center'>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>New</button>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>Update</button>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>Delete</button>
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

                    <div className='flex flex-col w-1/2'>
                        <label className="font-semibold w-52 text-sm text-gray-600 pb-1">Manufacturer</label>
                        <button onClick={()=> {setOpenManufacturer(true), setSearch('')}} type="submit" className='py-2 text-left pl-2 mt-1 text-sm bg-white bg-opacity-50 resize-none text-gray-400 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out'>
                            Manufacturer
                        </button>
                        
                        <Transition.Root show={openManufacturer} as={Fragment}>
                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenManufacturer}>
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
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs">


                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                </svg>
                                            </div>
                                            <input value={search} onChange={handleChange} type="text" id="search" name='search' className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Manufacturer..." required/>
                                        </div>
                                        <div className='mt-5'>
                                        
                                            {filteredManufacturer.map((item,index)=>{
                                                return <option key={index} value={item.manufacturer} className={`text-black p-1 flex flex-col bg-${index % 2 === 0 ? 'gray-100' : 'white'} `}>{item.manufacturer}</option>
                                            })}
                                            
                                            <div className='flex mt-3 space-x-3 items-center'>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>New</button>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>Update</button>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>Delete</button>
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

                    <div className='flex flex-col w-1/2'>
                        <label className="font-semibold w-52 text-sm text-gray-600 pb-1">Supplier</label>
                        <button onClick={()=> {setOpenSupplier(true), setSearch('')}} type="submit" className='py-2 text-left pl-2 mt-1 text-sm bg-white bg-opacity-50 resize-none text-gray-400 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out'>
                            Supplier
                        </button>
                        
                        <Transition.Root show={openSupplier} as={Fragment}>
                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenSupplier}>
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
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs">


                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                </svg>
                                            </div>
                                            <input value={search} onChange={handleChange} type="text" id="search" name='search' className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Supplier..." required/>
                                        </div>
                                        <div className='mt-5'>
                                        
                                            {filteredSupplier.map((item,index)=>{
                                                return <option key={index} value={item.supplierName} className={`text-black p-1 flex flex-col bg-${index % 2 === 0 ? 'gray-100' : 'white'} `}>{item.supplierName}</option>
                                            })}
                                            
                                            <div className='flex mt-3 space-x-3 items-center'>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>New</button>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>Update</button>
                                                <button type="submit" className=' py-1 mt-3 rounded-xl px-4 text-black border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white cursor-pointer'>Delete</button>
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
                <div className='flex w-9/12 items-center space-x-4'>

                    <div className='flex flex-col w-1/4'>
                        <label className="font-semibold text-sm text-left text-gray-600 pb-1">Date of registration</label>
                        <input name="dateOfRegistration" id='dateOfRegistration' type="date" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className='flex flex-col w-1/6'>
                        <label className="font-semibold text-sm text-left text-gray-600 pb-1">Month of warrenty</label>
                        <input placeholder='18' name="monthOfWarrenty" id='monthOfWarrenty' type="number" className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className='flex flex-col w-1/4'>
                        <label className="font-semibold text-sm text-left text-gray-600 pb-1">Price</label>
                        <div className='flex space-x-4'>
                            <input placeholder='9999' name="price" id='price' type="number" className="px-3 py-2 w-1/2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                            <select
                                id="productType"
                                name="productType"
                                className="px-3 py-2 mt-1 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                            >
                            {currencyList.map((item,index)=>{
                                return <option key={index} value={item}>{item}</option>
                            })}
                            </select>

                        </div>
                        
                        
                    </div>
                    <div className='items-baseline mt-2 w-1/4'>
                        <button type="submit" className='flex py-2 rounded-md px-6 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                            Start <BsFillArrowRightCircleFill className='text-sm mt-1'/>
                        </button>
                    </div>


                </div> 

            </div>
                
            

            {/* <div className='mt-7 -ml-16'>
                <button type="submit" className='flex p-5 rounded-md px-5 items-center gap-2 bg-[#ee8e00] text-white cursor-pointer'>
                    Start <BsFillArrowRightCircleFill className='text-sm mt-1'/>
                </button>
            </div> */}

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