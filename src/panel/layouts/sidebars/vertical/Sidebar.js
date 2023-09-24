import { React, Fragment, useState } from 'react'
import { useRouter } from "next/router";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Menu, MenuItem, SubMenu, Sidebar } from 'react-pro-sidebar';

import { AiOutlineCloseCircle, AiOutlineContacts, AiOutlineProject, AiOutlineSetting, AiOutlineShoppingCart, AiOutlineTeam, AiOutlineUser, AiOutlineUserSwitch } from 'react-icons/ai'
import { BiHomeAlt, BiLocationPlus, BiUserCheck } from 'react-icons/bi'
import { MdPayment, MdProductionQuantityLimits} from 'react-icons/md'
import {IoPieChartSharp, IoBusinessOutline} from 'react-icons/io5'
import {HiOutlineCash, HiOutlineDocumentReport, HiOutlineReceiptTax} from 'react-icons/hi'

import {BsBank} from 'react-icons/bs'
import {FiUserPlus, FiUsers} from 'react-icons/fi'
import {RiBankCardLine} from 'react-icons/ri'




const Sidebar2 = ({ showMobilemenu }) => {

    
  const router = useRouter();
  const location = router.pathname;
  const [open, setOpen] = useState(false)

  
  

  return (
    <div className="min-h-screen">
    

      <div className="pt-4">

      <Sidebar width='255px' className='min-h-screen'>
      <Menu className='bg-black mt-10'>
        
        <Menu>
          <MenuItem icon={<BiHomeAlt className='text-lg'/>} className={ location === '/panel' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'} href="/panel" >
            Dashboard
          </MenuItem>
    
          <SubMenu label="User Managment" icon={<AiOutlineUser className='text-lg'/>}>
            <MenuItem href="/panel/userManagment/addRole" icon={<BiUserCheck className='text-lg'/>} className={ location === '/panel/userManagment/addRole' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'}>
              Add Role
            </MenuItem>
          </SubMenu>
          <SubMenu label="User Managment" icon={<AiOutlineUser className='text-lg'/>}>
            <MenuItem href="/panel/userManagment/addRole" icon={<BiUserCheck className='text-lg'/>} className={ location === '/panel/userManagment/addRole' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'}>
              Add Role
            </MenuItem>
          </SubMenu>
          <SubMenu label="User Managment" icon={<AiOutlineUser className='text-lg'/>}>
            <MenuItem href="/panel/userManagment/addRole" icon={<BiUserCheck className='text-lg'/>} className={ location === '/panel/userManagment/addRole' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'}>
              Add Role
            </MenuItem>
          </SubMenu>
          <SubMenu label="User Managment" icon={<AiOutlineUser className='text-lg'/>}>
            <MenuItem href="/panel/userManagment/addRole" icon={<BiUserCheck className='text-lg'/>} className={ location === '/panel/userManagment/addRole' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'}>
              Add Role
            </MenuItem>
          </SubMenu>
          <SubMenu label="User Managment" icon={<AiOutlineUser className='text-lg'/>}>
            <MenuItem href="/panel/userManagment/addRole" icon={<BiUserCheck className='text-lg'/>} className={ location === '/panel/userManagment/addRole' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'}>
              Add Role
            </MenuItem>
          </SubMenu>
          <SubMenu label="User Managment" icon={<AiOutlineUser className='text-lg'/>}>
            <MenuItem href="/panel/userManagment/addRole" icon={<BiUserCheck className='text-lg'/>} className={ location === '/panel/userManagment/addRole' ?  'text-indigo-700 bg-zinc-50 font-medium' : 'text-gray-600 font-medium'}>
              Add Role
            </MenuItem>
          </SubMenu>

        </Menu>
      </Menu>
      </Sidebar>


      </div>
    </div>
  );
};



export default Sidebar2;
