import { QuestionComponent } from "@/components/local/participant/questionnaire/QuestionComponent";
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
  const questionsPerPage = 5;

  const handleAnswerChange = (questionNumber, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: parseInt(value),
    }));
  };

  const collectAnswers = () => {
    console.log("Semua jawaban:", answers);
  };

  //paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <div className="w-full">
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
      <div>
        {Array.from(
          { length: Math.ceil(questions.length / questionsPerPage) },
          (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
      <button onClick={collectAnswers}>Kumpulkan Jawaban</button>
    </div>
  );
}
