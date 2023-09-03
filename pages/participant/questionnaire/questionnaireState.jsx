import React from 'react'
import QuestionAgree from './state/questionAgree'
import QuestionYear from './state/questionYear'
import QuestionArea from './state/questionArea'
import Question from './state/question'

export default function QuestionnaireState({currentState}) {
  return (
    <>
    {currentState == 1 ? <QuestionAgree/> : 
    currentState == 2 ? <QuestionYear/> : 
    currentState == 3 ? <QuestionArea/> :
    <Question/>}
    </>
  )
}
