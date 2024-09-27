import { createSlice } from "@reduxjs/toolkit";
import quizData from "@/data/quizData";

const initialState = {
  quizData: quizData,
  editingQuestion: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizData(state, action) {
      state.quizData = action.payload;
    },
    setEditingQuestion(state, action) {
      state.editingQuestion = action.payload;
    },

    addQuestion(state, action) {
      const newQuestion = {
        id: state.quizData.length + 1,
        question: "New Question",
        options: [
          { answer: "Option 1", isCorrect: false },
          { answer: "Option 2", isCorrect: false },
          { answer: "Option 3", isCorrect: false },
          { answer: "Option 4", isCorrect: false },
        ],
      };
      state.quizData.push(newQuestion);
      state.editMode = true;
    },

    editQuestion(state, action) {
      const { id, updatedQuestion } = action.payload;
      state.quizData = state.quizData.map((question) =>
        question.id === id ? updatedQuestion : question
      );
    },
    deleteQuestion(state, action) {
      const id = action.payload;
      state.quizData = state.quizData.filter((item) => item.id !== id);
    },
  },
});

export const {
  setQuizData,
  setEditingQuestion,
  addQuestion,
  editQuestion,
  deleteQuestion,
} = quizSlice.actions;

export const selectQuizData = (state) => state.quiz.quizData;

export default quizSlice.reducer;
