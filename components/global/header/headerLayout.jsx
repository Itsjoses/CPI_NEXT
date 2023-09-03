import React, { useContext, useState } from "react";
import Sidebar from "./sidebar";
import {
  FontColorComponent,
  PrimaryColor,
  SecondaryColor,
} from "@/components/global/globalComponent";
import {
  UilBars,
  mUilBrightnessLow,
  UilSetting,
  UilInstagram,
  UilLinkedin,
  UilFacebook,
} from "@iconscout/react-unicons";
import Footer from "./footer";
import { IconContext } from "@/context/themeComponent";
import Link from "next/link";

export default function HeaderLayout({ children }) {
  const [toggleDesktop, setToggleDesktop] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(true);

  function handleToggleDesktop() {
    setToggleDesktop((prev) => !prev);
  }
  function handleToggleMobile() {
    setToggleMobile((prev) => !prev);
  }

  const iconColor = useContext(IconContext);
  return (
    <SecondaryColor className="w-auto h-screen flex relative">
      <Sidebar
        className={`z-10 absolute ${toggleMobile ? "-left-full" : "left-0"} ${
          toggleDesktop ? `lg:w-60` : `lg:w-20`
        } ease-in-out duration-300 lg:fixed lg:left-0 h-screen py-4 px-2 overflow-hidden border-r-2 border-slate-200 `}
      />
      <div
        onMouseDown={handleToggleMobile}
        className={`${
          toggleMobile ? "hidden" : "absolute"
        } lg:hidden w-screen h-screen bg-black opacity-30`}
      ></div>
      <div
        className={`ease-in-out duration-300 ${
          toggleDesktop ? "lg:pl-60" : "lg:pl-20"
        } ml-0 w-full box-border`}
      >
        <PrimaryColor className="flex justify-between border-b-2 border-slate-200 px-6 py-4 box-border w-full">
          <div className="left">
            <UilBars
              onMouseDown={handleToggleDesktop}
              className="desktop hidden lg:block"
              style={iconColor}/>
            <UilBars
              onMouseDown={handleToggleMobile}
              className="mobile-and-tablet block lg:hidden"
              style={iconColor}/>
          </div>
          <Link href={"/participant/settings"} className="right">
            <UilSetting style={iconColor}/>
          </Link>
        </PrimaryColor>
        <SecondaryColor className="w-full box-border flex flex-col">
          {children}
          <Footer />
        </SecondaryColor>
      </div>
    </SecondaryColor>
  );
}
