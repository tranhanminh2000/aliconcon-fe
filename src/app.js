import "bootstrap"; // Import bootstrap script library (include: jquery, popper js)
import "./app.scss"; // Import app style (Global config)
import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Modal from "./component/Modal/Modal.jsx";
import About from "./containers/About/About.jsx";
import Cart from "./containers/Cart/Cart.jsx";
import Detail from "./containers/Detail/Detail.jsx";
import Home from "./containers/Home/Home.jsx";
import Login from "./containers/Login/Login.jsx";
import NotFound from "./containers/NotFound/NotFound.jsx";
import Shop from "./containers/Shop/Shop.jsx";
import configStore from "./store/config.js";
import StartApp from "./component/HigherOrder/StartApp/StartApp.jsx";
import Protected from "./component/HigherOrder/Protected/Protected.jsx";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <StartApp />
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate to="/home" />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="shop" element={<Shop />}></Route>
              <Route path="cart" element={<Cart />}></Route>
              <Route path="detail/:id" element={<Detail />}></Route>
              <Route
                path="about"
                element={
                  <Protected requireLogin={true} requireRoles={"basic"}>
                    <About />
                  </Protected>
                }
              ></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Modal />
      </div>
    </Provider>
  );
}

reactDOM.render(<App />, document.getElementById("root"));
