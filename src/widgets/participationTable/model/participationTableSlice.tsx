import { createSlice } from "@reduxjs/toolkit";
import { ParticipationTableSliceState } from "./types";

const initialState: ParticipationTableSliceState = {
  page: 0,
};

export const participationTableReducer = createSlice({
  name: "participationTableSlice",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
});

export const { incrementPage } = participationTableReducer.actions;

export default participationTableReducer.reducer;
