import { FontColorComponent } from "@/components/global/globalComponent";
import React from "react";

export function QuestionComponent({
  question,
  questionNumber,
  onChange,
  questionValueState,
}) {
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-col gap-4">
      <FontColorComponent className="font-bold text-lg">{questionNumber+1} . {question.name}</FontColorComponent>
      <div className="w-full flex items-center">
        <div className="min-w-[12%]"><FontColorComponent>Highly Disagree</FontColorComponent></div>
        <div className="w-[78%] flex justify-evenly items-center">
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
        <div className="min-w-[10%]"><FontColorComponent>Highly Agree</FontColorComponent></div>
      </div>
    </div>
  );
}

export function NoFocusButton({ value }) {
  return (
    <div className="h-10 w-10 rounded-full bg-cyan-200 hover:bg-cyan-400 flex justify-center items-center text-black">
      <FontColorComponent>{value}</FontColorComponent>
    </div>
  );
}

export function FocusButton({ value }) {
  return (
    <div className="h-10 w-10 rounded-full bg-cyan-700 flex justify-center items-center text-white">
      {value}
    </div>
  );
}
