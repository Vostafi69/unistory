import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EarlyAccessState } from "./types";
import { User } from "@/entities";

const initialState: EarlyAccessState = {
  user: null,
  isListed: false,
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
    addTolist: (state) => {
      state.isListed = true;
    },
    removeFromList: (state) => {
      state.isListed = false;
    },
  },
});

export const { setUser, deleteUser, addTolist, removeFromList } =
  earlyAccessSlice.actions;
export const EarlyAccessReducer = earlyAccessSlice.reducer;
