import React from 'react' //import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import { selectQuestions } from './questionsSlice';

export const QuestionsList = () => {

    const questions = useSelector(selectQuestions)

    

    return(
        <>
        This will be where the questions go.
        </>
    )
}