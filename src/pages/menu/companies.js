import React, {Fragment, useEffect, useState} from 'react'
import { BsCashCoin } from 'react-icons/bs';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


// Stepper
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { Select, Option, Switch } from "@material-tailwind/react";


const Companies = () => {

  const [src, setSrc] = useState('https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg');
  
  const [contact, setcontact] = useState('')
  const [role, setRole] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [faxNumber, setFaxNumber] = useState('')
  const [officePhone, setOfficePhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contractStartDate, setContractStartDate] = useState('')


  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);




  const handleChange = (e) => {
    const { name, value } = e.target;
    
    
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const blob = new Blob([file])
      const img = URL.createObjectURL(blob);
      setSrc(img);
    }
  };

  const handleClickContainer = () => {
    const inputElement = document.getElementById('imageInput');
    inputElement.click();
  };

  const submit = (e)=>{
    e.preventDefault();
  }

  let roles = ['CEO','Chief Financial Officer', 'Salesperson','Accounting']
  let services = ['Cloud server', 'Enterprise antivirus','Online backup','Annual service contract']

  return (
    <div>
      <div className='w-full px-10 py-5 pb-14 bg-gray-100'>
        <form method="POST" onSubmit={(e)=>{submitNewContract(e)}}>
          <div className="w-full px-24 py-4">
            <Stepper
              activeStep={activeStep}
              activeLineClassName="bg-[#ee8e00]"
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
            >
              <Step onClick={() => setActiveStep(0)}>
                <BuildingLibraryIcon className={`p-[9px] ${activeStep === 0 || activeStep === 1 || activeStep === 2 ? 'border-2 border-[#ee8e00] bg-black text-white' : ''}  rounded-full`} />
                <div className="absolute -bottom-[4.5rem] w-max text-center ">
                  <Typography
                    variant="h6"
                    color={activeStep === 0 ? "blue-gray" : "gray"}
                  >
                    Company Details
                  </Typography>
                  <Typography
                    color={activeStep === 0 ? "blue-gray" : "gray"}
                    className="font-normal"
                  >
                    Fillup company info.
                  </Typography>
                </div>
              </Step>
              <Step onClick={() => setActiveStep(1)}>
                <UserIcon className={`p-[9px] ${activeStep === 1 || activeStep === 2 ? 'border-2 border-[#ee8e00] bg-black text-white' : ''}  rounded-full`} />
                <div className="absolute -bottom-[4.5rem] w-max text-center">
                  <Typography
                    variant="h6"
                    color={activeStep === 1 ? "blue-gray" : "gray"}
                  >
                    Contact Details
                  </Typography>
                  <Typography
                    color={activeStep === 1 ? "blue-gray" : "gray"}
                    className="font-normal"
                  >
                    Fillup contact info.
                  </Typography>
                </div>
              </Step>
              <Step onClick={() => setActiveStep(2)}>
                <CogIcon className={`p-[9px] ${activeStep === 2 ? 'border-2 border-[#ee8e00] bg-black text-white' : ''}  rounded-full`} />
                <div className="absolute -bottom-[4.5rem] w-max text-center">
                  <Typography
                    variant="h6"
                    color={activeStep === 2 ? "blue-gray" : "gray"}
                  >
                    Customer Service Contracts
                  </Typography>
                  <Typography
                    color={activeStep === 2 ? "blue-gray" : "gray"}
                    className="font-normal"
                  >
                    Fillup relevant contact
                  </Typography>
                </div>
              </Step>
            </Stepper>
          </div>

          <div className='mt-28'>

            {activeStep === 0 && <div >
              <div className='flex space-x-4 w-full'>
                <div className='flex w-full'>

                  <div className='flex flex-col w-7/12 space-y-4'>

                    <div className='w-full mb-10 flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="avatar" className="block w-1/5 text-sm font-semibold text-gray-700">
                            Avatar
                        </label>
                        <div className="w-32 h-[7rem] text-center">
                          <div className="relative w-52">
                            <img
                              className="w-32 h-36 rounded-lg absolute"
                              src={src}
                              alt=""
                            />
                            <div className="w-32 border-2 border-gray-400 flex flex-col ml-auto justify-between h-36 group hover:bg-gray-200 opacity-60 rounded-lg absolute cursor-pointer transition duration-500">
                              
                              <div className='flex flex-col ml-auto -mr-7 justify-end'>
                                <AiOutlineEdit onClick={handleClickContainer} className="text-gray-700 p-[3px] border-2 border-gray-300 bg-white rounded-full text-2xl"/>
                                <MdClose onClick={()=>setSrc('https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg')} className="text-gray-700 border-2 border-gray-300 bg-white rounded-full text-xl mt-[100px]"/>
                              </div>

                            </div>
                          </div>
                          <input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="contact" className="block w-1/4 text-sm font-semibold text-gray-700">
                            Company Name
                        </label>
                        <input
                            type="text"
                            onChange={handleChange}
                            name="contact"
                            value={contact}
                            id="contact"
                            placeholder='ABC Name'
                            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="role" className="block w-1/4 text-sm font-semibold text-gray-700">
                          H.P Number / A.M
                        </label>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="role"
                          value={role}
                          id="role"
                          placeholder='123456789'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>  
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="phoneNo" className="block w-1/4 text-sm font-semibold text-gray-700">
                            phoneNo, City
                        </label>
                        <input
                            type="text"
                            onChange={handleChange}
                            name="phoneNo"
                            value={phoneNo}
                            id="phoneNo"
                            placeholder='123 Main Street Anytown, USA'
                            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="faxNumber" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Fax Number
                        </label>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="faxNumber"
                          value={faxNumber}
                          id="faxNumber"
                          placeholder='123-456-7890'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="officePhone" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Office Phone
                        </label>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="officePhone"
                          value={officePhone}
                          id="officePhone"
                          placeholder='123-456-7890'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="email" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Login Id
                        </label>
                        <input
                          type="email"
                          onChange={handleChange}
                          name="email"
                          value={email}
                          id="email"
                          placeholder='abc@example.com'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="password" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          onChange={handleChange}
                          name="password"
                          value={password}
                          id="password"
                          placeholder='**********'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>}

            {activeStep === 1 && <div>
              <div className='flex space-x-4 w-full'>
                <div className='flex w-full'>

                  <div className='flex flex-col w-7/12 space-y-4'>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="contact" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Contact
                        </label>
                        <input
                          type="text"
                          onChange={handleChange}
                          name="contact"
                          value={contact}
                          id="contact"
                          placeholder='ABC Name'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="role" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Role
                        </label>
                        <Select size="md" label="Select Role" className='bg-white'>
                          {roles.map((item,index)=>{
                            return <Option key={index} value={item}>{item}</Option>
                          })}
                        </Select>
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="phoneNo" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Mobile Phone
                        </label>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="phoneNo"
                          value={phoneNo}
                          id="phoneNo"
                          placeholder='123-456-7890'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="faxNumber" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Fax Number
                        </label>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="faxNumber"
                          value={faxNumber}
                          id="faxNumber"
                          placeholder='123-456-7890'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      
                    </div>


                    <div className='w-full flex space-x-4'>
                      
                      <div className="w-full flex items-center">
                        <label htmlFor="officePhone" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Office Phone
                        </label>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="officePhone"
                          value={officePhone}
                          id="officePhone"
                          placeholder='123-456-7890'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="email" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Personal Email
                        </label>
                        <input
                          type="email"
                          onChange={handleChange}
                          name="email"
                          value={email}
                          id="email"
                          placeholder='abc@example.com'
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>}

            {activeStep === 2 && <div>
              <div className='flex space-x-4 w-full'>
                <div className='flex w-full'>

                  <div className='flex flex-col w-1/2 space-y-4'>
                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="serviceType" className="block w-1/3 text-sm font-semibold text-gray-700">
                          Service Type
                        </label>
                        <Select size="md" label="Select service" className='bg-white'>
                          {services.map((item,index)=>{
                            return <Option key={index} value={item}>{item}</Option>
                          })}
                        </Select>
                      </div>
                    </div>
                    <div className='w-full flex space-x-4'>

                      <div className="w-full flex items-center">
                        <label htmlFor="contractStartDate" className="block w-1/3 text-sm font-semibold text-gray-700">
                          Contract Start Date
                        </label>
                        <input
                          type="date"
                          onChange={handleChange}
                          name="contractStartDate"
                          value={contractStartDate}
                          id="contractStartDate"
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      
                    </div>
                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="onGoingContract" className="block w-1/4 2xl:w-1/5 text-sm font-semibold text-gray-700">
                          On going Contract
                        </label>
                        <Switch color="blue" />
                      </div>
                    </div>
                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="contractTerminationDate" className="block w-1/3 text-sm font-semibold text-gray-700">
                          Contract Termination Date
                        </label>
                        <input
                          type="date"
                          onChange={handleChange}
                          name="contractTerminationDate"
                          // value={contractTerminationDate}
                          id="contractTerminationDate"
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="monthlyPrice" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Monthly Price
                        </label>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="monthlyPrice"
                          // value={monthlyPrice}
                          id="monthlyPrice"
                          placeholder='9999'
                          className="mt-1 p-2 block w-1/3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      
                    </div>
                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="annualPrice" className="block w-1/4 text-sm font-semibold text-gray-700">
                          Annual Price
                        </label>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="annualPrice"
                          // value={annualPrice}
                          id="annualPrice"
                          placeholder='9999'
                          className="mt-1 p-2 block w-1/3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className='w-full flex space-x-4'>
                      <div className="w-9/12 flex items-center">
                        <label htmlFor="hourlyBilling" className="block w-1/2 text-sm font-semibold text-gray-700">
                          Hourly Billing
                        </label>
                        <Select size="md" label="Select hourly billing" className='bg-white'>
                          <Option value='No'>No</Option>
                          <Option value='Yes'>Yes</Option>
                        </Select>
                      </div>
                    </div>
                    <div className='w-full flex space-x-4'>
                      <div className="w-full flex items-center">
                        <label htmlFor="scannedContract" className="block w-1/3 2xl:w-1/3 text-sm font-semibold text-gray-700">
                          Uploading a scanned contract
                        </label>
                        <input type="file" class="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-md file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-500 file:text-white
                          hover:file:bg-blue-600
                        "/>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>}
          </div>
        
          <div className="mt-10 flex justify-between">
            <Button className='border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white rounded-md bg-white text-black' onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            {activeStep === 2 
              ? <Button className='border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white rounded-md bg-white text-black' onClick={(e)=>submit(e)}>Save</Button>
              : <Button className='border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white rounded-md bg-white text-black' onClick={handleNext} disabled={isLastStep}>Next</Button>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Companies