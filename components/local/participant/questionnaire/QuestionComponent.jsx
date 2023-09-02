import React from "react";

export function QuestionComponent({
  question,
  questionNumber,
  onChange,
  questionValueState,
}) {
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-col gap-2">
      <p>{questionNumber+1} . {question}</p>
      <div className="w-full flex">
        <div className="min-w-[12%]">Highly Disagree</div>
        <div className="w-[78%] flex justify-evenly">
          {options.map((v) => (
            <div key={v} onMouseDown={() => onChange(questionNumber, v)}>
              {questionValueState === v ? (
                <FocusButton value={v} />
              ) : (
                <NoFocusButton value={v} />
              )}
            </div>
          ))}
        </div>
        <div className="min-w-[10%]">Highly Agree</div>
      </div>
    </div>
  );
}

export function NoFocusButton({ value }) {
  return (
    <div className="h-8 w-8 rounded-full bg-cyan-200 hover:bg-cyan-400 flex justify-center items-center text-black">
      <p>{value}</p>
    </div>
  );
}

export function FocusButton({ value }) {
  return (
    <div className="h-8 w-8 rounded-full bg-cyan-800 flex justify-center items-center text-white">
      <p>{value}</p>
    </div>
  );
}
