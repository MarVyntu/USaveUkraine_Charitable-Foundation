import React, { useState } from "react";
import logo from "../img/USU-1.png";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

// import { Link } from "react-router-dom";
// import About from "./About";

const showOrders = (props) => {
  let total = 0;
  props.orders.forEach((el) => (total += Number.parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="total">Total: {new Intl.NumberFormat().format(total)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Your basket is empty</h2>
    </div>
  );
};

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false);

  return (
    <header>
      <div className="navbar">
        <div className="navbar-logo">
          <span className="logo">USU</span>
          <img src={logo} alt="logo" width={50} height={50} />
        </div>
        <div className="navbar-buttons">
          <FaShoppingCart
            onClick={() => setCardOpen((cardOpen = !cardOpen))}
            className={`shop-button ${cardOpen && "active"}`}
          />
          {cardOpen && (
            <div className="shop-card">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}

          <ul className="nav">
            <li>About us</li>
            <li>Contacts</li>
            <li>Cabinet</li>
          </ul>
        </div>
      </div>
      <div className="my-presentation"></div>
    </header>
  );
}
