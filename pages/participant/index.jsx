import HeaderLayout from "@/components/global/header/headerLayout";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import waveman from "@/public/images/business-3d-businessman-in-dark-blue-suit-waving-hello.png";
import styles from "@/styles/participant/index.module.css";
import { ThemeContext } from "@/context/themeComponent";
import { FontColorComponent } from "@/components/global/globalComponent";
import { langauge } from "@/globalValue/language";
import { userContext } from "@/context/userComponent";
export default function Index() {
  const theme = useContext(ThemeContext);
  const {user, setUser } = useContext(userContext);
  return (
    <HeaderLayout>
        <div className="Jumbotron flex w-full h-[80vh]">
          <div className="Left-Content w-3/5 h-full flex justify-center box-border flex-col ">
            <div className="w-full flex justify-center mb-8">
              <div className={`w-4/5 ${styles.borderCustom}`}>
                  <FontColorComponent className="font-black text-6xl my-8">{langauge.en.LetsEradicateCorruption}</FontColorComponent>
                  <FontColorComponent className=" text-xl font-medium my-8">Your participation filling the questionnaire of corruption
                  perspective is a precious contribution for corruption
                  eradication in Indonesia.</FontColorComponent>
             
              </div>
            </div>
            <div className={`mx-auto w-4/5 relative`}>
              <button
                style={theme.thirdColor}
                className={`${styles.buttonCustom} py-2 px-4 mt-2 rounded-md text-white text-start h-full`}
              >
                Fill Questionaire Here
              </button>
            </div>
          </div>
          <div
            className={`Right-Content w-2/5 flex justify-center items-center`}
          >
            <Image alt="homeImage" src={waveman} className={`h-3/5 w-auto`} />
          </div>
        </div>
    </HeaderLayout>
  );
}
