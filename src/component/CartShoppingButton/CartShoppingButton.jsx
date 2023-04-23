import React from "react";
import "./cartShoppingButton.scss";
import { useSelector } from "react-redux";
import ICONS from "../Icons/Icons.jsx";

const CartShoppingButton = ({ onClick, onHover }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <button
      type="button"
      className="btn btn-primary cart-shopping-button px-5 text-light"
    >
      <i className="me-1">{ICONS["cart-shopping-solid"]}</i>{" "}
      <span>Your Cart ({cart.totalItem})</span>
    </button>
  );
};

export default CartShoppingButton;
