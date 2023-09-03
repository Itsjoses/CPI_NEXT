import { BtnCustom, FontColorComponent } from "@/components/global/globalComponent";
import React, { useContext } from "react";
import { changeStateFunction } from "..";

export default function QuestionYear() {
  const {next,prev} = useContext(changeStateFunction)
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center font-black text-2xl">
        <FontColorComponent>Corruption Perception Index Questionnaire</FontColorComponent>
      </div>
      <div className="text-center font-black text-xl"><FontColorComponent>Let's get Started</FontColorComponent></div>
      <div className="flex items-center gap-4">
        <FontColorComponent>Questionnaire Year</FontColorComponent>
        <select className="select select-bordered select-sm ">
          <option className="text-sm">2023</option>
          <option className="text-sm">2024</option>
        </select>
      </div>
      <div className="flex gap-6">
        <BtnCustom title={"Previous"} setFunction={prev}/>
        <BtnCustom title={"Continue"}  setFunction={next}/>
      </div>
    </div>
  );
}
