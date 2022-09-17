import React from 'react';
import './Products.css';

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div className="product-container">
      {products.map((prod) => (
        <div key={prod.id} className="product-item">
          <img
            src={prod.thumbnail}
            alt={prod.title}
            style={{ height: 200, objectFit: 'cover' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>{prod.title}</span>
            <b>₹{prod.price}</b>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              className="remove-buttton"
              onClick={() =>
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="add-buttton"
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    qty: 1,
                    price: prod.price,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
export default Products;
