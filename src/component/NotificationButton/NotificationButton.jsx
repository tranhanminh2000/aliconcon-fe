import React from "react";
import "./notificationButton.scss";
import ICONS from "../Icons/Icons.jsx";

const NotificationButton = ({
  handleClick,
  title,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <button
      type="button"
      className="btn notification-button"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className="me-1">{ICONS["bell-solid"]} </i>
      <span>{title ?? null}</span>
    </button>
  );
};

export default NotificationButton;
