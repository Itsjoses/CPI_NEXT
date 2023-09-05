import {
  BtnCustom,
  FontColorComponent,
} from "@/components/global/globalComponent";
import React, { useContext } from "react";
import { changeStateFunction, currentQuestionDataContext } from "..";
import { SettingSelectField } from "@/components/local/participant/settings/formComponent";
import { SelectFormQuestionnaire } from "@/components/local/participant/questionnaire/formQuesionnaireComponent";

export default function QuestionYear() {
  const { next, prev } = useContext(changeStateFunction);

  const { currentQuestionData, setQuestionValue, questionValue } = useContext(
    currentQuestionDataContext
  );

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center font-black text-2xl">
        <FontColorComponent>
          Corruption Perception Index Questionnaire
        </FontColorComponent>
      </div>
      <div className="text-center font-black text-xl">
        <FontColorComponent>Let's get Started</FontColorComponent>
      </div>
      <div className="flex items-center gap-4">
        <FontColorComponent>Questionnaire Year</FontColorComponent>
        <SelectFormQuestionnaire
          state={questionValue}
          changeState={setQuestionValue}
          propertyType={"questionnaire"}
          option={
            <>
              {currentQuestionData.questionnaire.map((question) => (
                <>
                  <option className="text-sm" value={question.id} key={question.id}>
                    {question.year}
                  </option>
                </>
              ))}
            </>
          }
        />
      </div>
      <div className="flex gap-6">
        <BtnCustom title={"Previous"} setFunction={prev} />
        <BtnCustom title={"Continue"} setFunction={next} />
      </div>
    </div>
  );
}
