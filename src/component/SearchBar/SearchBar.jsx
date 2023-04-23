import React from "react";
import "./searchBar.scss";
// import { useSelector } from "react-redux";
import ICONS from "../Icons/Icons.jsx";

const SearchBar = () => {
  return (
    <div class="d-flex search-bar">
      <input
        class="form-control h-100"
        type="text"
        placeholder="Search any product..."
      />
      <button className="btn btn-primary h-100">
        <i class="bx bx-search text-light">{ICONS["search"]}</i>
      </button>
    </div>
  );
};

export default SearchBar;
