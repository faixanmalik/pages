import FullLayout from '@/panel/layouts/FullLayout'
import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'

const Backup = () => {
  return (
    <>
    <ProSidebarProvider>
    <FullLayout>
        <div className=''>
          <h1 className='text-black'>Backup</h1>
        </div>
    </FullLayout>
    </ProSidebarProvider>
    </>
  )
}

export default Backup