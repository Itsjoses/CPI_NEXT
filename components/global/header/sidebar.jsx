import React from "react";
import {
  UilCreateDashboard,
  UilUser,
  UilPen,
  UilFileGraph,
  UilMap,
  UilFileQuestionAlt,
  UilSignout 
} from "@iconscout/react-unicons";
import { NavbarButton } from "./sidebarComponent";
import {
  FontColorComponent,
  PrimaryColor,
  ThridColor,
} from "../globalComponent";
import Link from "next/link";
import { restApi } from "@/api/apiTemplate";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
export default function Sidebar({ ...attr }) {
  const router = useRouter()
  async function logout(){
    restApi("/auth/logout","POST",null,true,true,new Cookies().get("Authorization")).then(()=>{
      router.push("/")
    })
  }
  return (
    <PrimaryColor {...attr}>
      <div className="h-full w-full flex flex-col ">
        <div className="Title-container h-12 w-full flex items-center mb-12">
          <div className="min-w-16 flex justify-center items-center box-border">
            <ThridColor className="text-white font-black text-md rounded-md p-2">
              CPI
            </ThridColor>
          </div>
          <div className="min-w-32 h-full leading-4 flex flex-col justify-center ml-2">
            <FontColorComponent className="font-bold">
              Corruption
            </FontColorComponent>
            <FontColorComponent className="font-thin">
              Perception Index
            </FontColorComponent>
          </div>
        </div>

        <div className="top-bottom flex flex-col justify-between box-border h-full">
          <div className="nav-container w-full flex flex-col">
            {/* <NavbarButton
              icon={<UilCreateDashboard></UilCreateDashboard>}
              text={"Dashboard"}
            />

            <NavbarButton
              icon={<UilUser></UilUser>}
              text={"Participant"}
            />
            <NavbarButton
              icon={<UilPen></UilPen>}
              text={"Questionnaire"}
            />
            <NavbarButton
              icon={<UilFileGraph></UilFileGraph>}
              text={"Responses"}
            />
            <NavbarButton
              icon={<UilCreateDashboard></UilCreateDashboard>}
              text={"Dashboard"}
            />
            <NavbarButton
              icon={<UilCreateDashboard></UilCreateDashboard>}
              text={"Dashboard"}
            /> */}

            <Link href="/participant/">
              <NavbarButton
                icon={<UilCreateDashboard></UilCreateDashboard>}
                text={"Home"}
              />
            </Link>

            <Link href="/participant/questionnaire">
              <NavbarButton
                icon={<UilFileQuestionAlt />}
                text={"Questionaire"}
              />
            </Link>

            <Link href="/participant/maps">
              <NavbarButton
                icon={<UilMap />}
                text={"Maps"}
              />
            </Link>
          </div>

          <div className="nav-bottom" onMouseDown={logout}>
            <NavbarButton
              icon={<UilSignout></UilSignout>}
              text={"Logout"}
            />
          </div>
        </div>
      </div>
    </PrimaryColor>
  );
}
