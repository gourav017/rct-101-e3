import React, { useState } from "react";

const Product = () => {
  // Note: this id should come from api
  const product = { id: 1 };

  const [count, setcount] = useState(1);

  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button">add</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setcount(count+1)}>+</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setcount(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button">remove</button>
      </div>
    </div>
  );
};

export default Product;
