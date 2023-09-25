import React from 'react'
import { ProSidebarProvider } from "react-pro-sidebar";
import FullLayout from "@/panel/layouts/FullLayout";
import SystemSettings from './systemSettings';

const Settings = () => {
  return (
    <>
    <ProSidebarProvider>
    <FullLayout>

      <SystemSettings/>

    </FullLayout>
    </ProSidebarProvider>

    </>
  )
}

export default Settings