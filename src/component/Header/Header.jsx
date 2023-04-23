import React, { useEffect, useRef } from "react";
import "./header.scss";
import * as actions from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, NavLink } from "react-router-dom";
import { NAV_LINK_LIST } from "../../constants/navLink.constant";
import CartShoppingButton from "../CartShoppingButton/CartShoppingButton.jsx";
import NotificationButton from "../NotificationButton/NotificationButton.jsx";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  // const handleShowLogin = () => {
  //   dispatch(actions.showModal());
  //   dispatch(actions.changeModalTitle("Login"));
  //   dispatch(actions.changeModalContent(<LoginForm />));
  // };

  const checkCurrentUser = () => {
    dispatch(actions.actFetchCurrentUser());
  };
  useRef;
  useEffect(() => {
    checkCurrentUser();
  }, [auth.authenticating]);

  const navListItem = ({ id, label, to, activeOnlyWhen, icon }) => {
    const match = useMatch({
      path: to,
      exact: activeOnlyWhen,
    });

    return (
      <li className="nav-item" key={id}>
        <NavLink
          to={to}
          className={"nav-link"}
          aria-current="page"
          activeClassName="active"
        >
          {icon}
          {label === "Cart" ? `${label}(${cart.totalItem})` : label}
        </NavLink>
      </li>
    );
  };
  const renderNavListItem = (navLinks) => {
    let xhtml = [];
    xhtml = navLinks.map((link) => {
      const { id, label, path, exact, icon } = link;

      return navListItem({
        id: id,
        label: label,
        to: path,
        activeOnlyWhen: exact,
        icon: icon,
      });
    });

    return xhtml;
  };

  const handleLogout = () => {
    dispatch(actions.actUserLogout());
  };
  return (
    <div className="fs-header">
      {/* Header Top */}
      <div className="top">
        <div className="container">
          <span className="email-text d-flex align-items-center">
            FS-Ecommerce
          </span>
          <div className="d-flex align-items-center">
            <NotificationButton title={"Notification"} />
            <ToggleThemeButton></ToggleThemeButton>
            <CartShoppingButton />
          </div>
        </div>
      </div>

      {/* Header Search*/}
      <div className="search py-5">
        <div className="container">
          <NavLink to="/home" className="logo" href="#">
            <div className="logo-text text-light fw-bold">
              <span className="first">FAST</span>
              <span> </span>
              <span className="second">SHOP</span>
            </div>
          </NavLink>

          <SearchBar></SearchBar>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-list">{renderNavListItem(NAV_LINK_LIST)}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
