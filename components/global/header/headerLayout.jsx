import React, { useState } from 'react'
import Sidebar from './sidebar'
import { PrimaryColor, SecondaryColor } from '@/components/global/globalComponent'
import {
  UilBars,
  mUilBrightnessLow,
  UilSetting,
  UilInstagram ,
  UilLinkedin ,
  UilFacebook 
} from "@iconscout/react-unicons";

export default function HeaderLayout({children}) {


  const [toggleDesktop, setToggleDesktop] = useState(true)
  const [toggleMobile, setToggleMobile] = useState(true)

  function handleToggleDesktop(){setToggleDesktop(prev => !prev)}
  function handleToggleMobile(){setToggleMobile(prev => !prev)}

  return (
    <SecondaryColor className='w-auto h-screen flex relative'>
        <Sidebar className={`z-10 absolute ${toggleMobile ? '-left-full' : 'left-0'} ${toggleDesktop ? `lg:w-60` : `lg:w-20`} ease-in-out duration-300 lg:fixed lg:left-0 h-screen py-4 px-2 overflow-hidden border-r-2 border-slate-200 `}/>
        <div onMouseDown={handleToggleMobile} className={`${toggleMobile ? 'hidden' : 'absolute'} lg:hidden w-screen h-screen bg-black opacity-30`}>
        </div>
        <div className={`ease-in-out duration-300 ${toggleDesktop ? 'lg:pl-60' : 'lg:pl-20'} ml-0 w-full box-border`}>
            <PrimaryColor className="flex justify-between border-b-2 border-slate-200 px-6 py-4 box-border w-full">
              <div className='left'>
              <UilBars onMouseDown={handleToggleDesktop} className='desktop hidden lg:block'/>
              <UilBars onMouseDown={handleToggleMobile} className='mobile-and-tablet block lg:hidden'/>
              </div>
              <div className="right">
                <mUilBrightnessLow />
                <UilSetting />
              </div>
            </PrimaryColor>
            <SecondaryColor className="w-full box-border flex flex-col">
              {children}
              <div className='footer flex flex-col w-[98%] mx-auto'>
               <div className='border border-indigo-600 mx-auto w-full'></div>
              <div className='flex my-4 justify-between w-[80%] mx-auto'>
                <p className='font-bold'>Corruption Perception Index</p>
                <div className=''>
                  <p className='font-bold text-md'>Contact Us</p>
                  <div className='flex '>
                    <UilInstagram className="h-auto w-6"/>
                    <UilLinkedin/>
                    <UilFacebook/> 
                  </div>
                </div>
              </div>
            </div>  
            </SecondaryColor>
            
        </div>
    </SecondaryColor>
  )
}
