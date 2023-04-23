import React from "react";
import "./toggleThemeButton.scss";
import ICONS from "../Icons/Icons.jsx";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../constants";

const ToggleThemeButton = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const htmlEle = document.querySelector(":root");
  htmlEle.setAttribute("data-theme", theme.themeMode);

  const handleToggleTheme = () => {
    dispatch({ type: types.TOGGLE_THEME });
  };

  return (
    <button
      type="button"
      className="btn toggle-theme-button"
      onClick={handleToggleTheme}
    >
      <i className="me-1">
        {ICONS[theme.themeMode === "light-mode" ? "sun" : "moon"]}{" "}
      </i>
    </button>
  );
};

export default ToggleThemeButton;
