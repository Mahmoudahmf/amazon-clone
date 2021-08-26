import React from "react";
import "./Product.css";

function Product({title, price,rate,image}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          {title}
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rate).fill().map((_,i)=>(<span>⭐</span>))}
          
        </div>

        <img
          className="product__img"
          src={image}
          alt="img"
        />

        <button className="product__btn">Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
