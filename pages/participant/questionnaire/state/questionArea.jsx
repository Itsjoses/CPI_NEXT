import { BtnCustom, FontColorComponent, ModalOutsideClose } from "@/components/global/globalComponent";
import React, { useContext } from "react";
import { changeStateFunction, currentQuestionDataContext } from "..";
import { SelectFormQuestionnaire } from "@/components/local/participant/questionnaire/formQuesionnaireComponent";
import { restApi } from "@/api/apiTemplate";
import Cookies from "universal-cookie";

export default function QuestionArea() {
  const {next,prev} = useContext(changeStateFunction)
  const { currentQuestionData, setQuestionValue, questionValue } = useContext(
    currentQuestionDataContext
  );

  async function participantValidation(){
    const questionResponse = await restApi(
      "/auth/Response/participantValidation",
      "POST",
      {
        city_id: questionValue.cities,
        questionnaire_id: questionValue.questionnaire,
      },
      true,
      true,
      new Cookies().get("Authorization")
    ).then((response) => {
      if(response.data.message === "allowed") next()
      else{
        const modal = document.getElementById("my_modal_2");
        modal.showModal();
        const modalTitle = document.querySelector(".modal-title");
        modalTitle.textContent = "Warning";
        const modalSubTitle = document.querySelector(".modal-subtitle");
        modalSubTitle.textContent = "You Already Participate in This City and Year";
      }
    });
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center font-black text-2xl">
        <FontColorComponent>Corruption Perception Index Questionnaire</FontColorComponent>
      </div>
      <div className="text-center font-black text-xl"><FontColorComponent>Let's get Started</FontColorComponent></div>
      <div className="flex items-center gap-4">
        <FontColorComponent>Questionnaire Area</FontColorComponent>
        <SelectFormQuestionnaire
          state={questionValue}
          changeState={setQuestionValue}
          propertyType={"cities"}
          option={
            <>
              {currentQuestionData.cities.map((question) => (
                <>
                  <option className="text-sm" value={question.id} key={question.id}>
                    {question.name}
                  </option>
                </>
              ))}
            </>
          }
        />
      </div>
      <div className="flex gap-6">
        <BtnCustom title={"Previous"} setFunction={prev}/>
        <BtnCustom title={"Continue"} setFunction={participantValidation}/>
      </div>
      <ModalOutsideClose/>
    </div>
  );
}
