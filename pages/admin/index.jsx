import HeaderLayout from "@/components/global/header/headerLayout";
import React from "react";
import {
  UilBars,
  mUilBrightnessLow,
  UilSetting,
  UilUsersAlt 
} from "@iconscout/react-unicons";
import { PrimaryColor } from "@/components/global/globalComponent";
import { SmallCard } from "@/components/local/admin/globalAdmin/smallCard";

export default function Index() {
  return (
    <HeaderLayout>
        <div className="flex w-full p-6 header-title box-border">
          <div className="Detail w-full flex gap-4 flex-col lg:flex-row box-border">
            <div className="section-1 w-full flex gap-4 flex-col sm:flex-row">
              <SmallCard value={"300"} title="responses" icon={UilUsersAlt}/>
              <SmallCard value={"60"} title="Dimension" icon={UilUsersAlt}/>
            </div>
            <div className="section-2 w-full flex gap-4 flex-col sm:flex-row">
              <SmallCard value={"5"} title="Indicator" icon={UilUsersAlt}/>
              <SmallCard value={"640"} title="Items" icon={UilUsersAlt}/>
            </div>
          </div>
        </div>


        
    </HeaderLayout>
  );
}
