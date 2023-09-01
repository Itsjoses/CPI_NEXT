import { BtnCustom, PrimaryColor } from "@/components/global/globalComponent";
import HeaderLayout from "@/components/global/header/headerLayout";
import React, { useState } from "react";
import QuestionYear from "./state/questionYear";
import QuestionAgree from "./state/questionAgree";
import QuestionArea from "./state/questionArea";
import { Testing } from "./state/testing";

export default function Index() {
  const [state, setState] = useState(1);

  function next() {
    setState(state + 1);
  }
  function prev() {
    setState(state - 1);
  }
  return (
    <HeaderLayout>
      {/* <div className="w-full py-12 flex justify-center items-center flex-col ">
        <PrimaryColor className="w-[80%] p-12 drop-shadow-md flex flex-col gap-8 justify-center items-center">
            <QuestionArea/>
        </PrimaryColor>
      </div> */}
      <Testing/>
    </HeaderLayout>
  );
}
