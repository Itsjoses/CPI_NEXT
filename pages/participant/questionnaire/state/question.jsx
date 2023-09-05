import {
  BigBtn,
  BtnCustom,
  FontColorComponent,
  Modal,
} from "@/components/global/globalComponent";
import { QuestionComponent } from "@/components/local/participant/questionnaire/QuestionComponent";
import { Pagination } from "@mui/material";
import React, { useContext, useState } from "react";
import { currentQuestionDataContext, questionsDataContext } from "..";
import Cookies from "universal-cookie";
import { restApi } from "@/api/apiTemplate";

export default function Question() {
  const questions = useContext(questionsDataContext);
  const { currentQuestionData, setQuestionValue, questionValue } = useContext(
    currentQuestionDataContext
  );
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  const handleAnswerChange = (questionNumber, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: parseInt(value),
    }));
  };

  const RandomAnswer = ()=>{
    const randomAnswers = {};

    for (let i = 0; i < 638; i++) {
      const randomValue = Math.floor(Math.random() * 11);
      randomAnswers[i] = randomValue;
      setAnswers(randomAnswers);
    }
  }

  const collectAnswers = async () => {
    console.log(questionValue);
    if (Object.keys(answers).length != questions.length) {
      console.log("belum kejawab semua");
    } else {
      console.log("success");
      const questionResponse = await restApi(
        "/auth/Response/store ",
        "POST",
        {
          city_id: questionValue.cities,
          questionnaire_id: questionValue.questionnaire,
          answers: answers,
        },
        true,
        true,
        new Cookies().get("Authorization")
      ).then((response) => {
        console.log(response);
        const score = response.data.score;
      const modal = document.getElementById("my_modal_5");
      modal.showModal();
      const modalTitle = document.querySelector(".modal-title");
      modalTitle.textContent = "Your CPI Score is: " + score;
      const modalSubTitle = document.querySelector(".modal-subtitle");
      modalSubTitle.textContent = "Thankyou For Your Participation";
      });
    }
  };

  //paginate
  const paginate = (e, pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const paginateCount = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="text-3xl font-bold w-full flex justify-center">
        <FontColorComponent>
          Corruption Perception Index Questionnaire
        </FontColorComponent>
      </div>
      <div className="flex flex-col gap-4">
        {currentQuestions.map((question, index) => (
          <QuestionComponent
            key={index}
            question={question}
            questionNumber={indexOfFirstQuestion + index}
            onChange={handleAnswerChange}
            questionValueState={answers[indexOfFirstQuestion + index]}
          />
        ))}
      </div>
      <div className="flex w-full justify-between items-center">
        <Pagination
          count={paginateCount}
          color="primary"
          page={currentPage}
          onChange={paginate}
        />
        <BigBtn title={"Kumpul Jawaban"} setFunction={() => RandomAnswer()}>
          Random Value
        </BigBtn>
        <BigBtn title={"Kumpul Jawaban"} setFunction={() => collectAnswers()}>
          Kumpulkan Jawaban
        </BigBtn>
        {/* <button onClick={() => collectAnswers(questions.length)}><FontColorComponent>Kumpulkan Jawaban</FontColorComponent></button> */}
      </div>
      <Modal />

    </div>
  );
}
