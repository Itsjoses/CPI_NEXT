import { ThridColor } from "@/components/global/globalComponent";
import { InputField, SettingFormLayout } from "@/components/local/participant/settings/formComponent";
import React from "react";

export default function responseHistory() {
  return (
    <SettingFormLayout label={"Response History"}>
        <div className="allContent gap-3 flex flex-col">
        <div className="content ">
            <div className="top flex gap-2">
                <span>2023</span>
                <span>Questionnaire</span>
                <ThridColor className=" w-fit text-cyan-100 rounded-full text-sm flex items-center px-2">CPI Score 3 / 10</ThridColor>
            </div>
            <div className="mid">
                <span>South Kalimantan, Kabupaten Banjar</span>
            </div>
            <div className="bot">
                <span>Responded at 2023-06-15 00:21:12</span>
            </div>
      </div>

      <div className="content ">
            <div className="top flex gap-2">
                <span>2023</span>
                <span>Questionnaire</span>
                <ThridColor className=" w-fit text-cyan-100 rounded-full text-sm flex items-center px-2">CPI Score 3 / 10</ThridColor>
            </div>
            <div className="mid">
                <span>South Kalimantan, Kabupaten Banjar</span>
            </div>
            <div className="bot">
                <span>Responded at 2023-06-15 00:21:12</span>
            </div>
      </div>
        </div>

    </SettingFormLayout>
  );
}
