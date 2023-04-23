import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const ICONS = {
  "cart-shopping-solid": <FontAwesomeIcon icon={faCartShopping} />,
  "bell-solid": <FontAwesomeIcon icon={faBell} />,
  "search": <FontAwesomeIcon icon={faMagnifyingGlass} />,
};

export default ICONS;
