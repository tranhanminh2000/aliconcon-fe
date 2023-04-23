import * as types from "../constants";

let initialState = {
  themeMode: "light-mode",
};

const currentTheme = localStorage.getItem("themeMode");
if (
  currentTheme &&
  (currentTheme === "light-mode" || currentTheme === "dark-mode")
) {
  initialState.themeMode = currentTheme;
} else {
  localStorage.setItem("themeMode", initialState.themeMode);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_THEME:
      const newTheme =
        state.themeMode === "light-mode" ? "dark-mode" : "light-mode";
      localStorage.setItem("themeMode", newTheme);
      return { ...state, themeMode: newTheme };
    default:
      return state;
  }
};

export default reducer;
