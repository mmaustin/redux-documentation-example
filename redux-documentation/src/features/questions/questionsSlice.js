import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questionsArray: [{id: 1, question: "What is the supreme law of the land?", answer:
    "the constitution"}]
}

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        uppercase: (state) => {
            state.questionsArray.map(q => {
                return q.question.toUpperCase();
            })
        }
    }
})

export const selectQuestions = (state) => state.questions.questionsArray;

//export const {} = questionsSlice.actions;

export default questionsSlice.reducer;