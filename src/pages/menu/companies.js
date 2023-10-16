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

  const [newContractStartDate, setNewContractStartDate] = useState('')
  const [newContractEndDate, setNewContractEndDate] = useState('')
  const [newContractUnitRent, setNewContractUnitRent] = useState('')
  const [newContractCommission, setNewContractCommission] = useState('')
  const [newContractRentParking, setNewContractRentParking] = useState('')
  const [newContractBouncedChequeFine, setNewContractBouncedChequeFine] = useState('')
  const [newContractStatus, setNewContractStatus] = useState('')
  const [newContractPaymentScheduling, setNewContractPaymentScheduling] = useState('')
  const [newContractSecurityDeposit, setNewContractSecurityDeposit] = useState('')
  const [newContractNotes, setNewContractNotes] = useState('')


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
      
    if (name === 'tenantIdNumber') {
      setTenantIdNumber(value);
    } else if (name === 'tenantExpIdNumber') {
      setTenantExpIdNumber(value);
    } else if (name === 'newContractStartDate') {
      setNewContractStartDate(value);
    } else if (name === 'newContractEndDate') {
      setNewContractEndDate(value);
    } else if (name === 'newContractUnitRent') {
      setNewContractUnitRent(value);
    } else if (name === 'newContractCommission') {
      setNewContractCommission(value);
    } else if (name === 'newContractRentParking') {
      setNewContractRentParking(value);
    } else if (name === 'newContractBouncedChequeFine') {
      setNewContractBouncedChequeFine(value);
    } else if (name === 'newContractStatus') {
      setNewContractStatus(value);
    } else if (name === 'newContractPaymentScheduling') {
      setNewContractPaymentScheduling(value);
    } else if (name === 'newContractSecurityDeposit') {
      setNewContractSecurityDeposit(value);
    } else if (name === 'newContractNotes') {
      setNewContractNotes(value);
    } else if (name === 'tenantPassPortNumber') {
      setTenantPassPortNumber(value);
    } else if (name === 'tenantExpPassPort') {
      setTenantExpPassPort(value);
    } else if (name === 'tenantVatRegistrationNo') {
      setTenantVatRegistrationNo(value);
    } else if (name === 'tenantIbanNo') {
      setTenantIbanNo(value);
    } else if (name === 'tenantBank') {
      setTenantBank(value);
    } else if (name === 'tenantBankAccountNumber') {
      setTenantBankAccountNumber(value);
    } else if (name === 'attachment') {
      setAttachment(value);
    } else if (name === 'search') {
      setSearch(value);
    } else if (name === 'phoneNo') {
        setPhoneNo(value);
    } else if (name === 'email') {
        setEmail(value);
    } else if (name === 'nameInBill') {
        setNameInBill(value);
    } else if (name === 'idNumber') {
        setIdNumber(value);
    } else if (name === 'expID') {
        setExpID(value);
    } else if (name === 'building') {
        setBuilding(value);
    } else if (name === 'passPortNumber') {
        setPassPortNumber(value);
    } else if (name === 'expPassPort') {
        setExpPassPort(value);
    } else if (name === 'buildingNameInArabic') {
        setBuildingNameInArabic(value);
    } else if (name === 'buildingNameInEnglish') {
        setBuildingNameInEnglish(value);
    } else if (name === 'parkings') {
        setParkings(value);
    } else if (name === 'roof') {
        setRoof(value);
    } else if (name === 'country') {
        setCountry(value);
    } else if (name === 'city') {
        setCity(value);
    } else if (name === 'area') {
        setArea(value);
    } else if (name === 'electricityMeterNo') {
        setElectricityMeterNo(value);
    } else if (name === 'contractStartDate') {
        setContractStartDate(value);
    } else if (name === 'investmentStructure') {
        setInvestmentStructure(value);
    } else if (name === 'gracePeriodFrom') {
        setGracePeriodFrom(value);
    } else if (name === 'contractEndDate') {
        setContractEndDate(value);
    } else if (name === 'amount') {
        setAmount(value);
    } else if (name === 'gracePeriodTo') {
        setGracePeriodTo(value);
    } else if (name === 'paymentScheduling') {
        setPaymentScheduling(value);
    } else if (name === 'contact') {
        setcontact(value);
    } else if (name === 'balcony') {
        setBalcony(value);
    } else if (name === 'ac') {
        setAc(value);
    } else if (name === 'unitType') {
        setUnitType(value);
    } else if (name === 'unitUse') {
        setUnitUse(value);
    } else if (name === 'bathroom') {
        setBathroom(value);
    } else if (name === 'unitStatus') {
        setUnitStatus(value);
    } else if (name === 'plotNo') {
        setPlotNo(value);
    } else if (name === 'rent') {
        setRent(value);
    } else if (name === 'rentParking') {
        setRentParking(value);
    } else if (name === 'size') {
        setSize(value);
    } else if (name === 'waterMeterNumber') {
        setWaterMeterNumber(value);
    } else if (name === 'sewageNumber') {
        setSewageNumber(value);
    } else if (name === 'view') {
        setView(value);
    } else if (name === 'notes') {
        setNotes(value);
    }
    else if(name === 'name'){
      setName(value)
      const newData = dbContacts.filter(item => item.name === value);
      if(newData.length > 0){
        setEmail(newData[0].email)
        setPhoneNo(newData[0].phoneNo)
        setCity(newData[0].city)
      }
      else{
        setEmail('')
        setPhoneNo('')
        setCity('')
      }
    }
  }



  let paymentSchedulings = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  let newContractStatusArray = ['Active','Expired','Close']

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


  const newContractData = [
      
    {
      label: "Company Details",
      value: "companyDetails",
      icon: HiOutlineBuildingOffice2,
      desc: (
        <div>
          <div className='flex space-x-4 mb-14 w-full'>
            <div className='flex w-full'>

              <div className='flex flex-col w-full space-y-4'>
                <div className='w-full flex space-x-4'>
                  <div className="w-8/12">
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
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
                  <div className="w-8/12">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
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
                  <div className="w-11/12">
                    <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
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
                  <div className="w-8/12">
                    <label htmlFor="faxNumber" className="block text-sm font-medium text-gray-700">
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
                  <div className="w-8/12">
                    <label htmlFor="officePhone" className="block text-sm font-medium text-gray-700">
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
                  <div className="w-8/12">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                  <div className="w-8/12">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

              <div className="w-8/12">

                <div className="mx-auto w-64 h-[15rem] text-center">
                  <div className="relative w-64" onClick={handleClickContainer}>
                    <img
                      className="w-64 h-64 rounded-full absolute"
                      src={src}
                      alt=""
                    />
                    <div className="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                      <img
                        className="hidden group-hover:block w-12"
                        src="https://www.svgrepo.com/show/33565/upload.svg"
                        alt=""
                      />
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
          </div>
        </div>
      ),
    },
    {
      label: "Contact Details",
      value: "contactDetails",
      icon: BsCashCoin,
      desc: (
        <div>

          <div className='flex space-x-4 mb-14'>
            <div className="w-full">
              <label htmlFor="newContractStartDate" className="block text-sm font-medium text-gray-700">
               Contract Start Date
              </label>
              <input
                type="date"
                onChange={handleChange}
                name="newContractStartDate"
                value={newContractStartDate}
                id="newContractStartDate"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractEndDate" className="block text-sm font-medium text-gray-700">
               Contract End Date
              </label>
              <input
                type="date"
                onChange={handleChange}
                name="newContractEndDate"
                value={newContractEndDate}
                id="newContractEndDate"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractUnitRent" className="block text-sm font-medium text-gray-700">
                Unit Rent
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractUnitRent"
                value={newContractUnitRent}
                id="newContractUnitRent"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className='flex space-x-4 mb-14'>
            
            <div className="w-full">
              <label htmlFor="newContractCommission" className="block text-sm font-medium text-gray-700">
                Commision
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractCommission"
                value={newContractCommission}
                id="newContractCommission"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractRentParking" className="block text-sm font-medium text-gray-700">
                Rent Parking
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractRentParking"
                value={newContractRentParking}
                id="newContractRentParking"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractBouncedChequeFine" className="block text-sm font-medium text-gray-700">
                Bounced Cheque Fine
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractBouncedChequeFine"
                value={newContractBouncedChequeFine}
                id="newContractBouncedChequeFine"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className='flex space-x-4 mb-14'>

            <div className="w-full">
              <label htmlFor="newContractSecurityDeposit" className="block text-sm font-medium text-gray-700">
                Security Deposit
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractSecurityDeposit"
                value={newContractSecurityDeposit}
                id="newContractSecurityDeposit"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractStatus" className="block text-sm font-medium text-gray-700">
                Contract Status
              </label>
              <select id="newContractStatus" name="newContractStatus" onChange={ handleChange } value={newContractStatus} className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option value=''>select contract status</option>
                {newContractStatusArray.map((item, index)=>{
                  return <option key={index} value={item}>{item}</option>
                })}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="newContractPaymentScheduling" className="block text-sm font-medium text-gray-700">
                Payment Scheduling
              </label>
              <select id="newContractPaymentScheduling" name="newContractPaymentScheduling" onChange={ handleChange } value={newContractPaymentScheduling} className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option value=''>select payment scheduling</option>
                {paymentSchedulings.map((item, index)=>{
                  return <option key={index} value={item}>{item}</option>
                })}
              </select>
            </div>
            
          </div>
          <div className='flex space-x-4'>

            <div className="w-full">
              <textarea cols="30" rows="5" type="text"
                onChange={handleChange}
                value={newContractNotes}
                name="newContractNotes"
                id="newContractNotes"
                placeholder='add your notes here...'
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
              </textarea>
              
            </div>
            
          </div>

          <div className="flex items-center justify-center w-full mt-10">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
      ),
    },
    {
      label: "Customer Service Contracts",
      value: "customerServiceContracts",
      icon: BsCashCoin,
      desc: (
        <div>

          <div className='flex space-x-4 mb-14'>
            <div className="w-full">
              <label htmlFor="newContractStartDate" className="block text-sm font-medium text-gray-700">
               Contract Start Date
              </label>
              <input
                type="date"
                onChange={handleChange}
                name="newContractStartDate"
                value={newContractStartDate}
                id="newContractStartDate"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractEndDate" className="block text-sm font-medium text-gray-700">
               Contract End Date
              </label>
              <input
                type="date"
                onChange={handleChange}
                name="newContractEndDate"
                value={newContractEndDate}
                id="newContractEndDate"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractUnitRent" className="block text-sm font-medium text-gray-700">
                Unit Rent
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractUnitRent"
                value={newContractUnitRent}
                id="newContractUnitRent"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className='flex space-x-4 mb-14'>
            
            <div className="w-full">
              <label htmlFor="newContractCommission" className="block text-sm font-medium text-gray-700">
                Commision
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractCommission"
                value={newContractCommission}
                id="newContractCommission"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractRentParking" className="block text-sm font-medium text-gray-700">
                Rent Parking
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractRentParking"
                value={newContractRentParking}
                id="newContractRentParking"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractBouncedChequeFine" className="block text-sm font-medium text-gray-700">
                Bounced Cheque Fine
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractBouncedChequeFine"
                value={newContractBouncedChequeFine}
                id="newContractBouncedChequeFine"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className='flex space-x-4 mb-14'>

            <div className="w-full">
              <label htmlFor="newContractSecurityDeposit" className="block text-sm font-medium text-gray-700">
                Security Deposit
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="newContractSecurityDeposit"
                value={newContractSecurityDeposit}
                id="newContractSecurityDeposit"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="newContractStatus" className="block text-sm font-medium text-gray-700">
                Contract Status
              </label>
              <select id="newContractStatus" name="newContractStatus" onChange={ handleChange } value={newContractStatus} className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option value=''>select contract status</option>
                {newContractStatusArray.map((item, index)=>{
                  return <option key={index} value={item}>{item}</option>
                })}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="newContractPaymentScheduling" className="block text-sm font-medium text-gray-700">
                Payment Scheduling
              </label>
              <select id="newContractPaymentScheduling" name="newContractPaymentScheduling" onChange={ handleChange } value={newContractPaymentScheduling} className="mt-1 p-2 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option value=''>select payment scheduling</option>
                {paymentSchedulings.map((item, index)=>{
                  return <option key={index} value={item}>{item}</option>
                })}
              </select>
            </div>
            
          </div>
          <div className='flex space-x-4'>

            <div className="w-full">
              <textarea cols="30" rows="5" type="text"
                onChange={handleChange}
                value={newContractNotes}
                name="newContractNotes"
                id="newContractNotes"
                placeholder='add your notes here...'
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
              </textarea>
              
            </div>
            
          </div>

          <div className="flex items-center justify-center w-full mt-10">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
      ),
    },
  ];

  const submit = ()=>{

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
                        <label htmlFor="onGoingContract" className="block w-1/4 2xl:w-1/3 text-sm font-semibold text-gray-700">
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
              ? <Button className='border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white rounded-md bg-white text-black' onClick={submit}>Save</Button>
              : <Button className='border-2 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white rounded-md bg-white text-black' onClick={handleNext} disabled={isLastStep}>Next</Button>
            }
            
          </div>

        </form>
      </div>
    </div>
  )
}

export default Companies