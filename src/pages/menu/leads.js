import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import { FaUserFriends } from 'react-icons/fa';

const Leads = () => {


  let cards = [
    {name: 'John Doe', thisMonth: 5, today: 2},
    {name: 'John Smith', thisMonth: 15, today: 10},
    {name: 'Sapir Shiamev', thisMonth: 45, today: 23},
    {name: 'Sapir Shiamev', thisMonth: 35, today: 13},
    {name: 'Sapir Shiamev', thisMonth: 85, today: 9},
  ]

  let companiesList = ['Ip Computer Ltd', 'A Construction company', 'ways']
  let techniciansList = ['super admin', 'sapphire', 'Masha Naroditsky', 'Tali Zamir']
  let prioritiesList = ['low', 'medium', 'high', 'super urgent']
  let topicList = ['Outlook email problem', 'Internet fault', 'Printer / scanner failure']

  return (
    <>
    <div className='bg-[#f7f7f7] min-h-screen'>

      <div className='px-10 py-5'>
        <div className='flex flex-wrap space-x-3'>
          {cards.map((item, index)=>{
            return <Card key={index} className="mt-6 w-56 h-36">
            <CardBody className='px-5 py-2'>

              <div className='flex justify-between items-center'>
                <h1 className='font-bold text-black text-3xl'>{index + 1}</h1>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mb-4 h-12 w-12 text-blue-700">
                    <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"/>
                    <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                  </svg>
                </div>
              </div>
              
              <Typography variant="h5" color="blue-gray" className="">
                {item.name}
              </Typography>
            </CardBody>
            <CardFooter className="px-5 pt-0 flex justify-between">

              <Typography variant="h7" color="blue-gray">
                This Month: <span className='text-red-700 font-semibold'>{item.thisMonth}</span>
              </Typography>
              <Typography variant="h7" color="blue-gray">
                Today: <span className='text-red-700 font-semibold'>{item.today}</span>
              </Typography>

            </CardFooter>
          </Card>
          })}
        </div>

        <div className='w-full'>
          <Card className="my-6">
            <CardBody className='px-5 py-2'>

              <div className='flex items-center space-x-3 ml-3 py-4'>
                <FaUserFriends className='text-2xl text-black'/>
                <h1 className='font-bold text-black text-2xl'>Opening a new card</h1>
              </div>
              
              <div className="flex gap-10">
                <Radio name="type" label="Card" defaultChecked/>
                <Radio name="type" label="Project" />
              </div>

              <div className='flex space-x-3 w-full py-4'>

                <div className='flex flex-col w-2/3 space-y-4'>
                  <div className='flex space-x-3 items-center'>
                    <div className="w-full flex items-center">
                      <label htmlFor="companySelection" className="block w-2/3 text-sm font-semibold text-gray-700">
                        Company Selection
                      </label>
                      <Select label="Select">
                        {companiesList.map((item, index)=>{
                          return <Option key={index}>{item}</Option>
                        })}
                      </Select>
                    </div>
                    <div className="w-full flex items-center">
                      <label htmlFor="technician" className="block w-2/3 text-sm font-semibold text-gray-700">
                        Select a Technician
                      </label>
                      <Select label="Select">
                        {techniciansList.map((item, index)=>{
                          return <Option key={index}>{item}</Option>
                        })}
                      </Select>
                    </div>
                  </div>
                  <div className='flex space-x-3 items-center'>
                    <div className="w-full flex items-center">
                      <label htmlFor="priority" className="block w-2/3 text-sm font-semibold text-gray-700">
                        Change Priority
                      </label>
                      <Select label="Select">
                        {prioritiesList.map((item, index)=>{
                          return <Option key={index}>{item}</Option>
                        })}
                      </Select>
                    </div>
                    <div className="w-full flex items-center">
                      <label htmlFor="topic" className="block w-2/3 text-sm font-semibold text-gray-700">
                        Select Topic
                      </label>
                      <Select label="Select">
                        {topicList.map((item, index)=>{
                          return <Option key={index}>{item}</Option>
                        })}
                      </Select>
                    </div>
                  </div>


                  <div className='flex space-x-3 items-center'>
                    <div className="w-full flex items-center">
                      <label htmlFor="priority" className="block w-2/3 text-sm font-semibold text-gray-700">
                        Unknown Field
                      </label>
                      <Select label="Select">
                        <Option>No</Option>
                        <Option>Yes</Option>
                      </Select>
                    </div>
                    <div className="w-full flex items-center"></div>
                  </div>



                  <textarea rows={4} placeholder='write the description of problem' name="desc " id='desc' type="text" className="px-3 w-full py-2 mt-1 text-sm bg-white bg-opacity-50 resize-none text-gray-700 outline-none border border-gray-300 focus:border-blue-500 focus:shadow-lg shadow-blue-500 rounded-lg  transition-colors duration-200 ease-in-out" />

                  <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>

                </div>
              </div>

              <div className='border-t-2 border-gray-200'>
                <Button className='border-2 float-right my-4 mr-5 border-[#ee8e00] hover:bg-[#ee8e00] hover:text-white rounded-md bg-white text-black'>Save</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      
    </div>
        
    </>
  )
}

export default Leads