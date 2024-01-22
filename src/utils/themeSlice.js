import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeMode: "light",
  },
  reducers: {
    addDarkTheme: (state) => {
      state.themeMode = "dark";
    },
    addLightTheme: (state) => {
      state.themeMode = "light";
    },
  },
});

export const { addDarkTheme, addLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
