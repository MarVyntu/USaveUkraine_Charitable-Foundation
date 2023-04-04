import React, { Component } from "react";
import { BsTrash3Fill } from "react-icons/bs";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} />
        <div className="bay-desc">
          <h2 className="bay-title">{this.props.item.title}</h2>
          <p className="bay-price">{this.props.item.price}$</p>
          <BsTrash3Fill
            className="delete-icon"
            onClick={() => this.props.onDelete(this.props.item.id)}
          />
        </div>
      </div>
    );
  }
}

export default Order;
