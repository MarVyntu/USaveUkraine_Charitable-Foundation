import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="show-full-item">
        <div className="modal-full-item">
          <img
            src={"./img/" + this.props.item.img}  alt="image" 
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <p className="price">{this.props.item.price}$</p>
          <div
            className="add-to-card"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
