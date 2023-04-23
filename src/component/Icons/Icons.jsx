import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBell,
  faMagnifyingGlass,
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

const ICONS = {
  "cart-shopping-solid": <FontAwesomeIcon icon={faCartShopping} />,
  "bell-solid": <FontAwesomeIcon icon={faBell} />,
  "search": <FontAwesomeIcon icon={faMagnifyingGlass} />,
  "sun": <FontAwesomeIcon icon={faSun} />,
  "moon": <FontAwesomeIcon icon={faMoon} />
};

export default ICONS;
