import { BtnCustom, FontColorComponent, ThridColor } from "@/components/global/globalComponent";
import React, { useContext } from "react";
import { changeStateFunction } from "..";

export default function QuestionAgree() {
  const {next,prev} = useContext(changeStateFunction)
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center font-black text-2xl">
        <FontColorComponent>Corruptioni Perception Index Questionnaire</FontColorComponent>
      </div>
      <div className="text-center font-black text-xl">
        <FontColorComponent>Before We Get Started</FontColorComponent>
      </div>
      <div className="text-center">
        <FontColorComponent>Before you fill this questionnaire, know that the data of your response
        will be furtherly used for Corruption Perceptions Index Calculation.
        Your response might be used for further analysis related to Corruption
        Perceptions Index. We won’t use your response outside the scope of our
        Corruption Perception Study.</FontColorComponent>
      </div>
      <div className="text-center">
        <FontColorComponent>You can response to the questions multiple times, but you can only
        response once for a city in the same year. Only cities that you have
        ever lived in can be chosen. For example, if you have lived in Jakarta
        and Bali for 2023, you can response to the questions for Jakarta and
        Bali 2023’s Questionnaire. You can’t response for Lampung 2023’s
        Questionnaire or Jakarta 2022’s Questionnaire.</FontColorComponent>
        
      </div>
      <div className="text-center">
        <FontColorComponent>All question items must be filled, and your response can’t be changed
        after submission.</FontColorComponent>
      </div>
      <BtnCustom title={"I Agree"} setFunction={next}/>
    </div>
  );
}
