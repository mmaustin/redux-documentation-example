import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    questionsArray: [{id: 1, question: "What is the supreme law of the land?", answer:
    "the constitution"}]
}

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        pushed: (state) => {
            state.push('pushed')
        }
    }
})

export const selectQuestions = (state) => state.questions.questionsArray;

export const {pushed} = questionsSlice.actions;

export default questionsSlice.reducer;