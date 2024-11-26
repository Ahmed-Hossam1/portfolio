import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  isDark: boolean;
}

const initialState: CounterState = {
  isDark: false,
};

export const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { toggleDarkMode } = DarkModeSlice.actions;

export default DarkModeSlice.reducer;
