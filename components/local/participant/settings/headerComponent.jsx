import { PrimaryColor } from '@/components/global/globalComponent'
import React from 'react'

export default function HeaderComponent({setFunction}) {
  return (
    <PrimaryColor >
    <div className='w-fit p-4 font-semibold text-base border border-slate-200' onMouseDown={setFunction}>
      Edit Profile
    </div>
  </PrimaryColor>
  )
}
