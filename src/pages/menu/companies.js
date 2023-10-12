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


  const [src, setSrc] = useState('https://avatars.mds.yandex.net/i?id=45c28e6cffa459df5de056d7e4f3c87a4f08ba70-9229079-images-thumbs&n=13');
  
  const [companyName, setCompanyName] = useState('')
  const [hpNumber, setHpNumber] = useState('')
  const [address, setAddress] = useState('')
  const [faxNumber, setFaxNumber] = useState('')
  const [officePhone, setOfficePhone] = useState('')
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')





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
    } else if (name === 'companyName') {
        setCompanyName(value);
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
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company Name
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="companyName"
                        value={companyName}
                        id="companyName"
                        placeholder='ABC Name'
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="w-8/12">
                    <label htmlFor="hpNumber" className="block text-sm font-medium text-gray-700">
                        H.P Number / A.M
                    </label>
                    <input
                        type="number"
                        onChange={handleChange}
                        name="hpNumber"
                        value={hpNumber}
                        id="hpNumber"
                        placeholder='123456789'
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className='w-full flex space-x-4'>
                  <div className="w-11/12">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address, City
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="address"
                        value={address}
                        id="address"
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
                    <label htmlFor="loginId" className="block text-sm font-medium text-gray-700">
                      Login Id
                    </label>
                    <input
                        type="email"
                        onChange={handleChange}
                        name="loginId"
                        value={loginId}
                        id="loginId"
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




  return (
    <div>
      <div className='w-full px-10 py-5'>
        <form method="POST" onSubmit={(e)=>{submitNewContract(e)}}>
          <div className="overflow-hidden ">
            <div className="bg-white py-5">


              <Tabs value="companyDetails" className='h-[27rem]'>
                <TabsHeader className='bg-[#f0f3f4] text-black'>
                  {newContractData.map(({ label, value, icon }) => (
                    <Tab key={value} value={value}>
                      <div className="flex items-center gap-2">
                        {React.createElement(icon, { className: "w-5 h-5" })}
                        {label}
                      </div>
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody className='mt-5'>
                  {newContractData.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>

              <div className="bg-gray-50 space-x-3 px-4 py-3 text-right sm:px-6">
                <button type="submit" onClick={(e)=>{submit(e)}} className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Companies