import { PrimaryColor } from "@/components/global/globalComponent";
import HeaderLayout from "@/components/global/header/headerLayout";
import React, { createContext, useEffect, useState } from "react";
import QuestionnaireState from "./questionnaireState";
import { restApi } from "@/api/apiTemplate";
import Cookies from "universal-cookie";
import LoadDataComponent from "@/components/global/loadDataComponent";

export const changeStateFunction = createContext();
export const currentQuestionDataContext = createContext();
export const questionsDataContext = createContext();

export default function Index() {
  const [state, setState] = useState(1);
  const [questionValue, setQuestionValue] = useState("");
  const [currentQuestionData, setCurrentQuestionData] = useState();
  const [questionsData, setQuestionsData] = useState();
  useEffect(() => {
    async function firstCall() {
      console.log("testing");
      const citiesResponse = await restApi(
        "/auth/user/getUserCities",
        "GET",
        null,
        true,
        true,
        new Cookies().get("Authorization")
      );

      const questionnaireResponse = await restApi(
        "/auth/user/getQuestionnaire",
        "GET",
        null,
        true,
        true,
        new Cookies().get("Authorization")
      );

      const questionResponse = await restApi(
        "/auth/user/getQuestion",
        "GET",
        null,
        true,
        true,
        new Cookies().get("Authorization")
      );

      const citiesData = citiesResponse.data.data;
      const questionnaireData = questionnaireResponse.data.data;
      const questionData = questionResponse.data.data;
      console.log(questionnaireData);
      setCurrentQuestionData({
        cities: citiesData,
        questionnaire: questionnaireData,
      });
      setQuestionsData(questionData);
      setQuestionValue({
        cities: citiesData[0].id,
        questionnaire: questionnaireData[0].id,
      });
    }
    firstCall();
  }, []);

  useEffect(() => {
    return () => {
      console.log(questionValue);
    };
  }, [questionValue]);

  function next() {
    setState(state + 1);
  }
  function prev() {
    setState(state - 1);
  }

  return (
    <HeaderLayout>
      <LoadDataComponent data={currentQuestionData}>
        <currentQuestionDataContext.Provider
          value={{
            currentQuestionData,
            setQuestionValue,
            questionValue,
          }}
        >
          <questionsDataContext.Provider value={questionsData}>
            <changeStateFunction.Provider value={{ next, prev }}>
              <div className="w-full py-12 flex justify-center items-center flex-col ">
                <PrimaryColor className="w-[80%] p-12 drop-shadow-md flex flex-col gap-8 justify-center items-center">
                  <QuestionnaireState currentState={state} />
                </PrimaryColor>
              </div>
            </changeStateFunction.Provider>
          </questionsDataContext.Provider>
        </currentQuestionDataContext.Provider>
      </LoadDataComponent>
    </HeaderLayout>
  );
}
