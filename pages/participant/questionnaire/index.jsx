import { BtnCustom, PrimaryColor } from "@/components/global/globalComponent";
import HeaderLayout from "@/components/global/header/headerLayout";
import React, { createContext, useState } from "react";
import QuestionYear from "./state/questionYear";
import QuestionAgree from "./state/questionAgree";
import QuestionArea from "./state/questionArea";
import { Testing } from "./state/testing";
import Question from "./state/question";
import QuestionnaireState from "./questionnaireState";


export const changeStateFunction = createContext();

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
      <changeStateFunction.Provider value={{ next, prev }}>
        <div className="w-full py-12 flex justify-center items-center flex-col ">
          <PrimaryColor className="w-[80%] p-12 drop-shadow-md flex flex-col gap-8 justify-center items-center">
            <QuestionnaireState currentState={state} />
          </PrimaryColor>
        </div>
      </changeStateFunction.Provider>
    </HeaderLayout>
  );
}
