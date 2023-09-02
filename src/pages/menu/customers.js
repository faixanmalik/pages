import React from 'react'

import {BsFillArrowRightCircleFill, BsFillCheckCircleFill, BsFillInfoCircleFill} from 'react-icons/bs'
import {BiSolidBusiness, BiSolidUser} from 'react-icons/bi'
import {TbHelpHexagonFilled} from 'react-icons/tb'
import { FaPlus } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'

const Customer = () => {

  let fields = [
    {
      name: 'Customer info',
    },
    {
      name: 'Custom Fields',
    },
  ]
  let headerText = 'New Customer';

  const mainCountryCodes = [
    '+1',   // United States
    '+1',   // Canada
    '+44',  // United Kingdom
    '+61',  // Australia
    '+49',  // Germany
    '+33',  // France
    '+91',  // India
    '+86',  // China
    '+81',  // Japan
    '+82',  // South Korea
    '+92',  // Pakistan
    '+7',   // Russia
    '+55',  // Brazil
    '+52',  // Mexico
    '+34',  // Spain
    '+39',  // Italy
    '+31',  // Netherlands
    '+41',  // Switzerland
    '+46',  // Sweden
    '+47',  // Norway
    '+358', // Finland
    '+65',  // Singapore
    '+64',  // New Zealand
    '+971', // United Arab Emirates
    '+966', // Saudi Arabia
    '+20',  // Egypt
    '+27',  // South Africa
  ];

  let referedBy = [
      'Person 1',
      'Person 2',
      'Person 3',
      'Person 4',
      'Person 5'
  ]


  return (
    <div className='bg-[#f7f7f7]'>

      <div className='flex items-center'>
        <div className='pl-5 p-[20px] flex flex-1 gap-6 items-center'>
          <h1 className='text-[#8F8F8F] text-xl font-semibold'>{headerText}</h1>
        </div>

        <div className='flex gap-6 font-semibold text-sm mr-5 items-center'>

          <button type="submit" className='flex p-[8px] px-3 items-center gap-1 bg-[#ee8e00] text-white cursor-pointer'>
            <BsFillCheckCircleFill className='text-sm'/>
            <h1 className=''>Create Customer</h1>
          </button>

          <button type="submit" className='flex p-[8px] px-3 items-center gap-1 bg-[#ee8e00] text-white cursor-pointer'>
            <h1 className=''>Create Customer and Ticket</h1>
          </button>


          <div className='flex items-center'>

            <button className='text-[#8F8F8F] hover:text-white border border-gray-500 px-3 py-1 cursor-pointer'>Cancel</button>
            <button className='text-[#8F8F8F] hover:text-white border border-gray-500 px-3 py-1 cursor-pointer'>Manage Custom Fields</button>

          </div>
          <TbHelpHexagonFilled className='text-xl text-[#696969]'/>
          
        </div>
      </div>

      <div className='bg-white text-[#8F8F8F] min-h-screen mx-4 rounded-md'>

        <div className='flex gap-2 pt-3 pl-3 pb-1 border-b-2 border-gray-500'>
          {fields.map((item, index)=>{
            return <button key={index} className='text-white bg-[#8F8F8F] px-3 py-2 text-sm rounded-md'>{item.name}</button>
          })}
        </div>

          {/* Customer Info */}
        <div className='px-5 py-5 border-b border-gray-500'>
          <h1 className='text-gray-600 font-semibold'>Basic Info</h1>
          <div className='flex w-full items-center gap-7'>
            {/* Right Section */}
            <div className='w-full items-center'>

              <div className='flex items-center gap-2'>
                <BiSolidUser className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">First Name</label>
                <input name="firstName" id='firstName' type="text" className="px-3 py-2 mt-1 ml-auto w-9/12 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>

              <div className='flex items-center gap-2'>
                <BiSolidUser className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">Last Name</label>
                <input name="lastName" id='lastName' type="text" className="px-3 py-2 mt-1 mb-4 text-sm ml-auto w-9/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <BiSolidBusiness className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">Business Name</label>
                <input name="businessName" id='businessName' type="text" className="px-3 py-2 mt-1 mb-4 text-sm ml-auto w-9/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <MdEmail className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">Email</label>
                <input name="email" id='email' type="email" className="px-3 py-2 mt-1 mb-4 text-sm ml-auto w-9/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <AiFillPhone className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">Phone</label>
                <div className='flex items-center w-full justify-end space-x-3'>
                  <select
                    id="countryCode"
                    name="countryCode"
                    className="px-3 py-2 mt-1 mb-4 w-[100px] text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                  >
                    {mainCountryCodes.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })}
                  </select>
                  <input name="phoneNo" id='phoneNo' type="number" className="w-[325px] px-3 py-2 mt-1 mb-4 text-sm  bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />

                </div>
              </div>
              <div className='flex group justify-end'>
                <button className='text-[#8F8F8F] flex gap-2 font-semibold items-center group-hover:text-white group-hover:bg-[#ee8e00] group-hover:border-none border border-gray-500 px-3 py-1 cursor-pointer'><FaPlus className='text-gray-600 group-hover:text-white group-hover:bg-[#ee8e00]'/> Add New Number</button>
              </div>

            </div>


            {/* Left Section */}
            <div className='w-full items-center'>

              <div className='flex items-center gap-2'>
                <FaLocationDot className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">Address Line 1</label>
                <input name="addressLine1" id='addressLine1' type="text" placeholder='123 Main Street Apt 203' className="px-3 py-2 mt-1 ml-auto w-9/12 mb-4 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>

              <div className='flex items-center gap-2'>
                <FaLocationDot className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">Address Line 2</label>
                <input name="addressLine2" id='addressLine2' type="text" placeholder='New York City New York 10001 United States' className="px-3 py-2 mt-1 mb-4 text-sm ml-auto w-9/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <FaLocationDot className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">City</label>
                <input name="city" id='city' type="text" className="px-3 py-2 mt-1 mb-4 text-sm ml-auto w-9/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <FaLocationDot className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">State/Country</label>
                <input name="stateOrCountry" id='stateOrCountry' type="text" className="px-3 py-2 mt-1 mb-4 text-sm ml-auto w-9/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <FaLocationDot className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">Zip/Postal Code</label>
                <input name="zipCode" id='zipCode' type="number" className="px-3 py-2 mt-1 text-sm ml-auto w-9/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>

              <div className='group flex justify-end my-3'>
                <button className='text-[#8F8F8F] flex gap-2 font-semibold items-center group-hover:text-white group-hover:bg-[#ee8e00] group-hover:border-none border border-gray-500 px-3 py-1 cursor-pointer'><FaPlus className='text-gray-600 group-hover:text-white group-hover:bg-[#ee8e00]'/> Add Another Site/Address</button>
              </div>

              <div className='flex items-center gap-2'>
                <BsFillArrowRightCircleFill className='text-xl text-gray-600'/>
                <label className="font-semibold text-sm text-gray-600 pb-1">Refered By</label>
                <select
                  id="referedBy"
                  name="referedBy"
                  className="px-3 py-2 mt-1 mb-4 ml-auto w-9/12 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out"
                >
                  {referedBy.map((item,index)=>{
                    <option value={''}>select refered by</option>
                    return <option key={index} value={item}>{item}</option>
                  })}
                </select>

              </div>

            </div>

          </div>
        </div>


        {/* Customer Settings */}
        <div className='px-5 py-5 border-b border-gray-500'>
          <h1 className='text-gray-600 font-semibold'>Customer Settings</h1>
          <div className='flex w-full items-center gap-7 mt-6'>
            {/* Right Section */}
            <div className='w-full space-y-3 items-center mb-auto mt-4'>

              <div className='flex items-center gap-2'>
                <label className="font-semibold flex gap-2 text-sm text-gray-600 pb-1">Enable Portal User <BsFillInfoCircleFill className='text-xl text-gray-600'/></label>
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-12 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              </div>

              <div className='flex items-center gap-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Tags</label>
                <input name="lastName" id='lastName' type="text" className="px-3 py-2 mt-1 mb-4 text-sm ml-auto w-8/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>

            </div>


            {/* Left Section */}
            <div className='w-full space-y-3 items-center mt-3'>

              <div className='flex items-center gap-2'>
                <label className="font-semibold flex gap-2 text-sm text-gray-600 pb-1">SMS Service Enabled</label>
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-auto mr-[275px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              </div>
              <div className='flex items-center gap-2'>
                <label className="font-semibold flex gap-2 text-sm text-gray-600 pb-1">Receive Billing Emails</label>
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-auto mr-[275px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              </div>
              <div className='flex items-center gap-2'>
                <label className="font-semibold flex gap-2 text-sm text-gray-600 pb-1">Receive Marketings Emails</label>
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-auto mr-[275px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              </div>
              <div className='flex items-center gap-2'>
                <label className="font-semibold flex gap-2 text-sm text-gray-600 pb-1">Receive Reports Emails</label>
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-auto mr-[275px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              </div>
              <div className='flex items-center gap-2'>
                <label className="font-semibold flex gap-2 text-sm text-gray-600 pb-1">No Email - Of Any Kind</label>
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-auto mr-[275px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              </div>

              


              <div className='flex items-center gap-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Additional Notification Email Addresses</label>
                <input name="stateOrCountry" id='stateOrCountry' type="text" placeholder='Email Addressses (comma separated)' className="px-3 py-2 mt-1 text-sm ml-auto w-6/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Additional Invoice CC Email Addresses</label>
                <input name="zipCode" id='zipCode' type="number" placeholder='Email Addressses (comma separated)' className="px-3 py-2 mt-1 text-sm ml-auto w-6/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Additional Ticket Matching Email Addresses</label>
                <input name="zipCode" id='zipCode' type="number" placeholder='Email Addressses (comma separated)' className="px-3 py-2 mt-1 text-sm ml-auto w-6/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
                
              </div>


              <div className='flex items-center gap-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Default Estimate Template</label>
                <input name="zipCode" id='zipCode' type="number" className="px-3 py-2 mt-1 text-sm ml-auto w-6/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Default Ticket Template</label>
                <input name="zipCode" id='zipCode' type="number" className="px-3 py-2 mt-1 text-sm ml-auto w-6/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>

              
              <div className='flex items-center gap-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Default Invoice Template</label>
                <input name="zipCode" id='zipCode' type="number" className="px-3 py-2 mt-1 text-sm ml-auto w-6/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>


              <div className='flex items-center gap-2'>
                <label className="font-semibold text-sm text-gray-600 pb-1">Default Invoice Terms</label>
                <input name="zipCode" id='zipCode' type="number" className="px-3 py-2 mt-1 text-sm ml-auto w-6/12 bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />
              </div>

            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Customer