import React from 'react'
import FullLayout from '@/panel/layouts/FullLayout'
import { ProSidebarProvider } from 'react-pro-sidebar'

const Currency = () => {
  return (
    <>
    <ProSidebarProvider>
    <FullLayout>
      <div className=''>
        Currency
      </div>
    </FullLayout>
    </ProSidebarProvider>
    </>
  )
}

export default Currency