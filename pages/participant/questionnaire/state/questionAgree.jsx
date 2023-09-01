import { BtnCustom } from "@/components/global/globalComponent";
import React from "react";

export default function QuestionAgree() {
  return (
    <>
      <div className="text-center font-black text-2xl">
        Corruptioni Perception Index Questionnaire
      </div>
      <div className="text-center font-black text-xl">
        Before We Get Started
      </div>
      <div className="text-center">
        Before you fill this questionnaire, know that the data of your response
        will be furtherly used for Corruption Perceptions Index Calculation.
        Your response might be used for further analysis related to Corruption
        Perceptions Index. We won’t use your response outside the scope of our
        Corruption Perception Study.
      </div>
      <div className="text-center">
        You can response to the questions multiple times, but you can only
        response once for a city in the same year. Only cities that you have
        ever lived in can be chosen. For example, if you have lived in Jakarta
        and Bali for 2023, you can response to the questions for Jakarta and
        Bali 2023’s Questionnaire. You can’t response for Lampung 2023’s
        Questionnaire or Jakarta 2022’s Questionnaire.
      </div>
      <div className="text-center">
        All question items must be filled, and your response can’t be changed
        after submission.
      </div>
      <BtnCustom title={"I Agree"}/>
    </>
  );
}
