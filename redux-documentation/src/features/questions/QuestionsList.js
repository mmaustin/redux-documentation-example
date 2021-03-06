import React from 'react' //import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectQuestions } from './questionsSlice';
import { pushed } from './questionsSlice';
import { nanoid } from '@reduxjs/toolkit'

export const QuestionsList = () => {

    const questions = useSelector(selectQuestions);
    const dispatch = useDispatch;

    const changeColor = (e) => {
        if(e.target.style.color === 'blue'){
            e.target.style.color = 'red'
        } else {
            e.target.style.color = 'blue'
        }
    }

    const renderedQuestions = questions.map(q => (
        <div key={q.id}>
            <p onClick={changeColor}>Question: {q.question}</p>
            <p>Answer: {q.answer}</p>
        </div>
    ))

    return(
        <section>
            <h3>Questions and Answers</h3>
            <div>
                {renderedQuestions}
            </div>
            <button onClick={() => dispatch(pushed({id: nanoid, question: 'second question', answer: 'second answer'}))}>Push Push Push</button>
        </section>
    )
}