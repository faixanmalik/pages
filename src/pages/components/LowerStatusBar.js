import { React, Fragment } from 'react'
import { BiBarcodeReader, BiSolidUser } from 'react-icons/bi';
import { BsFillTagFill } from 'react-icons/bs';
import { FaFileInvoice, FaMoneyBillAlt, FaPlane, FaRegCalendarAlt, FaShoppingCart } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { AiFillSetting, AiOutlineFilePdf } from 'react-icons/ai';
import { RiBillLine } from 'react-icons/ri';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const LowerStatusBar = () => {

  const router = useRouter();

  let headerItems = [
    {
      title: 'Customers',
      icon: BiSolidUser,
      link: '/menu/customers'
    },
    {
      title: 'Barcode',
      icon: BiBarcodeReader,
      type: 'dropdown',
      subMenu: [
        {
          subMenuTitle: 'Barcode Products',
          link: '/menu/barcode-products',
        },
        {
          subMenuTitle: 'Barcode Search',
          link: '/menu/barcode-search',
        },
      ]
    },
    {
      title: 'Products',
      icon: FaShoppingCart,
      link: '/menu/products'
    },
    {
      title: 'Tickets',
      icon: BsFillTagFill,
      link: '/menu/tickets'
    },
    {
      title: 'Pdf Forms',
      icon: AiOutlineFilePdf,
      link: '/menu/pdfForms'
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
      title: 'Parts',
      icon: FaPlane,
      link: '/menu/parts'
    },
    {
      title: 'Calendar',
      icon: FaRegCalendarAlt,
      link: '/menu/calendar'
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
    <div className='bg-[#333333] px-16 2xl:px-40 flex items-center'>

      <div className='flex items-center ml-1 px-10'>
        {headerItems.map((item, index)=>{
          if(item.type === 'dropdown'){

            let menuItem = item.subMenu;

            return <Menu key={index} as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className={`group items-center px-4 py-2 space-y-1 flex-col ${router.pathname === item.link|| item.subMenu.some((subItem) => subItem.link === router.pathname) ? 'bg-[#222222]': 'hover:bg-[#444444]'}`}>
                <item.icon className={`${router.pathname === item.link || item.subMenu.some((subItem) => subItem.link === router.pathname) ? 'text-[#ee8e00] group-hover:text-[#ee8e00]': 'text-[#9e9e9e] '} text-[36px] mx-auto `}/>
                <span className={`${router.pathname === item.link || item.subMenu.some((subItem) => subItem.link === router.pathname) ? 'text-[#ee8e00] group-hover:text-[#ee8e00]': 'text-[#8F8F8F] '} text-[15px] font-semibold`}>{item.title}</span>
              </Menu.Button>
            </div>
      
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">

                  {menuItem.map((menu, index)=>{
                    return <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        href={menu.link}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm font-semibold'
                        )}
                      >
                        {menu.subMenuTitle}
                      </Link>
                    )}
                  </Menu.Item>
                  })}

                </div>
              </Menu.Items>
              
            </Transition>
          </Menu>

          }
          else{
            return  <div key={index} className={`group items-center px-4 py-2 space-y-1 flex-col ${router.pathname === item.link ? 'bg-[#222222]': 'hover:bg-[#444444]'}`}>
              <Link href={item.link} className='cursor-pointer'>
                <item.icon className={`${router.pathname === item.link ? 'text-[#ee8e00] group-hover:text-[#ee8e00]': 'text-[#9e9e9e] '} text-[36px] mx-auto `}/>
                <span className={`${router.pathname === item.link ? 'text-[#ee8e00] group-hover:text-[#ee8e00]': 'text-[#8F8F8F] '} text-[15px] font-semibold`}>{item.title}</span>
              </Link>
            </div>
          }
        })}
      </div>
    </div>

    
  )
}

export default LowerStatusBar