import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  points: 0,
};

export const pointSlice = createSlice({
  name: "pointCount",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    setPoints: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const { setName, setPoints } = pointSlice.actions;

export const selectName = (state) => state.pointCount.name;

export const selectPoints = (state) => state.pointCount.points;

export default pointSlice.reducer;
