import { React, useState } from 'react'
import { useRouter } from "next/router";
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';

import { MdEmail, MdSms} from 'react-icons/md'
import {IoSettings} from 'react-icons/io5'

import { BsCurrencyDollar} from 'react-icons/bs'
import { LuDatabaseBackup } from 'react-icons/lu';




const Sidebar2 = ({ showMobilemenu }) => {

    
  const router = useRouter();
  const location = router.pathname;
  const [open, setOpen] = useState(false)
  

  return (
    <div className="">

      <Sidebar width='255px' className='min-h-screen mt-10'>

        <Menu className='bg-white'>
          <MenuItem href="/menu/adminSettings/settings" icon={<IoSettings className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium'} >
            System settings
          </MenuItem>
          <MenuItem href="/menu/adminSettings/smsTemplates" icon={<MdSms className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'} >
            SMS templates
          </MenuItem>
          <MenuItem href="/menu/adminSettings/emailsTemplates" icon={<MdEmail className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'} >
            Emails templates
          </MenuItem>
          <MenuItem href="/menu/adminSettings/currency" icon={<BsCurrencyDollar className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'} >
            Currency
          </MenuItem>
          <MenuItem href="/menu/adminSettings/backup" icon={<LuDatabaseBackup className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'} >
            Backup
          </MenuItem>
        </Menu>

      </Sidebar>
    </div>
  );
};



export default Sidebar2;
