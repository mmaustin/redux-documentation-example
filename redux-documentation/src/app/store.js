import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import questionsReducer from '../features/questions/questionsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    questions: questionsReducer
  },
});
/*
1) ConfigureStore takes a reducer object as an argument.
2) The counterReducer entity appears to not care what its name is.  It appears to be the
export default couterSlice.reducer from counterSlice.js.
*/