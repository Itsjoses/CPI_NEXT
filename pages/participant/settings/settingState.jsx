import { PrimaryColor } from "@/components/global/globalComponent";
import {
  InputField,
  SelectField,
} from "@/components/local/participant/settings/formComponent";
import ResponseHistroy from "./State/responseHistory"
import ViewPointData from "./State/viewPointData"
import EditProfile from "./State/editProfile"
import React from "react";
import ChangePasswordSetting from "./State/accountSetting";

export default function SettingState({state}) {
  console.log(state);
  return (
    <div>
        {(state == 1) ? <EditProfile/> :
        (state == 2) ? <ChangePasswordSetting/> :
        <></>}
    </div>
  );
}
