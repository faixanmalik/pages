import React from 'react'
import FullLayout from '@/panel/layouts/FullLayout'
import { ProSidebarProvider } from 'react-pro-sidebar'

const SmsTemplates = () => {
  return (
    <>
    <ProSidebarProvider>
    <FullLayout>
      <div className=''>
        SmsTemplates
      </div>
    </FullLayout>
    </ProSidebarProvider>
    </>
  )
}

export default SmsTemplates