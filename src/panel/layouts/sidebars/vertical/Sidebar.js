import { React, useState } from 'react'
import { useRouter } from "next/router";
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';

import { MdEmail, MdInventory2, MdSms} from 'react-icons/md'
import {IoSettings} from 'react-icons/io5'

import { BsBuildingFillAdd, BsCurrencyDollar} from 'react-icons/bs'
import { LuDatabaseBackup } from 'react-icons/lu';
import { FaUserFriends } from 'react-icons/fa';
import { BiSolidPackage } from 'react-icons/bi';
import { GoDotFill } from 'react-icons/go';


const Sidebar2 = ({ showMobilemenu }) => {

    
  const router = useRouter();
  const location = router.pathname;
  const [open, setOpen] = useState(false)
  

  return (
    <div className="">
      <Sidebar width='255px' className='min-h-screen mt-10'>
        <Menu className='bg-[#333333]'>
          <SubMenu label="Settings" className='text-gray-600 font-medium' icon={<IoSettings className='text-lg '/>}>
            <MenuItem href="/menu/adminSettings/settings" icon={<GoDotFill className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium bg-[#333333]'  } >
              System settings
            </MenuItem>
          </SubMenu>
          <MenuItem href="/menu/adminSettings/smsTemplates" icon={<MdSms className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium'} >
            SMS templates
          </MenuItem>
          <MenuItem href="/menu/adminSettings/emailsTemplates" icon={<MdEmail className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium'} >
            Emails templates
          </MenuItem>
          <MenuItem href="/menu/adminSettings/currency" icon={<BsCurrencyDollar className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium'} >
            Currency
          </MenuItem>
          <MenuItem href="/menu/adminSettings/backup" icon={<LuDatabaseBackup className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium'} >
            Backup
          </MenuItem>
          <MenuItem href="/menu/adminSettings/users" icon={<FaUserFriends className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium'} >
            Users
          </MenuItem>
          <MenuItem href="/menu/adminSettings/companies" icon={<BsBuildingFillAdd className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium'} >
            Companies
          </MenuItem>
          <MenuItem href="/menu/adminSettings/inventory" icon={<MdInventory2 className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium'} >
            Inventory
          </MenuItem>
          <MenuItem href="/menu/adminSettings/packages" icon={<BiSolidPackage className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 font-medium' : 'text-gray-600 font-medium'} >
            Packages
          </MenuItem>
        </Menu>

      </Sidebar>
    </div>
  );
};



export default Sidebar2;
