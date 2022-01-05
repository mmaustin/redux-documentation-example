import React from 'react' //import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import { selectQuestions } from './questionsSlice';

export const QuestionsList = () => {

    const questions = useSelector(selectQuestions)

    const renderedQuestions = questions.map(q => (
        <article  key={q.id}>
        <p>{q.question}</p>
        <p>{q.answer}</p>
      </article>
    ))

    return(
        <>
        This will be where the questions go.
        </>
    )
}