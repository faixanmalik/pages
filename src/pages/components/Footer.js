import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { IoIosWifi } from 'react-icons/io'

const Footer = () => {

  let links = [
    {
      name: 'About',
      href: '#'
    },
    {
      name: 'Need Help?',
      href: '#'
    },
    {
      name: 'Content Guide',
      href: '#'
    },
    {
      name: 'Lifehacker Store',
      href: '#'
    },
    {
      name: 'Privacy',
      href: '#'
    },
    {
      name: 'Terms of Use',
      href: '#'
    },
    {
      name: 'Advertising',
      href: '#'
    },
    {
      name: 'Jobs',
      href: '#'
    },
  ]
  return (
    <>
    <div className='p-10 bg-[#222222]'>
        <div className='flex flex-col space-y-5'>
            <div className='flex space-x-3 justify-center'>
              <div className='bg-[#1877f2] rounded-full p-2'>
                <FaFacebookF className=''/>
              </div>
              <div className='bg-[#1da1f2] rounded-full p-2'>
                <AiOutlineTwitter className=''/>
              </div>
              <div className='bg-[#c32aa3] rounded-full p-2'>
                <BsInstagram className=''/>
              </div>
              <div className='bg-[#ff0000] rounded-full p-2'>
                <AiFillYoutube className=''/>
              </div>
              <div className='bg-[#7a7a7a] rounded-full p-2'>
                <IoIosWifi className=''/>
              </div>
            </div>
            <div className='flex space-x-10 justify-center'>
              {links.map((item, index)=>{
                return <div key={index}>
                <Link href={item.href} className='text-sm font-semibold text-[#525252]'>{item.name}</Link>
              </div>
              })}
            </div>

            <h1 className='text-sm pt-6 font-semibold text-[#525252] text-center'>More from our network</h1>
            <div className='flex space-x-3 text-[#525252] justify-center'>
              <FaFacebookF className='text-lg'/>
              <AiOutlineTwitter className='text-lg'/>
              <BsInstagram className='text-lg'/>
              <AiFillYoutube className='text-lg'/>
              <IoIosWifi className='text-lg'/>
              <FaFacebookF className='text-lg'/>
              <AiOutlineTwitter className='text-lg'/>
              <BsInstagram className='text-lg'/>
              <AiFillYoutube className='text-lg'/>
              <IoIosWifi className='text-lg'/>
            </div>
            <h1 className='text-sm pt-6 font-semibold text-[#525252] text-center'>
              © 2023 
              <Link href={'#'} className='text-[#254a64] ml-1'>GO Media Inc</Link>
            </h1>
            
        </div>
    </div>
    </>
  )
}

export default Footer