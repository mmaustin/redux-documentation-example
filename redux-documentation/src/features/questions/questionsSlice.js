import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    questionsArray: [{id: 1, question: "What is the supreme law of the land?", answer:
    "the constitution"}]
}

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        pushed(state, action){
            state.push(action.payload)
        }
    }
})

export const selectQuestions = (state) => state.questions.questionsArray;

export const {pushed} = questionsSlice.actions;

export default questionsSlice.reducer;