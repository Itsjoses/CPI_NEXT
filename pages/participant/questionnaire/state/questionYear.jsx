import { BtnCustom } from "@/components/global/globalComponent";
import React from "react";

export default function QuestionYear() {
  return (
    <>
      <div className="text-center font-black text-2xl">
        Corruption Perception Index Questionnaire
      </div>
      <div className="text-center font-black text-xl">Let's get Started</div>
      <div className="flex items-center gap-4">
        <p>Questionnaire Year</p>
        <select className="select select-bordered select-sm ">
          <option className="text-sm">2023</option>
          <option className="text-sm">2024</option>
        </select>
      </div>
      <div className="flex gap-6">
        <BtnCustom title={"Previous"} />
        <BtnCustom title={"Continue"}  />
      </div>
    </>
  );
}
