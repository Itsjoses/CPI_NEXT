import React, { useContext } from "react";
import { FontColorComponent } from "../globalComponent";
import {
  UilInstagram,
  UilLinkedin,
  UilFacebook,
} from "@iconscout/react-unicons";
import { iconColor } from "@/globalValue/themeColor";
import { IconContext } from "@/context/themeComponent";
export default function Footer() {
  const iconColor = useContext(IconContext);

  return (
    <>
      <div className="footer flex flex-col w-[98%] mx-auto">
        <div className="border border-indigo-600 mx-auto w-full"></div>
        <div className="flex my-4 justify-between w-[80%] mx-auto">
          <FontColorComponent className="font-bold">
            Corruption Perception Index
          </FontColorComponent>
          <div className="">
            <FontColorComponent className="font-bold text-md">
              Contact Us
            </FontColorComponent>
            <div className="flex ">
              <UilInstagram style={iconColor} />
              <UilLinkedin style={iconColor}/>
              <UilFacebook style={iconColor}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
