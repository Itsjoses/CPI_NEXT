import React, { useState } from 'react'
import Sidebar from './sidebar'
import { SecondaryColor } from '@/components/global/globalComponent'

export default function HeaderLayout({children}) {


  const [toggle, setToggle] = useState(false)

  return (
    <SecondaryColor className='w-screen h-screen flex'>
        <Sidebar className={`fixed h-screen py-4 px-2 overflow-hidden`}/>
        <div className="ml-20 bg-black bg-black w-screen h-screen">
          <p className='text-white'>asd</p>
            {children}
        </div>
    </SecondaryColor>
  )
}
