import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EarlyAccessState } from "./types";
import { User } from "@/entities";

const initialState: EarlyAccessState = {
  user: null,
};

export const earlyAccessSlice = createSlice({
  name: "earlyAccessSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, deleteUser } = earlyAccessSlice.actions;
export const EarlyAccessReducer = earlyAccessSlice.reducer;
