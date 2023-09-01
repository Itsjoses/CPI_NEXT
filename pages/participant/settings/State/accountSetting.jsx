import { PrimaryColor } from '@/components/global/globalComponent'
import { InputField, SettingFormLayout } from '@/components/local/participant/settings/formComponent'
import React from 'react'

export default function AccountSetting() {
  return (
    <SettingFormLayout label={"Edit Profile"}>
        <InputField label={"Name"} placeholdervalue={"Jose"} type={"email"} />
        <InputField label={"Current Password"} placeholdervalue={"Jose"} type={"password"} />
        <InputField label={"New Password"} placeholdervalue={"Jose"} type={"password"} />
        <InputField label={"Confirm Password"} placeholdervalue={"Jose"} type={"password"} />
    </SettingFormLayout>
  )
}
