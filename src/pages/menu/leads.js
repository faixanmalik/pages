import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Leads = () => {


  let cards = [
    {name: 'John Doe', thisMonth: 5, today: 2},
    {name: 'John Smith', thisMonth: 15, today: 10},
    {name: 'Sapir Shiamev', thisMonth: 45, today: 23},
    {name: 'Sapir Shiamev', thisMonth: 35, today: 13},
    {name: 'Sapir Shiamev', thisMonth: 85, today: 9},
  ]

  return (
    <>
    <div className='bg-[#f7f7f7] min-h-screen'>

      <div className=''>

        <div className='flex flex-wrap px-10 space-x-3'>
          {cards.map((item, index)=>{
            return <Card key={index} className="mt-6 w-56 h-40">
            <CardBody className='px-5 py-2'>

              <div className='flex justify-between items-center'>
                <div>
                  <h1 className='font-bold text-black text-3xl'>{index + 1}</h1>
                </div>
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

      </div>
      
    </div>
        
    </>
  )
}

export default Leads