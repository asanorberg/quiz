import { createSlice } from "@reduxjs/toolkit";
import playerScores from "@/data/playerScores";

const initialState = {
  playerScores: playerScores,
};

export const scoreboardSlice = createSlice({
  name: "scoreboard",
  initialState,
  reducers: {
    addScoreToScoreboard: (state, action) => {
      const { name, score } = action.payload;
      const newScores = [...state.playerScores, { name, score }];

      return {
        ...state,
        playerScores: newScores.sort((a, b) => b.score - a.score),
      };
      //   state.playerScores.push({ name, score });
      //   state.playerScores.sort((a, b) => b.score - a.score);
    },
  },
});

export const { addScoreToScoreboard } = scoreboardSlice.actions;

export const selectPlayerScores = (state) => state.scoreboard.playerScores;

export default scoreboardSlice.reducer;
