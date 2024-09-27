import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./redux/login";
import darkModeReducer from "./redux/darkMode";
import quizReducer from "./redux/quizSlice";
import pointCountReducer from "./redux/pointCount";
import scoreboardReducer from "./redux/addToScoreboard";

export const store = configureStore({
  reducer: {
    // our slices
    login: loginReducer,
    darkMode: darkModeReducer,
    quiz: quizReducer,
    pointCount: pointCountReducer,
    scoreboard: scoreboardReducer,
  },
});

export default store;

// Osäker på hur man kombinerar flera reducers? /Åsa

// export default configureStore({
//   reducer: {
//     quiz: quizReducer
//   }
// });
