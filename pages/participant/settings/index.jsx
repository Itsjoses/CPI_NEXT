import { PrimaryColor, SecondaryColor } from '@/components/global/globalComponent'
import HeaderLayout from '@/components/global/header/headerLayout'
import React, { createContext, useContext, useEffect, useState } from 'react'
import SettingState from './settingState'
import HeaderComponent from '@/components/local/participant/settings/headerComponent'
import { userContext } from '@/context/userComponent'

export const currentUserContext = createContext()

export default function SettingLayout({children}) {

  // const [state,setState] = useState(currState)
  const {user, setUser } = useContext(userContext);
  const [currentUser,setCurrentUser] = useState(user)
  
  // function ChangeState(currState){
  //   if(currState == state) return
  //   else setState(currState)
  // }



  return (
    <HeaderLayout>
      <div className='w-full py-12 flex justify-center items-center flex-col'>
        {/* <div className='w-[60%] flex gap-4'> 
          <HeaderComponent setFunction={() => ChangeState(1)} title={"Edit Profile"}/>   
          <HeaderComponent setFunction={() => ChangeState(2)} title={"Domicili Story"}/> 
          <HeaderComponent setFunction={() => ChangeState(3)} title={"Change Password"}/> 
          <HeaderComponent setFunction={() => ChangeState(4)} title={"testing"}/> 
          <HeaderComponent setFunction={() => ChangeState(5)} title={"testing"}/> 
        </div> */}
        <div className='content w-[60%] '>
          <currentUserContext.Provider value={{currentUser,setCurrentUser}}>

            {children}
          </currentUserContext.Provider>
        </div>
      </div>

    </HeaderLayout>
  )
}
