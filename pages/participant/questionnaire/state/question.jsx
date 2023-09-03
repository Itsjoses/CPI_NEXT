import { FontColorComponent } from "@/components/global/globalComponent";
import { QuestionComponent } from "@/components/local/participant/questionnaire/QuestionComponent";
import { Pagination } from "@mui/material";
import React, { useState } from "react";

function QuestionRenderer({ question, questionNumber, onChange }) {
  const options = [1, 2, 3, 4, 5]; // Opsi untuk radio button
  return (
    <div>
      <p>{question}</p>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={`question${questionNumber}`}
            value={option}
            onChange={() => onChange(questionNumber, option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default function Question() {
  const questions = [
    "Pertanyaan 1",
    "Pertanyaan 2",
    "Pertanyaan 3",
    "Pertanyaan 4",
    "Pertanyaan 5",
    "Pertanyaan 6",
    "Pertanyaan 7",
    "Pertanyaan 8",
    "Pertanyaan 9",
    "Pertanyaan 10",
    "Pertanyaan 11",
    "Pertanyaan 12",
    "Pertanyaan 13",
    "Pertanyaan 14",
    "Pertanyaan 15",
    "Pertanyaan 16",
    "Pertanyaan 17",
    "Pertanyaan 18",
    "Pertanyaan 19",
    "Pertanyaan 20",
  ]; // Daftar pertanyaan

  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  const handleAnswerChange = (questionNumber, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: parseInt(value),
    }));
  };

  const collectAnswers = (questionLength) => {
    if(Object.keys(answers).length != questionLength){
        console.log(questionLength);
        console.log(answers.length);
        console.log("belum kejawab semua");
    } 
    else{
        console.log("success");
    }
    console.log("Semua jawaban:", answers);
  };

  //paginate
  const paginate = (e, pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const paginateCount = questions.length / questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="text-3xl font-bold w-full flex justify-center"><FontColorComponent>Corruption Perception Index Questionnaire</FontColorComponent></div>
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
      <div className="flex w-full justify-between">
        <Pagination
          count={paginateCount}
          color="primary"
          page={currentPage}
          onChange={paginate}
        />
        <button onClick={() => collectAnswers(questions.length)}><FontColorComponent>Kumpulkan Jawaban</FontColorComponent></button>
      </div>
    </div>
  );
}
