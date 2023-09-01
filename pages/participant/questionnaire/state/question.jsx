import React from 'react'

export default function Question() {
    const questions = ['Pertanyaan 1', 'Pertanyaan 2', 'Pertanyaan 3', 'Pertanyaan 4', 'Pertanyaan 5', 'Pertanyaan 6', 'Pertanyaan 7', 'Pertanyaan 8', 'Pertanyaan 9', 'Pertanyaan 10', 'Pertanyaan 11', 'Pertanyaan 12', 'Pertanyaan 13', 'Pertanyaan 14', 'Pertanyaan 15', 'Pertanyaan 16', 'Pertanyaan 17', 'Pertanyaan 18', 'Pertanyaan 19', 'Pertanyaan 20']; // Daftar pertanyaan

    const [answers, setAnswers] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 5;

    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleAnswerChange = (questionNumber, value) => {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          [questionNumber]: parseInt(value),
        }));
      };

  return (
    <>
      
    </>
  )
}
