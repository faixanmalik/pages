import React from 'react'
import FullLayout from '@/panel/layouts/FullLayout'
import { ProSidebarProvider } from 'react-pro-sidebar'

const EmailsTemplates = () => {
  return (
    <>
    <ProSidebarProvider>
    <FullLayout>
      <div className=''>
        EmailsTemplates
      </div>
    </FullLayout>
    </ProSidebarProvider>
    </>
  )
}

export default EmailsTemplates