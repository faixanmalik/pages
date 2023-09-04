import { React , useState } from 'react'
import { BiBarcodeReader, BiSolidUser, BiSolidUserPlus } from 'react-icons/bi';
import { BsFillTagFill } from 'react-icons/bs';
import { FaFileInvoice, FaMoneyBillAlt, FaPlane, FaRegCalendarAlt, FaShoppingCart } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { AiFillSetting } from 'react-icons/ai';
import { RiBillLine } from 'react-icons/ri';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LowerStatusBar = () => {

  const router = useRouter();

  let headerItems = [
    {
      title: 'Customers',
      icon: BiSolidUser,
      link: '/menu/customers'
    },
    {
      title: 'Products',
      icon: FaShoppingCart,
      link: '/menu/products'
    },
    {
      title: 'Invoices',
      icon: RiBillLine,
      link: '/menu/invoices'
    },
    {
      title: 'Estimates',
      icon: FaFileInvoice,
      link: '/menu/estimates'
    },
    {
      title: 'Tickets',
      icon: BsFillTagFill,
      link: '/menu/tickets'
    },
    {
      title: 'Parts',
      icon: FaPlane,
      link: '/menu/parts'
    },
    {
      title: 'Inventory',
      icon: BiBarcodeReader,
      link: '/menu/inventory'
    },
    {
      title: 'Calendar',
      icon: FaRegCalendarAlt,
      link: '/menu/calendar'
    },
    {
      title: 'POS',
      icon: FaMoneyBillAlt,
      link: '/menu/pos'
    },
    {
      title: 'Leads',
      icon: BiSolidUserPlus,
      link: '/menu/leads'
    },
    {
      title: 'Marketers',
      icon: HiOutlineSpeakerphone,
      link: '/menu/leads'
    },
    {
      title: 'Admin',
      icon: AiFillSetting,
      link: '/menu/admin'
    },
  ]

  return (
    <div className='bg-[#333333] flex items-center'>

      <div className='flex items-center ml-1 px-20'>
        
        {headerItems.map((item, index)=>{
          return  <div key={index} className={`group items-center px-4 py-2 space-y-1 flex-col ${router.pathname === item.link ? 'bg-[#222222]': 'hover:bg-[#444444]'}`}>
            <Link href={item.link} className='cursor-pointer'>
              <item.icon className={`${router.pathname === item.link ? 'text-[#ee8e00] group-hover:text-[#ee8e00]': 'text-[#9e9e9e] '} text-[36px] mx-auto `}/>
              <span className={`${router.pathname === item.link ? 'text-[#ee8e00] group-hover:text-[#ee8e00]': 'text-[#8F8F8F] '} text-[15px] font-semibold`}>{item.title}</span>
            </Link>
          </div>
        })}
      </div>
        
    </div>
  )
}

export default LowerStatusBar