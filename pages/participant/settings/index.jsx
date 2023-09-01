import { PrimaryColor, SecondaryColor } from '@/components/global/globalComponent'
import HeaderLayout from '@/components/global/header/headerLayout'
import React, { useEffect, useState } from 'react'
import SettingState from './settingState'
import HeaderComponent from '@/components/local/participant/settings/headerComponent'

export default function Index() {

  const [state,setState] = useState(1)



  function ChangeState(currState){
    if(currState == state) return
    else setState(currState)
  }

  useEffect(() => {
    console.log(state);
  }, [])

  return (
    <HeaderLayout>
      <div className='w-full py-12 flex justify-center items-center flex-col'>
        <div className='w-[60%] flex gap-4'> 
          <HeaderComponent setFunction={() => ChangeState(1)}/>        
          <PrimaryColor className='w-fit p-4 font-semibold text-base border border-slate-200'>Domicili Story</PrimaryColor>
          <HeaderComponent setFunction={() => ChangeState(2)}/> 
          <HeaderComponent setFunction={() => ChangeState(3)}/> 
          <HeaderComponent setFunction={() => ChangeState(4)}/> 
        </div>
        <div className='content w-[60%] '>
            <SettingState state={state}/>
        </div>
      </div>

    </HeaderLayout>
  )
}
