import { restApi } from '@/api/apiTemplate'
import { BigBtn, PrimaryColor } from '@/components/global/globalComponent'
import { SettingFormLayout, SettingInputField } from '@/components/local/participant/settings/formComponent'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie'

export default function ChangePasswordSetting() {
  const [currentUser,setCurrentUser] = useState({})
  const route = useRouter()

  async function HandleChangePassword(){
    const result = await restApi(
      "/auth/user/changePassword",
      "POST",
      {
        currPassword: currentUser.currPassword,
        newPassword: currentUser.newPassword,
        confPassword: currentUser.confPassword
      },
      true,
      true,
      new Cookies().get("Authorization")
    ).then(response => {
      console.log(response);
      if (response.success) {
        // Handle success 
        toast.success(response.data)
        route.push("/participant/");
      } else {
        // Handle error
        console.log(response);
        toast.error(response.raw.message)
      }
    })


  }

  return (
    <SettingFormLayout label={"Edit Profile"} >
      <div className='flex gap-4 flex-col'>
        <SettingInputField label={"Current Password"} placeholdervalue={"Current Password"} type={"password"} state={currentUser} changeState={setCurrentUser}
  propertyType={"currPassword"}/>
        <SettingInputField label={"New Password"} placeholdervalue={"New Password"} type={"password"}  state={currentUser} changeState={setCurrentUser}
  propertyType={"newPassword"}/>
        <SettingInputField label={"Confirm Password"} placeholdervalue={"Current Password"} type={"password"} state={currentUser} changeState={setCurrentUser}
  propertyType={"confPassword"} />
        <BigBtn title={"Update"} className="my-4" setFunction={HandleChangePassword}></BigBtn>
      </div>
    </SettingFormLayout>
  )
}
