import Layout from "@/components/Layout";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEditingQuestion,
  editQuestion,
  deleteQuestion,
  addQuestion,
} from "@/redux/quizSlice";
import React from "react";

export default function Admin() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.quizData)
    .slice()
    .reverse();

  const darkMode = useSelector((state) => state.darkMode);
  const [editMode, setEditMode] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(null);

  //-------Edit functions------//
  const handleEditClick = (question) => {
    setEditedQuestion({ ...question });
    setEditMode(true);
  };

  const handleDeleteClick = (questionId) => {
    dispatch(deleteQuestion(questionId));
  };

  const handleSaveEdit = () => {
    dispatch(
      editQuestion({ id: editedQuestion.id, updatedQuestion: editedQuestion })
    );
    setEditMode(false);
    setEditedQuestion(null);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleOptionChange = (optionIndex, e) => {
    const { value } = e.target;
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      options: prevQuestion.options.map((option, index) =>
        index === optionIndex ? { ...option, answer: value } : option
      ),
    }));
  };

  const handleCorrectOptionChange = (optionIndex) => {
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      options: prevQuestion.options.map(
        (option, index) =>
          index === optionIndex
            ? { ...option, isCorrect: true } // Set the current option to true
            : { ...option, isCorrect: false } // Set all other options to false
      ),
    }));
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: "New Question",
      options: [
        { answer: "Option 1", isCorrect: false },
        { answer: "Option 2", isCorrect: false },
        { answer: "Option 3", isCorrect: false },
        { answer: "Option 4", isCorrect: false },
      ],
    };

    dispatch(addQuestion());
    setEditedQuestion({ ...newQuestion });
    setEditMode(true);
  };

  return (
    <>
      <Layout>
        <div>
          <h1 className="text-2xl font-thin  mb-4 mt-10">Admin page</h1>

          <div className="mt-4 mb-4">
            <button
              className={` ${
                darkMode
                  ? "border-cyan-500 text-cyan-300"
                  : " border-green-500 text-green-600"
              }                 
               border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
              onClick={handleAddQuestion}
            >
              + Add Question
            </button>
          </div>

          <div className="flex-col">
            {questions.map((item, index) => (
              <div
                className={`${
                  darkMode
                    ? "bg-sky-950"
                    : " bg-[#abe8c0] border-solid border border-green-200"
                } md:w-[400px] md:max-w-[400px] text-[14px] md:text-[16px] p-8 mb-8 rounded-xl relative max-w-[300px]`}
                key={index}
                id={item.id}
              >
                {editMode && editedQuestion && editedQuestion.id === item.id ? (
                  <div>
                    <input
                      className="w-full mb-2 rounded-lg py-1 pl-2 border-none"
                      type="text"
                      name="question"
                      value={editedQuestion.question}
                      onChange={handleInputChange}
                    />
                    <ul className="list-none">
                      {editedQuestion.options.map((option, optionIndex) => (
                        <li key={optionIndex} className="mb-2  ">
                          <input
                            className="rounded-lg py-1 pl-2 border-none  w-[200px]"
                            type="text"
                            value={option.answer}
                            onChange={(e) => handleOptionChange(optionIndex, e)}
                          />
                          <input
                            className="ml-2 w-8 rounded checked:text-yellow-500"
                            type="radio"
                            name="correctOption"
                            checked={option.isCorrect}
                            onChange={() =>
                              handleCorrectOptionChange(optionIndex)
                            }
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 space-x-2">
                      <button
                        className={` ${
                          darkMode
                            ? "border-emerald-500 text-emerald-400"
                            : "border-green-600 text-green-700"
                        }                 
border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        className={` ${
                          darkMode
                            ? "border-emerald-500 text-emerald-400"
                            : "border-green-600 text-green-700"
                        }                 
border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="mb-4 max-w-[380px]">{item.question}</p>
                    <div className="hidden md:flex text-green-600 text-[16px] opacity-60 absolute top-4 right-4 space-x-2">
                      id{item.id}{" "}
                    </div>
                    <ul className="list-none">
                      {item.options.map((option, optionIndex) => (
                        <li
                          key={optionIndex}
                          className={option.isCorrect ? "font-bold" : ""}
                        >
                          {option.answer} {option.isCorrect ? "(correct)" : ""}
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-4 right-4 space-x-2">
                      <button
                        className={` ${
                          darkMode
                            ? "border-emerald-500 text-emerald-400"
                            : "border-green-600 text-green-700"
                        }                 
                 border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </button>
                      <button
                        className={` ${
                          darkMode
                            ? "border-red-500 text-red-400"
                            : "border-red-600 text-red-700"
                        }                 
                 border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
                        onClick={() => handleDeleteClick(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

// {
//     id: 1,
//     question: "What is the capital of France?",
//     options: [
//       { answer: "London", isCorrect: false },
//       { answer: "Berlin", isCorrect: false },
//       { answer: "Paris", isCorrect: true },
//       { answer: "Rome", isCorrect: false },
//     ],
//   },
