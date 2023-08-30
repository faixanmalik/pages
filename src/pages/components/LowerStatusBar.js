import { React , useState } from 'react'
import { BiBarcodeReader, BiSolidUser, BiSolidUserPlus } from 'react-icons/bi';
import { BsFillTagFill } from 'react-icons/bs';
import { FaFileInvoice, FaMoneyBillAlt, FaPlane, FaRegCalendarAlt, FaShoppingCart } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { AiFillSetting } from 'react-icons/ai';

const LowerStatusBar = () => {

  let headerItems = [
    {
      title: 'Customers',
      icon: BiSolidUser,
      link: '/customers'
    },
    {
      title: 'Invoices',
      icon: FaShoppingCart,
      link: '/invoices'
    },
    {
      title: 'Estimates',
      icon: FaFileInvoice,
      link: '/estimates'
    },
    {
      title: 'Tickets',
      icon: BsFillTagFill,
      link: '/tickets'
    },
    {
      title: 'Parts',
      icon: FaPlane,
      link: '/parts'
    },
    {
      title: 'Inventory',
      icon: BiBarcodeReader,
      link: '/inventory'
    },
    {
      title: 'Calendar',
      icon: FaRegCalendarAlt,
      link: '/calendar'
    },
    {
      title: 'POS',
      icon: FaMoneyBillAlt,
      link: '/pos'
    },
    {
      title: 'Leads',
      icon: BiSolidUserPlus,
      link: '/leads'
    },
    {
      title: 'Marketers',
      icon: HiOutlineSpeakerphone,
      link: '/leads'
    },
    {
      title: 'Admin',
      icon: AiFillSetting,
      link: '/admin'
    },
  ]

  return (
    <div className='bg-[#333333] p-[6px] py-2 flex items-center'>

      <div className='flex space-x-10 items-center ml-16'>
        {headerItems.map((item, index)=>{
          return  <div key={index} className='items-center py-1 space-y-1 flex-col justify-items-center'>
          <item.icon className='text-[#9e9e9e] text-[36px] mx-auto hover:text-white'/>
          <h1 className='text-[#8F8F8F] text-[15px] font-semibold'>{item.title}</h1>
          </div>
        })}
      </div>
        
    </div>
  )
}

export default LowerStatusBar