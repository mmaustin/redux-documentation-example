import React from 'react' //import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectQuestions } from './questionsSlice';
import { uppercase } from './questionsSlice';

export const QuestionsList = () => {

    const questions = useSelector(selectQuestions);
    const dispatch = useDispatch;

    const renderedQuestions = questions.map(q => (
        <div key={q.id}>
            <p onClick={dispatch(uppercase())}>Question: {q.question}</p>
            <p>Answer: {q.answer}</p>
        </div>
    ))

    return(
        <section>
            <h3>Questions and Answers</h3>
            <div>
                {renderedQuestions}
            </div>
        </section>
    )
}